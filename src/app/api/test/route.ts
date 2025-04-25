import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    status: "success", 
    message: "API is working",
    time: new Date().toISOString() 
  });
}

export const runtime = "nodejs"; 