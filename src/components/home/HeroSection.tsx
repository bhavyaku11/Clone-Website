import React from "react";
import { GSoCSunLogo } from "@/components/shared/icons";

export function HeroSection() {
  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center bg-white px-6 sm:px-12 lg:px-20 py-16 overflow-hidden">
      {/* Authentic Google Summer of Code 3D Perspective Dot Canvas with blur */}
      <div className="home-banner-dots" aria-hidden="true" />

      {/* Content */}
      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow lockup */}
          <div className="inline-flex items-center gap-2 mb-6">
            <GSoCSunLogo className="w-6 h-6" />
            <span className="text-[#202124] font-medium text-sm sm:text-base font-sans tracking-tight">
              Google
            </span>
            <span className="text-[#5f6368] text-sm sm:text-base font-sans tracking-tight">
              Summer of Code
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#202124] font-mono tracking-tight leading-[1.08]">
            GSoC 2026 Contributors Announced!
          </h1>

          {/* Blue accent block */}
          <div className="w-18 h-8 bg-[#1a73e8] rounded-xs mt-6" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
