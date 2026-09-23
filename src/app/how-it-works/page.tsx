import React from "react";
import { Metadata } from "next";
import {
  ApplyPinIcon,
  CodeBracketsIcon,
  ShareGlobeIcon,
  LaptopIcon,
  BuildingIcon,
  CommunityIcon
} from "@/components/shared/icons";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Learn how Google Summer of Code works for contributors, organizations, and mentors with full timeline and guidelines.",
};

const timelineEvents = [
  {
    title: "Organization Application Period",
    date: "January 22, 2026 – February 6, 2026",
    description: "Open source organizations can submit their applications to be mentor organizations for GSoC.",
  },
  {
    title: "Organizations Announced",
    date: "February 21, 2026",
    description: "Potential GSoC contributors discuss project ideas with accepted mentor organizations.",
  },
  {
    title: "Contributor Application Period",
    date: "March 18, 2026 – April 2, 2026",
    description: "Contributors submit their project proposals to mentor organizations.",
  },
  {
    title: "Accepted GSoC Contributors Announced",
    date: "May 1, 2026",
    description: "Accepted contributors are paired with mentors and begin their community bonding phase.",
  },
  {
    title: "Coding Period",
    date: "May 27, 2026 – August 25, 2026",
    description: "Contributors work on their open source projects under active mentor guidance.",
  },
  {
    title: "Final Results Announced",
    date: "September 3, 2026",
    description: "Mentors submit evaluations and successful contributors celebrate their achievements!",
  },
];

export default function HowItWorksPage() {
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-mono tracking-tight leading-tight mb-4">
            How It
            <br />
            Works
          </h1>
        </div>
      </section>

      {/* 2. Three Step Cards */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-20 -mt-8 relative z-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1: Apply */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8eaed] shadow-lg text-center flex flex-col items-center">
            <div className="p-3 bg-orange-50 rounded-full mb-4">
              <ApplyPinIcon className="w-8 h-8 text-[#e37400]" />
            </div>
            <h2 className="text-xl font-medium font-sans text-[#202124] mb-2">Apply</h2>
            <p className="text-sm text-[#5f6368] leading-relaxed">
              Interested contributors propose a project to work on.
            </p>
          </div>

          {/* Step 2: Code */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8eaed] shadow-lg text-center flex flex-col items-center">
            <div className="p-3 bg-green-50 rounded-full mb-4">
              <CodeBracketsIcon className="w-8 h-8 text-[#1e8e3e]" />
            </div>
            <h2 className="text-xl font-medium font-sans text-[#202124] mb-2">Code</h2>
            <p className="text-sm text-[#5f6368] leading-relaxed">
              Accepted GSoC contributors spend the summer coding with guidance from a mentor.
            </p>
          </div>

          {/* Step 3: Share */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8eaed] shadow-lg text-center flex flex-col items-center">
            <div className="p-3 bg-blue-50 rounded-full mb-4">
              <ShareGlobeIcon className="w-8 h-8 text-[#1a73e8]" />
            </div>
            <h2 className="text-xl font-medium font-sans text-[#202124] mb-2">Share</h2>
            <p className="text-sm text-[#5f6368] leading-relaxed">
              Submit your code for the world to use!
            </p>
          </div>
        </div>
      </section>

      {/* 3. Role Sections */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 space-y-24 max-w-[1280px] mx-auto">
        {/* Role 1: Contributors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-normal font-mono text-[#202124]">
              Contributors
            </h2>
            <p className="text-[#3c4043] text-base leading-relaxed">
              Potential GSoC contributors contact the mentor organizations they want to work with and
              write a project proposal based on ideas the organization has suggested. Once accepted,
              GSoC contributors spend a few weeks becoming familiar with the community norms and
              codebase while determining expected milestones with their mentor for the summer. GSoC
              contributors then spend 12+ weeks coding on their projects.
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative py-6">
            <div className="w-48 h-60 bg-[#e37400] rounded-xl relative -rotate-3 shadow-md" />
            <div className="w-52 h-44 bg-white rounded-2xl shadow-xl absolute -bottom-2 -right-2 sm:right-6 flex items-center justify-center border border-[#e8eaed]">
              <LaptopIcon className="w-16 h-16 text-[#e37400]" />
            </div>
          </div>
        </div>

        {/* Role 2: Organizations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex items-center justify-center relative py-6">
            <div className="w-48 h-60 bg-[#1e8e3e] rounded-xl relative rotate-3 shadow-md" />
            <div className="w-52 h-44 bg-white rounded-2xl shadow-xl absolute -bottom-2 -left-2 sm:left-6 flex items-center justify-center border border-[#e8eaed]">
              <BuildingIcon className="w-16 h-16 text-[#1e8e3e]" />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-normal font-mono text-[#202124]">
              Organizations
            </h2>
            <p className="text-[#3c4043] text-base leading-relaxed">
              Open source projects apply to be mentor organizations. Once accepted, organizations
              discuss possible ideas with contributors and choose the proposals they wish to mentor
              for the summer. They provide mentors to help guide each contributor through the program.
            </p>
            <div>
              <button
                type="button"
                disabled
                className="bg-[#e0e0e0] text-[#757575] cursor-not-allowed rounded-xs px-6 py-2.5 text-sm font-medium"
              >
                Organization registration closed
              </button>
            </div>
          </div>
        </div>

        {/* Role 3: Mentors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-normal font-mono text-[#202124]">
              Mentors
            </h2>
            <p className="text-[#3c4043] text-base leading-relaxed">
              Community members and committers already active in the mentoring organizations can
              choose to mentor a contributor project. Mentors and GSoC contributors work together to
              determine appropriate goals for the program period. Mentor interaction is a vital part
              of the program.
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center relative py-6">
            <div className="w-48 h-60 bg-[#1a73e8] rounded-xl relative -rotate-3 shadow-md" />
            <div className="w-52 h-44 bg-white rounded-2xl shadow-xl absolute -bottom-2 -right-2 sm:right-6 flex items-center justify-center border border-[#e8eaed]">
              <CommunityIcon className="w-16 h-16 text-[#1a73e8]" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Program Timeline Section */}
      <section className="relative w-full bg-[#f8f9fa] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#e8eaed]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-mono text-center text-[#202124] mb-16">
            Full Program Timeline
          </h2>

          <div className="relative border-l-2 border-[#e37400] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#e37400] border-2 border-white shadow-xs" />
                <h3 className="text-xl sm:text-2xl font-normal font-mono text-[#202124]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#e37400] uppercase tracking-wider mt-1 mb-2 font-sans">
                  {item.date}
                </p>
                <p className="text-[#3c4043] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
