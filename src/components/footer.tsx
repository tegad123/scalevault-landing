"use client";

import Link from "next/link";
import Image from "next/image";

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
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16 px-6 md:px-10">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex justify-center items-center mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/scalevault-logo.png"
            alt="Scale Vault"
            className="object-contain opacity-90"
            style={{ height: 96, width: "auto" }}
          />
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
