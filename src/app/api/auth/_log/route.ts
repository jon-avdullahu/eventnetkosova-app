import { NextRequest, NextResponse } from "next/server";

// Handle NextAuth logging requests
export async function POST(req: NextRequest) {
  console.log("NextAuth log request received");
  return NextResponse.json({ success: true });
}

export const runtime = "nodejs"; 