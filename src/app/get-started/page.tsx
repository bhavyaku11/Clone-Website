import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

export const metadata: Metadata = {
  title: "Get started",
  description: "Learn how to get started as an organization or contributor in Google Summer of Code.",
};

export default function GetStartedPage() {
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-mono tracking-tight leading-tight">
            Get
            <br />
            Started
          </h1>
        </div>
      </section>

      {/* 2. Split Panel: Organizations vs Contributors */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Organizations (Dark Charcoal) */}
          <div className="bg-[#3c4043] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-normal font-mono text-white mb-4">
                Organizations
              </h2>
              <p className="text-gray-200 text-base leading-relaxed mb-8">
                Apply to be a mentor organization and help bring in new, excited developers to your
                open source community!
              </p>
            </div>
            <div>
              <button
                type="button"
                disabled
                className="bg-[#5f6368] text-[#bdc1c6] cursor-not-allowed rounded-xs px-6 py-2.5 text-sm font-medium"
              >
                Organization registration closed
              </button>
            </div>
          </div>

          {/* Contributors (Light) */}
          <div className="bg-white text-[#202124] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between border-b md:border-b-0 border-[#dadce0]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124] mb-4">
                GSoC contributors
              </h2>
              <p className="text-[#3c4043] text-base leading-relaxed mb-8">
                Spend your summer writing code for an open source software project!
              </p>
            </div>
            <div>
              <a
                href="https://summerofcode.withgoogle.com/programs/2026/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a73e8] text-white rounded-xs px-6 py-2.5 text-sm font-medium hover:bg-[#1765cc] transition-colors"
              >
                View 2026 project list
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Eligibility Criteria Section */}
      <section className="relative w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Organization Eligibility */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124]">
              Organization
              <br />
              eligibility
            </h2>

            <ol className="space-y-4 list-decimal list-inside text-[#3c4043] text-sm sm:text-base leading-relaxed">
              <li className="pl-1">
                <span>Must run an active open source or free software project.</span>
              </li>
              <li className="pl-1">
                <span>
                  Must have produced and released software under an{" "}
                  <a
                    href="https://opensource.org/licenses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    OSI approved license
                  </a>
                  .
                </span>
              </li>
              <li className="pl-1">
                <span>
                  Must not be based in a country currently embargoed by the United States.
                </span>
              </li>
            </ol>

            <div className="pt-4">
              <Link href="/terms" className="text-[#1a73e8] hover:underline text-sm font-medium">
                Review organization terms
              </Link>
            </div>
          </div>

          {/* Right: Contributor Eligibility */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124]">
              GSoC contributor
              <br />
              eligibility
            </h2>

            <ol className="space-y-4 list-decimal list-inside text-[#3c4043] text-sm sm:text-base leading-relaxed">
              <li className="pl-1">
                <span>Must be at least 18 years old at time of registration.</span>
              </li>
              <li className="pl-1">
                <span>Must be a student or an open source beginner.</span>
              </li>
              <li className="pl-1">
                <span>
                  Must be eligible to work in their country of residence during duration of
                  program.
                </span>
              </li>
              <li className="pl-1">
                <span>
                  Must be a resident of a country not currently embargoed by the United States.
                </span>
              </li>
            </ol>

            <div className="pt-4">
              <Link href="/terms" className="text-[#1a73e8] hover:underline text-sm font-medium">
                Review contributor terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
