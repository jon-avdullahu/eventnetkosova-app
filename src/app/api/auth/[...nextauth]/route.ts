import NextAuth from "next-auth";
import { authConfig } from "@/auth";

// Create a handler that works with App Router
const handler = NextAuth(authConfig);

// Handle all necessary HTTP methods
export async function GET(request: Request) {
  return await handler.auth(request);
}

export async function POST(request: Request) {
  return await handler.auth(request);
}

export async function PUT(request: Request) {
  return await handler.auth(request);
}

export async function DELETE(request: Request) {
  return await handler.auth(request);
}

export async function HEAD(request: Request) {
  return await handler.auth(request);
}

export async function PATCH(request: Request) {
  return await handler.auth(request);
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Allow': 'GET, POST, PUT, DELETE, HEAD, PATCH, OPTIONS',
      'Content-Length': '0',
    },
  });
}

// Force NodeJS runtime
export const runtime = "nodejs"; 