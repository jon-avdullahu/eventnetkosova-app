import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectDB from "./lib/mongodb";
import User from "./models/User";
import type { DefaultSession, NextAuthOptions } from "next-auth";

// Extend the session type to include user ID
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}

// Set runtime to nodejs to prevent edge runtime issues
export const runtime = "nodejs";

// Define user type
interface UserType {
  id: string;
  name: string;
  email: string;
  image?: string;
}

// Define the auth config with proper types
export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore - We'll ignore type checking for the authorize function
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        await connectDB();
        
        const user = await User.findOne({ email: credentials.email });
        
        if (!user) {
          return null;
        }
        
        const isPasswordMatch = await compare(
          credentials.password,
          user.password
        );
        
        if (!isPasswordMatch) {
          return null;
        }
        
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    // @ts-ignore - We'll ignore type checking for the jwt callback
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // @ts-ignore - We'll ignore type checking for the session callback
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
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
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST, handler as auth }; 