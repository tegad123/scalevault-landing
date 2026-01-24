"use client";

import Link from "next/link";
import { useEffect } from "react";
import { MessageSquare } from "lucide-react";

const PAGES_LINKS = [
  { name: "Home", href: "/" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const COMPANY_LINKS = [{ name: "Contact", href: "/contact" }];

const SOCIAL_LINKS = [
  { name: "YouTube", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function Footer() {
  useEffect(() => {
    // Load Typeform script if not already present
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16 px-8">
      <div className="container mx-auto">
        {/* SMS Signup Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full px-4 py-2 mb-4">
              <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-sm text-[#F59E0B] font-medium">SMS Updates</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm">
              Get exclusive updates and insights delivered to your phone.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg">
            <div
              data-tf-live="01KFQ0QG5YJX6BWNK90R8K1HB0"
              style={{ height: "650px", width: "100%" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mb-12">
          {/* Pages Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              {PAGES_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
          >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                    {link.name}
                  </a>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; Scale Vault AI 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
