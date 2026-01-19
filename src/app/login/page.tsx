"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function LoginContent() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") === "login" ? "login" : "signup";
  const showSurvey = searchParams.get("survey") === "true";
  const authError = searchParams.get("error");
  
  const [mode, setMode] = useState<"login" | "signup" | "survey">(
    showSurvey ? "survey" : (defaultTab === "login" ? "login" : "signup")
  );
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(authError ? "Authentication failed. Please try again." : null);
  const [message, setMessage] = useState<string | null>(null);
  
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
    setError(null);
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSurveyChange = (field: string, value: string) => {
    setSurveyData({ ...surveyData, [field]: value });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        // Successful login - redirect to survey or book-call
        window.location.href = "/book-call";
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          data: {
            full_name: signupData.name,
          },
        },
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        // Check if email confirmation is required
        if (data.user.identities && data.user.identities.length === 0) {
          setError("This email is already registered. Please log in instead.");
          return;
        }
        
        // If email confirmation is enabled, show message
        if (!data.session) {
          setMessage("Check your email for a confirmation link to complete signup.");
          return;
        }

        // If no confirmation needed, go to survey
        setMode("survey");
        setCurrentQuestion(1);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) {
        console.error("Google sign-in error:", error.message);
        setError("Failed to sign in with Google. Please try again.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
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
      window.location.href = "/book-call";
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
          className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
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
          className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
          required
        />
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-gray-400 hover:text-[#F59E0B] transition-colors">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#F59E0B] text-black rounded-lg py-4 text-base font-semibold hover:bg-[#D97706] transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Logging in..." : "Log In"}
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
          className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
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
          className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
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
          className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
          required
          minLength={6}
        />
      </div>
      <p className="text-xs text-gray-500">Password must be at least 6 characters</p>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#F59E0B] text-black rounded-lg py-4 text-base font-semibold hover:bg-[#D97706] transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating account..." : "Continue"}
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
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentQuestion} of 3</span>
            <span>{Math.round((currentQuestion / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-[#F59E0B] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Question 1: Business Type */}
        {currentQuestion === 1 && (
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">
              What type of education business do you run?
            </h3>
            <div className="space-y-3">
              {businessTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    surveyData.businessType === type
                      ? "bg-[#F59E0B]/20 border-2 border-[#F59E0B]"
                      : "bg-white/5 border-2 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="businessType"
                    value={type}
                    checked={surveyData.businessType === type}
                    onChange={(e) => handleSurveyChange("businessType", e.target.value)}
                    className="w-5 h-5 text-[#F59E0B] accent-[#F59E0B]"
                  />
                  <span className="ml-3 text-white">{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Question 2: Team Size */}
        {currentQuestion === 2 && (
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">
              What&apos;s your team size?
            </h3>
            <div className="space-y-3">
              {teamSizes.map((size) => (
                <label
                  key={size}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    surveyData.teamSize === size
                      ? "bg-[#F59E0B]/20 border-2 border-[#F59E0B]"
                      : "bg-white/5 border-2 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="teamSize"
                    value={size}
                    checked={surveyData.teamSize === size}
                    onChange={(e) => handleSurveyChange("teamSize", e.target.value)}
                    className="w-5 h-5 text-[#F59E0B] accent-[#F59E0B]"
                  />
                  <span className="ml-3 text-white">{size}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Question 3: Challenge */}
        {currentQuestion === 3 && (
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">
              What&apos;s your #1 challenge?
            </h3>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <label
                  key={challenge}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    surveyData.challenge === challenge
                      ? "bg-[#F59E0B]/20 border-2 border-[#F59E0B]"
                      : "bg-white/5 border-2 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="challenge"
                    value={challenge}
                    checked={surveyData.challenge === challenge}
                    onChange={(e) => handleSurveyChange("challenge", e.target.value)}
                    className="w-5 h-5 text-[#F59E0B] accent-[#F59E0B]"
                  />
                  <span className="ml-3 text-white">{challenge}</span>
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
              className="flex-1 border border-white/20 text-white rounded-lg py-4 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleSurveyNext}
            disabled={!isCurrentQuestionValid()}
            className={`flex-1 rounded-lg py-4 text-base font-semibold transition-colors ${
              isCurrentQuestionValid()
                ? "bg-[#F59E0B] text-black hover:bg-[#D97706]"
                : "bg-white/10 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestion === 3 ? "Book Your Call" : "Next"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="py-4 px-8 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="text-white text-lg font-bold">
              Scale Vault AI
            </span>
          </Link>
          <Link href="/contact">
            <button className="bg-white/10 text-white rounded-full px-6 py-2 text-sm hover:bg-white/20 transition-colors">
              Contact
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-md">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          {/* Success Message */}
          {message && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
              {message}
            </div>
          )}

          {mode !== "survey" && (
            <>
              {/* Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/10 rounded-full p-1 inline-flex">
                  <button
                    onClick={() => { setMode("login"); setError(null); setMessage(null); }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      mode === "login"
                        ? "bg-[#F59E0B] text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => { setMode("signup"); setError(null); setMessage(null); }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      mode === "signup"
                        ? "bg-[#F59E0B] text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-white text-3xl font-bold text-center mb-2">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-gray-400 text-center mb-8">
                {mode === "login"
                  ? "Enter your credentials to access your account"
                  : "Get started with Scale Vault AI today"}
              </p>

              {/* Form */}
              {mode === "login" ? renderLogin() : renderSignup()}

              {/* Divider */}
              <div className="flex items-center my-8">
                <div className="flex-1 border-t border-white/10"></div>
                <span className="px-4 text-gray-500 text-sm">or</span>
                <div className="flex-1 border-t border-white/10"></div>
              </div>

              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full border border-white/20 text-white rounded-lg py-4 text-base font-medium hover:bg-white/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
              <p className="text-center text-gray-400 text-sm mt-8">
                {mode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={() => { setMode("signup"); setError(null); setMessage(null); }}
                      className="text-[#F59E0B] font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => { setMode("login"); setError(null); setMessage(null); }}
                      className="text-[#F59E0B] font-medium hover:underline"
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
              <h1 className="text-white text-3xl font-bold text-center mb-2">
                Short Application
              </h1>
              <p className="text-gray-400 text-center mb-8">
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
