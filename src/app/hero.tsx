"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Typography
            variant="h1"
            className="text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Scale Your Online Course to 10x More Students with AI Automation
          </Typography>
          <Typography className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Scale Vault AI helps course creators automate student support, personalize learning, and boost enrollments WITHOUT hiring extra staff
          </Typography>
          <a
            href="https://go.scalevault.ai/apply"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#F5A623] text-white rounded-full px-10 py-4 text-base hover:bg-[#E09000] shadow-none">
              Get started
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
