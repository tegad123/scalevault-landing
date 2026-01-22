"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";

const BOOKING_URL = "https://go.scalevault.ai/apply-761095";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
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
                  className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F59E0B] text-black rounded-lg py-4 text-base font-semibold hover:bg-[#D97706] transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
