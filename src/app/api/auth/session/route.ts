import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// Handle NextAuth session requests
export async function GET(req: NextRequest) {
  const session = await auth();
  return NextResponse.json(session || { user: null });
}

export const runtime = "nodejs"; 