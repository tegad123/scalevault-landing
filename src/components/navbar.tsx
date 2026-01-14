"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
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
    <MTNavbar
      shadow={true}
      fullWidth
      blurred={false}
      color="white"
      className="sticky top-0 z-50 border-0 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography className="text-lg font-bold text-[#1A1A1A]">
          Scale Vault AI
        </Typography>
        <div className="hidden items-center gap-6 lg:flex">
          <Typography
            as="a"
            href="/contact"
            className="font-medium text-[#1A1A1A] hover:text-gray-600 transition-colors"
          >
            Contact
          </Typography>
          <Typography
            as="a"
            href="/login?tab=login"
            className="font-medium text-[#1A1A1A] hover:text-gray-600 transition-colors"
          >
            Log in
          </Typography>
          <a href="/login">
            <Button className="bg-[#F5A623] text-[#1A1A1A] rounded-full px-6 hover:bg-[#E09000] shadow-none">
              Get started
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <div className="flex flex-col gap-4">
            <Typography
              as="a"
              href="/contact"
              className="font-medium text-[#1A1A1A]"
            >
              Contact
            </Typography>
            <Typography
              as="a"
              href="/login?tab=login"
              className="font-medium text-[#1A1A1A]"
            >
              Log in
            </Typography>
            <a href="/login">
              <Button className="bg-[#F5A623] text-[#1A1A1A] rounded-full px-6 hover:bg-[#E09000] shadow-none">
                Get started
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

