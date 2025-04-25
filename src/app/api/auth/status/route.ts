import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "@/auth";
import connectDB from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  try {
    // Check database connection
    let dbStatus = "unknown";
    let dbError = null;
    
    try {
      await connectDB();
      dbStatus = "connected";
    } catch (error) {
      dbStatus = "error";
      dbError = String(error);
    }
    
    // Check environment variables
    const envStatus = {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || "Not set",
      hasSecret: !!process.env.NEXTAUTH_SECRET,
      hasMongoUri: !!process.env.MONGODB_URI,
      nodeEnv: process.env.NODE_ENV || "Not set",
    };
    
    // Return status
    return NextResponse.json({
      status: "ok",
      time: new Date().toISOString(),
      database: {
        status: dbStatus,
        error: dbError,
      },
      environment: envStatus,
      auth: {
        providers: authConfig.providers.map(p => p.id),
        hasCallbacks: !!authConfig.callbacks,
        pages: authConfig.pages,
      },
      headers: {
        host: req.headers.get("host"),
        referer: req.headers.get("referer"),
        userAgent: req.headers.get("user-agent"),
      }
    });
  } catch (error) {
    console.error("Status check error:", error);
    return NextResponse.json({
      status: "error",
      message: String(error),
      time: new Date().toISOString()
    }, { status: 500 });
  }
}

export const runtime = "nodejs"; 