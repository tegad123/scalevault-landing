"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function LoginContent() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") === "login" ? "login" : "signup";
  const showSurvey = searchParams.get("survey") === "true";
  
  const [mode, setMode] = useState<"login" | "signup" | "survey">(
    showSurvey ? "survey" : (defaultTab === "login" ? "login" : "signup")
  );
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [surveyData, setSurveyData] = useState({
    businessType: "",
    teamSize: "",
    challenge: "",
  });

  // Check if user came from OAuth redirect
  useEffect(() => {
    if (showSurvey) {
      setMode("survey");
    }
  }, [showSurvey]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSurveyChange = (field: string, value: string) => {
    setSurveyData({ ...surveyData, [field]: value });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // After signup, go to survey
    setMode("survey");
    setCurrentQuestion(1);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) {
        console.error("Google sign-in error:", error.message);
        alert("Failed to sign in with Google. Please try again.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSurveyNext = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Survey complete - redirect to booking page
      console.log("Survey Data:", surveyData);
      window.location.href = "https://go.scalevault.ai/book-a-call";
    }
  };

  const handleSurveyBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isCurrentQuestionValid = () => {
    switch (currentQuestion) {
      case 1:
        return surveyData.businessType !== "";
      case 2:
        return surveyData.teamSize !== "";
      case 3:
        return surveyData.challenge !== "";
      default:
        return false;
    }
  };

  // Render Login Form
  const renderLogin = () => (
    <form onSubmit={handleLoginSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={loginData.email}
          onChange={handleLoginChange}
          className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          required
        />
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-gray-500 hover:text-[#F5A623] transition-colors">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-[#F5A623] text-[#1A1A1A] rounded-lg py-4 text-base font-semibold hover:bg-[#E09000] mt-6"
      >
        Log In
      </button>
    </form>
  );

  // Render Signup Form
  const renderSignup = () => (
    <form onSubmit={handleSignupSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={signupData.name}
          onChange={handleSignupChange}
          className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={signupData.email}
          onChange={handleSignupChange}
          className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={handleSignupChange}
          className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#F5A623] text-[#1A1A1A] rounded-lg py-4 text-base font-semibold hover:bg-[#E09000] mt-6"
      >
        Continue
      </button>
    </form>
  );

  // Render Survey
  const renderSurvey = () => {
    const businessTypes = [
      "Online Course",
      "Coaching/Consulting",
      "Membership/Community",
      "Multiple Programs",
    ];

    const teamSizes = [
      "Just me (Solo)",
      "2-5 people",
      "6-10 people",
      "11-25 people",
      "25+ people",
    ];

    const challenges = [
      "Overwhelmed with student support",
      "Missing sales while I sleep",
      "Can't scale without hiring",
      "Manual/repetitive tasks",
      "Low engagement/completion",
    ];

    return (
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Question {currentQuestion} of 3</span>
            <span>{Math.round((currentQuestion / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#F5A623] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Question 1: Business Type */}
        {currentQuestion === 1 && (
          <div className="space-y-4">
            <h3 className="text-[#1A1A1A] text-xl font-semibold mb-4">
              What type of education business do you run?
            </h3>
            <div className="space-y-3">
              {businessTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    surveyData.businessType === type
                      ? "bg-[#F5A623] bg-opacity-10 border-2 border-[#F5A623]"
                      : "bg-gray-100 border-2 border-transparent hover:bg-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="businessType"
                    value={type}
                    checked={surveyData.businessType === type}
                    onChange={(e) => handleSurveyChange("businessType", e.target.value)}
                    className="w-5 h-5 text-[#F5A623] accent-[#F5A623]"
                  />
                  <span className="ml-3 text-[#1A1A1A]">{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Question 2: Team Size */}
        {currentQuestion === 2 && (
          <div className="space-y-4">
            <h3 className="text-[#1A1A1A] text-xl font-semibold mb-4">
              What&apos;s your team size?
            </h3>
            <div className="space-y-3">
              {teamSizes.map((size) => (
                <label
                  key={size}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    surveyData.teamSize === size
                      ? "bg-[#F5A623] bg-opacity-10 border-2 border-[#F5A623]"
                      : "bg-gray-100 border-2 border-transparent hover:bg-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="teamSize"
                    value={size}
                    checked={surveyData.teamSize === size}
                    onChange={(e) => handleSurveyChange("teamSize", e.target.value)}
                    className="w-5 h-5 text-[#F5A623] accent-[#F5A623]"
                  />
                  <span className="ml-3 text-[#1A1A1A]">{size}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Question 3: Challenge */}
        {currentQuestion === 3 && (
          <div className="space-y-4">
            <h3 className="text-[#1A1A1A] text-xl font-semibold mb-4">
              What&apos;s your #1 challenge?
            </h3>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <label
                  key={challenge}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    surveyData.challenge === challenge
                      ? "bg-[#F5A623] bg-opacity-10 border-2 border-[#F5A623]"
                      : "bg-gray-100 border-2 border-transparent hover:bg-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="challenge"
                    value={challenge}
                    checked={surveyData.challenge === challenge}
                    onChange={(e) => handleSurveyChange("challenge", e.target.value)}
                    className="w-5 h-5 text-[#F5A623] accent-[#F5A623]"
                  />
                  <span className="ml-3 text-[#1A1A1A]">{challenge}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          {currentQuestion > 1 && (
            <button
              onClick={handleSurveyBack}
              className="flex-1 border border-gray-300 text-[#1A1A1A] rounded-lg py-4 text-base font-semibold hover:bg-gray-50"
            >
              Back
            </button>
          )}
          <button
            onClick={handleSurveyNext}
            disabled={!isCurrentQuestionValid()}
            className={`flex-1 rounded-lg py-4 text-base font-semibold ${
              isCurrentQuestionValid()
                ? "bg-[#F5A623] text-[#1A1A1A] hover:bg-[#E09000]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestion === 3 ? "Book Your Call" : "Next"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="py-4 px-8 border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="text-[#1A1A1A] text-lg font-bold">
              Scale Vault AI
            </span>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-100 text-[#1A1A1A] rounded-full px-6 py-2 text-sm hover:bg-gray-200">
              Contact
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-md">
          {mode !== "survey" && (
            <>
              {/* Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-full p-1 inline-flex">
                  <button
                    onClick={() => setMode("login")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      mode === "login"
                        ? "bg-[#F5A623] text-[#1A1A1A]"
                        : "text-gray-500 hover:text-[#1A1A1A]"
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => setMode("signup")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      mode === "signup"
                        ? "bg-[#F5A623] text-[#1A1A1A]"
                        : "text-gray-500 hover:text-[#1A1A1A]"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[#1A1A1A] text-3xl font-bold text-center mb-2">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-gray-500 text-center mb-8">
                {mode === "login"
                  ? "Enter your credentials to access your account"
                  : "Get started with Scale Vault AI today"}
              </p>

              {/* Form */}
              {mode === "login" ? renderLogin() : renderSignup()}

              {/* Divider */}
              <div className="flex items-center my-8">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-gray-400 text-sm">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full border border-gray-200 text-[#1A1A1A] rounded-lg py-4 text-base font-medium hover:bg-gray-50 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span>Connecting...</span>
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>

              {/* Footer text */}
              <p className="text-center text-gray-500 text-sm mt-8">
                {mode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={() => setMode("signup")}
                      className="text-[#F5A623] font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("login")}
                      className="text-[#F5A623] font-medium hover:underline"
                    >
                      Log in
                    </button>
                  </>
                )}
              </p>
            </>
          )}

          {mode === "survey" && (
            <>
              <h1 className="text-[#1A1A1A] text-3xl font-bold text-center mb-2">
                Short Application
              </h1>
              <p className="text-gray-500 text-center mb-8">
                Help us understand your business so we can serve you better
              </p>
              {renderSurvey()}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#1A1A1A]">Loading...</div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
