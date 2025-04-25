import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/auth";

// Debug endpoint to check if NextAuth is working
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authConfig);
    const envVars = {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || "Not Set",
      HAS_SECRET: !!process.env.NEXTAUTH_SECRET,
      HAS_MONGODB: !!process.env.MONGODB_URI,
      NODE_ENV: process.env.NODE_ENV || "Not Set",
    };
    
    return new NextResponse(
      JSON.stringify({
        sessionExists: !!session,
        session: session || null,
        environment: envVars,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Debug endpoint error:', error);
    
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to get debug info',
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : null,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export const runtime = "nodejs"; 