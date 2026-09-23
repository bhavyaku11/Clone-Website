import React from "react";
import { Metadata } from "next";
import { GSoCSunLogo } from "@/components/shared/icons";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

export const metadata: Metadata = {
  title: "Past programs",
  description: "Browse past Google Summer of Code programs and completed projects from 2005 to 2025.",
};

const pastPrograms = [
  {
    year: "2025",
    description: "1261 projects were completed with 185 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2025/organizations",
  },
  {
    year: "2024",
    description: "1189 projects were completed with 195 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2024/organizations",
  },
  {
    year: "2023",
    description: "959 projects were completed with 171 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2023/organizations",
  },
  {
    year: "2022",
    description: "1166 projects were completed with 202 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2022/organizations",
  },
  {
    year: "2021",
    description: "1203 projects were completed with 202 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2021/organizations",
  },
  {
    year: "2020",
    description: "1198 projects were completed with 199 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2020/organizations",
  },
  {
    year: "2019",
    description: "1134 projects were completed with 206 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2019/organizations",
  },
  {
    year: "2018",
    description: "1072 projects were completed with 206 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2018/organizations",
  },
  {
    year: "2017",
    description: "1127 projects were completed with 201 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2017/organizations",
  },
  {
    year: "2016",
    description: "1032 projects were completed with 178 open source organizations.",
    link: "https://summerofcode.withgoogle.com/archive/2016/organizations",
  },
];

export default function ArchivePage() {
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
            Past
            <br />
            Programs
          </h1>
        </div>
      </section>

      {/* 2. Overview Section with Graphic */}
      <section className="w-full bg-white py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 text-[#3c4043] text-base leading-relaxed">
            <p>
              Google Summer of Code is a global, online mentoring program focused on introducing
              new contributors to open source software development. GSoC contributors work on a 12+
              week programming project under the guidance of mentors from their open source
              organization.
            </p>
            <p>
              Since 2005, the Google Summer of Code program has connected 19,000+ new open source
              contributors from 112 countries with 18,000+ mentors from 133 countries. Google Summer
              of Code has produced over 43 million lines of code for 800+ open source
              organizations.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center relative py-6">
            <div className="w-44 h-56 bg-[#e37400] rounded-xl relative -rotate-3 shadow-md" />
            <div className="w-48 h-40 bg-white rounded-2xl shadow-xl absolute -bottom-2 -right-2 sm:right-6 flex items-center justify-center border border-[#e8eaed]">
              <GSoCSunLogo className="w-14 h-14" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Archive Cards Grid */}
      <section className="w-full bg-[#f8f9fa] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-t border-[#e8eaed]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {pastPrograms.map((prog) => (
              <a
                key={prog.year}
                href={prog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 border border-[#e8eaed] shadow-xs hover:shadow-md transition-all text-center flex flex-col justify-center group"
              >
                <h2 className="text-xl font-medium font-sans text-[#1a73e8] group-hover:underline mb-2">
                  {prog.year} Program
                </h2>
                <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed">
                  {prog.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
