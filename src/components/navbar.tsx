"use client";

import React from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

const NAV_LINKS = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 -ml-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/scalevault-logo.png"
              alt="Scale Vault AI"
              className="object-contain"
              style={{ height: "clamp(80px, 10vw, 110px)", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-black px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F59E0B]/20"
            >
              Book Free Strategy Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white font-medium py-2 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-black px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 shadow-lg shadow-[#F59E0B]/20"
              onClick={() => setOpen(false)}
            >
              Book Free Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
