"use client";

import Link from "next/link";

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="py-4 px-8 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <span className="text-white text-lg font-bold">Scale Vault AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <button className="bg-white/10 text-white rounded-full px-6 py-2 text-sm hover:bg-white/20 transition-colors">
                Contact
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
      <main className="container mx-auto px-4 py-12">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Schedule Your Strategy Call
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss how we can protect your course revenue with a custom platform and built-in chargeback protection.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="calendar-container bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
            style={{ 
              position: 'relative',
              paddingTop: '0'
            }}
          >
            <iframe
              src="https://book.scalevault.ai/booking-step"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="yes"
              style={{
                border: 'none',
                display: 'block',
                position: 'relative',
                top: '-66px',
                height: 'calc(800px + 66px)',
                marginBottom: '-66px'
              }}
              title="Book a Call Calendar"
              allow="camera; microphone"
            />
          </div>
        </div>

        {/* Trust Elements */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            No pressure. Just a clear plan for your custom course platform.
          </p>
        </div>
      </main>
    </div>
  );
}
