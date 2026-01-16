"use client";

import React, { useState } from "react";
import Link from "next/link";

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
      <header className="py-4 px-8 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
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
          <div className="flex items-center gap-4">
            <Link href="/login?tab=login">
              <button className="bg-white/10 text-white rounded-full px-6 py-2 hover:bg-white/20 transition-colors">
                Log In
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-[#F59E0B] text-black rounded-full px-6 py-2 hover:bg-[#D97706] transition-colors font-semibold">
                Get started
              </button>
            </Link>
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

      {/* Footer */}
      <footer className="mt-auto py-12 px-8 bg-black border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
            {/* Pages Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
