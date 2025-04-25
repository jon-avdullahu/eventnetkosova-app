import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    
    // Validation
    if (!email || !password) {
      return NextResponse.json({ 
        success: false, 
        message: "Missing email or password" 
      }, { status: 400 });
    }
    
    // Connect to DB
    await connectDB();
    
    // Find user
    const userModel = User as any;
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        message: "User not found",
        email
      }, { status: 404 });
    }
    
    // Check password
    const isPasswordValid = await compare(password, user.password);
    
    if (!isPasswordValid) {
      return NextResponse.json({ 
        success: false, 
        message: "Invalid password" 
      }, { status: 401 });
    }
    
    // Success - return user details without password
    return NextResponse.json({
      success: true,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    console.error("Test credentials error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Server error",
      error: String(error)
    }, { status: 500 });
  }
}

export const runtime = "nodejs"; 