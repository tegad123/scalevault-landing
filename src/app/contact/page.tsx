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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-8 border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
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
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="bg-gray-100 text-[#1A1A1A] rounded-full px-6 py-2 hover:bg-gray-200">
                Log In
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-[#F5A623] text-[#1A1A1A] rounded-full px-6 py-2 hover:bg-[#E09000]">
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
            <h1 className="text-[#1A1A1A] text-5xl md:text-6xl font-bold leading-tight mb-8">
              Get in touch with the Scale Vault{" "}
              <span className="text-[#F5A623]">AI</span>
              <br />
              <span className="text-[#F5A623]">team</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Have questions or need support? Send us a message here or you can
              email us on{" "}
              <a
                href="mailto:info@scalevault.ai"
                className="text-[#1A1A1A] font-semibold hover:text-[#F5A623] transition-colors"
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
                  className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
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
                  className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
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
                  className="w-full bg-gray-100 text-[#1A1A1A] placeholder-gray-400 rounded-lg px-6 py-4 border-0 focus:outline-none focus:ring-2 focus:ring-[#F5A623] resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F5A623] text-[#1A1A1A] rounded-lg py-4 text-base font-semibold hover:bg-[#E09000]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 px-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
            {/* Pages Column */}
            <div>
              <h4 className="text-[#1A1A1A] font-semibold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-[#1A1A1A] font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-[#1A1A1A] font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm"
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
