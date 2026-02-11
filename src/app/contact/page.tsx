"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";

const BOOKING_URL = "/book-a-free-call";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      setFormData({ firstName: "", lastName: "", email: "", phone: "", smsConsent: false });
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
                <h3 className="text-white text-xl font-semibold mb-2">Submitted Successfully!</h3>
                <p className="text-gray-400 mb-6">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#F59E0B] hover:text-[#D97706] font-medium transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent disabled:opacity-50"
                    required
                  />
                </div>
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-[#F59E0B] focus:ring-[#F59E0B] focus:ring-offset-0 cursor-pointer"
                      required
                    />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      By submitting this form, you agree to receive SMS messages from Scale Vault AI related to appointments and services you requested. Message & data rates may apply. Text STOP to opt out.
                    </p>
                  </label>
                </div>
                <p className="text-gray-400 text-sm">
                  Consent is not a condition of purchase. Msg frequency varies. View our{" "}
                  <Link href="/privacy-policy" className="text-white underline hover:text-[#F59E0B] transition-colors">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-service" className="text-white underline hover:text-[#F59E0B] transition-colors">
                    Terms of Service
                  </Link>
                  .
                </p>
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
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
