"use client";

import { Typography } from "@material-tailwind/react";

const PAGES_LINKS = [
  { name: "Home", href: "/" },
  { name: "Sign Up", href: "/login" },
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
    <footer id="contact" className="bg-[#FAFAFA] py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mb-12">
          {/* Pages Column */}
          <div>
            <Typography className="text-[#1A1A1A] font-semibold mb-4">
              Pages
            </Typography>
            <ul className="space-y-2">
              {PAGES_LINKS.map((link) => (
                <li key={link.name}>
                  <Typography
                    as="a"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <Typography className="text-[#1A1A1A] font-semibold mb-4">
              Company
            </Typography>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Typography
                    as="a"
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <Typography className="text-[#1A1A1A] font-semibold mb-4">
              Social
            </Typography>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Typography
                    as="a"
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-200 pt-8">
          <Typography className="text-gray-400 text-sm">
            &copy; Scale Vault AI 2025
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
