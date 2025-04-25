"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const [errorType, setErrorType] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Get error from URL query parameters
    const error = searchParams.get("error");
    setErrorType(error);

    // Generate readable error message
    if (error === "Configuration") {
      setErrorMessage("There is a problem with the server configuration.");
    } else if (error === "AccessDenied") {
      setErrorMessage("You do not have access to this resource.");
    } else if (error === "Verification") {
      setErrorMessage("The verification token has expired or has already been used.");
    } else if (error === "Default") {
      setErrorMessage("An unspecified authentication error occurred.");
    } else if (error === "OAuthSignin") {
      setErrorMessage("Error in the OAuth sign-in process.");
    } else if (error === "OAuthCallback") {
      setErrorMessage("Error in the OAuth callback process.");
    } else if (error === "OAuthCreateAccount") {
      setErrorMessage("Error creating OAuth account.");
    } else if (error === "EmailCreateAccount") {
      setErrorMessage("Error creating email account.");
    } else if (error === "Callback") {
      setErrorMessage("Error in the OAuth callback handler.");
    } else if (error === "OAuthAccountNotLinked") {
      setErrorMessage("This email is already registered with another provider.");
    } else if (error === "EmailSignin") {
      setErrorMessage("Error sending the email signin message.");
    } else if (error === "CredentialsSignin") {
      setErrorMessage("The email or password is incorrect.");
    } else {
      setErrorMessage("An unknown authentication error occurred.");
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">Authentication Error</h1>
          <div className="mt-4 p-4 bg-red-50 rounded-md border-l-4 border-red-500">
            <p className="text-lg font-medium text-red-700">Error Type: {errorType || "Unknown"}</p>
            <p className="mt-2 text-red-600">{errorMessage}</p>
          </div>
          
          <div className="mt-8 space-y-4">
            <p className="text-gray-600">Here are some things you can try:</p>
            <ul className="list-disc text-left ml-8 text-gray-600 space-y-2">
              <li>Double-check your email and password</li>
              <li>Clear your browser cookies and try again</li>
              <li>Try with a different browser</li>
              <li>Contact support if the issue persists</li>
            </ul>
          </div>
          
          <div className="mt-8 flex flex-col space-y-3">
            <Link 
              href="/login" 
              className="w-full bg-primary py-2 px-4 rounded-md text-white font-medium hover:bg-opacity-90"
            >
              Back to Login
            </Link>
            <Link 
              href="/" 
              className="w-full bg-gray-200 py-2 px-4 rounded-md text-gray-800 font-medium hover:bg-gray-300"
            >
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 