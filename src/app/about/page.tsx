import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { GSoCSunLogo } from "@/components/shared/icons";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

export const metadata: Metadata = {
  title: "About",
  description:
    "Google Summer of Code is a global, online mentoring program focused on introducing new contributors to open source software development.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full">
      {/* 1. Hero Header */}
      <section className="relative bg-[#1a73e8] text-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 pointer-events-none opacity-50">
          <DotGridPattern
            color="#4285f4"
            rows={12}
            cols={14}
            gap={44}
            radius={16}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-mono tracking-tight leading-tight mb-6">
              About
              <br />
              Google Summer of Code
            </h1>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-xl">
              Google Summer of Code is a global, online mentoring program focused on introducing
              new contributors to open source software development. GSoC contributors work on a 12+
              week programming project with the guidance of mentors from their open source
              organization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Stat Callout Section */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#202124] leading-relaxed font-sans">
            Since 2005, the Google Summer of Code program has connected 21,000+ new open source
            contributors from 123 countries with 20,000+ mentors from 138 countries. Google Summer
            of Code has produced over 46 million lines of code for 1,000+ open source organizations.
          </p>
        </div>
      </section>

      {/* 3. Program Description with Visual Illustration */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual cards composition (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center relative py-6">
              {/* Back orange card */}
              <div className="w-48 h-60 bg-[#e37400] rounded-xl relative -rotate-3 shadow-md flex items-center justify-center p-4">
                <div className="w-full h-full border border-white/20 rounded-lg" />
              </div>
              {/* Front white card with Sun Emblem */}
              <div className="w-52 h-44 bg-white rounded-2xl shadow-xl absolute -bottom-2 -right-2 sm:right-6 flex items-center justify-center border border-[#e8eaed]">
                <GSoCSunLogo className="w-16 h-16" />
              </div>
            </div>

            {/* Description text (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-[#3c4043] text-base leading-relaxed">
              <p>
                During Google Summer of Code, participating contributors are paired with mentors
                from open source organizations, gaining exposure to real-world software development
                techniques. Contributors will learn from experienced open source developers while
                writing code for real-world projects! A small stipend is provided as an incentive.
              </p>
              <p>
                Participating organizations use the program to identify and bring in new, excited
                developers. Many of those new developers will continue to contribute to their new
                communities and open source long after GSoC is over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Previous Programs Banner */}
      <section className="relative w-full bg-[#2d3135] text-white py-16 sm:py-20 px-6 sm:px-12 lg:px-20 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <DotGridPattern
            color="#9aa0a6"
            rows={8}
            cols={20}
            gap={44}
            radius={10}
            perspective={false}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-normal font-mono text-white mb-3">
            Previous Programs
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8">
            Interested in projects from previous years?
          </p>
          <Link
            href="/archive"
            className="inline-block border border-white text-white rounded-xs px-6 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Check out past projects
          </Link>
        </div>
      </section>
    </main>
  );
}
