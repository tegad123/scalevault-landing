"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { MessageSquare } from "lucide-react";

const BOOKING_URL = "https://go.scalevault.ai/apply-761095";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Load Typeform script if not already present
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              Scale Vault AI
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F59E0B] hover:bg-[#D97706] text-black px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F59E0B]/20"
              >
                Book Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Text */}
          <div className="pt-8">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-8">
              Get in touch with the Scale Vault{" "}
              <span className="text-[#F59E0B]">AI</span>
              <br />
              <span className="text-[#F59E0B]">team</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Have questions or need support? Send us a message here or you can
              email us on{" "}
              <a
                href="mailto:info@scalevault.ai"
                className="text-white font-semibold hover:text-[#F59E0B] transition-colors"
              >
                info@scalevault.ai
              </a>
            </p>
          </div>

          {/* Right Side - Form */}
          <div>
            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#F59E0B] hover:text-[#D97706] font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent disabled:opacity-50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#F59E0B] text-black rounded-lg py-4 text-base font-semibold hover:bg-[#D97706] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}

            {/* SMS Consent Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
                <h3 className="text-white text-lg font-semibold">Get SMS Updates</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Sign up to receive exclusive updates and insights directly to your phone.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div
                  data-tf-live="01KFQ0QG5YJX6BWNK90R8K1HB0"
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
