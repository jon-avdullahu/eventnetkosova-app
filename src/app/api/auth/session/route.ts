import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/auth";

// Handle NextAuth session requests
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authConfig);
    
    // Return a properly formatted JSON response
    return new NextResponse(
      JSON.stringify(session || { user: null }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Session error:', error);
    
    // Return a proper error response
    return new NextResponse(
      JSON.stringify({ error: 'Failed to get session' }),
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