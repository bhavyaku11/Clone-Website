import React from "react";
import Link from "next/link";
import { VideoPlayIcon, DocIcon } from "@/components/shared/icons";

export function OrganizationsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-b border-[#dadce0]">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-mono text-[#202124] mb-6">
            Open source organizations
          </h2>
          <p className="text-[#3c4043] text-base sm:text-lg leading-relaxed mb-10">
            Over 1,000 open source organizations have mentored 21,000+ new GSoC contributors since
            2005. Our mentoring organizations are eager to teach newcomers to open source about
            their communities and the thrill of open source development.
          </p>

          {/* Sub-columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left Sub-column */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-[#202124] font-sans">
                Learn why your organization should participate in GSoC
              </h3>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=p6xdQInKZh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline font-medium text-sm inline-flex items-center gap-2"
                >
                  <VideoPlayIcon className="w-4 h-4 text-[#1a73e8]" />
                  <span>Watch video</span>
                </a>
              </div>
            </div>

            {/* Right Sub-column */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-[#202124] font-sans">
                Interested in being a GSoC Mentor?
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.youtube.com/watch?v=p6xdQInKZh8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline font-medium text-sm inline-flex items-center gap-2"
                >
                  <VideoPlayIcon className="w-4 h-4 text-[#1a73e8]" />
                  <span>Watch video</span>
                </a>
                <Link
                  href="/help"
                  className="text-[#1a73e8] hover:underline font-medium text-sm inline-flex items-center gap-2"
                >
                  <DocIcon className="w-4 h-4 text-[#1a73e8]" />
                  <span>Read mentor guide</span>
                </Link>
              </div>
            </div>
          </div>

          <a
            href="https://summerofcode.withgoogle.com/programs/2026/organizations"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a73e8] text-white rounded-xs px-6 py-2.5 text-sm font-medium hover:bg-[#1765cc] transition-colors shadow-xs"
          >
            Browse all 2026 organizations
          </a>
        </div>
      </div>
    </section>
  );
}
