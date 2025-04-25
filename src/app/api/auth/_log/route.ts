import { NextRequest, NextResponse } from "next/server";

// Handle all HTTP methods for the _log endpoint
export async function GET(req: NextRequest) {
  console.log("NextAuth log GET request received");
  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: NextRequest) {
  console.log("NextAuth log POST request received");
  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Add a handler for OPTIONS requests which often precede POST requests in CORS scenarios
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export const runtime = "nodejs"; 