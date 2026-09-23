import React from "react";
import Link from "next/link";

export function AboutStatsSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: What is GSoC (Blue #1a73e8) */}
        <div className="bg-[#1a73e8] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-normal font-mono mb-6 leading-tight">
              What is Google Summer of Code?
            </h2>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed mb-8">
              Google Summer of Code is a global, online program focused on bringing new
              contributors into open source software development. GSoC Contributors work with an
              open source organization on a 12+ week programming project under the guidance of
              mentors.
            </p>
          </div>
          <div>
            <Link
              href="/how-it-works"
              className="inline-block border border-white text-white rounded-xs px-6 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right: Metrics Grid (Charcoal #202124) */}
        <div className="bg-[#202124] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex items-center">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8">
            {/* Stat 1 */}
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-mono text-white">
                22K+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-sans mt-2">
                New Contributors
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-mono text-white">
                123
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-sans mt-2">
                Countries
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-mono text-white">
                48M+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-sans mt-2">
                Lines of Code
              </div>
            </div>

            {/* Stat 4 */}
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-mono text-white">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-sans mt-2">
                Open Source Organizations
              </div>
            </div>

            {/* Stat 5 */}
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-mono text-white">
                21K+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-sans mt-2">
                Mentors
              </div>
            </div>

            {/* Stat 6 */}
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal font-mono text-white">
                20+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-sans mt-2">
                Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
