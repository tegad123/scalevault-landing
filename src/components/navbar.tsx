"use client";

import React from "react";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[#1A1A1A]">
          Scale Vault AI
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/contact"
            className="font-medium text-[#1A1A1A] hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/login?tab=login"
            className="font-medium text-[#1A1A1A] hover:text-gray-600 transition-colors"
          >
            Log in
          </Link>
          <Link href="/login">
            <button className="bg-[#F5A623] text-[#1A1A1A] rounded-full px-6 py-2 hover:bg-[#E09000]">
              Get started
            </button>
          </Link>
        </div>
        <button
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden p-2 text-gray-700"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="container mx-auto mt-2 rounded-lg bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="font-medium text-[#1A1A1A]"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login?tab=login"
              className="font-medium text-[#1A1A1A]"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
            <Link href="/login" onClick={() => setOpen(false)}>
              <button className="bg-[#F5A623] text-[#1A1A1A] rounded-full px-6 py-2 hover:bg-[#E09000]">
                Get started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
