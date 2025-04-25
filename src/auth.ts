import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectDB from "./lib/mongodb";
import User from "./models/User";
import type { NextAuthOptions, DefaultSession } from "next-auth";

// Extend the session type to include user ID
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

// Force NodeJS runtime to prevent edge runtime issues
export const runtime = "nodejs";

// Define user type
interface UserType {
  id: string;
  name: string;
  email: string;
  image?: string;
}

// Define NextAuth configuration
export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log("Missing credentials");
            return null;
          }
          
          await connectDB();
          
          // Use as any to avoid type issues
          const userModel = User as any;
          const user = await userModel.findOne({ email: credentials.email });
          
          if (!user) {
            console.log("User not found");
            return null;
          }
          
          const isPasswordMatch = await compare(
            credentials.password,
            user.password
          );
          
          if (!isPasswordMatch) {
            console.log("Password doesn't match");
            return null;
          }
          
          console.log("Auth successful for:", user.email);
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

// Auth function to be used in middleware or server components
export const { auth } = NextAuth(authConfig); 