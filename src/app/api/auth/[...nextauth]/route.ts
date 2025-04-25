import { authConfig } from "@/auth";
import NextAuth from "next-auth/next";

// Create a more explicit handler for NextAuth
const handler = NextAuth(authConfig);

// Export the handlers with explicit runtime configuration
export const GET = handler;
export const POST = handler;
export const runtime = "nodejs"; 