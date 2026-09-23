import React from "react";
import { VideoPlayIcon, CommunityIcon, LightbulbIcon } from "@/components/shared/icons";

export function ContributorSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-b border-[#dadce0]">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-mono text-[#202124] mb-6">
            Become a GSoC contributor
          </h2>
          <p className="text-[#3c4043] text-base sm:text-lg leading-relaxed mb-4">
            Are you new to open source and want to learn more about some interesting projects that
            you can contribute to? Join GSoC where mentors will help guide you on your journey!
          </p>
          <p className="text-[#3c4043] text-base leading-relaxed mb-8">
            It is very important to reach out to the organizations that you are interested in as
            soon as possible. The more conversations you have with the community before you submit
            your proposal the better your chances of being selected into the GSoC.
          </p>

          <a
            href="https://summerofcode.withgoogle.com/programs/2026/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a73e8] text-white rounded-xs px-6 py-2.5 text-sm font-medium hover:bg-[#1765cc] transition-colors shadow-xs"
          >
            View 2026 project list
          </a>
        </div>

        {/* 3 Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 border border-[#e8eaed] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <VideoPlayIcon className="w-8 h-8 text-[#1a73e8] mb-6" />
              <h3 className="text-base sm:text-lg font-medium text-[#202124] font-sans leading-snug mb-6">
                Want to learn more about Google Summer of Code?
              </h3>
            </div>
            <a
              href="https://www.youtube.com/watch?v=Wxjxwx7mqaI&list=PLOU2XLYxmsIL7-SZlT0UHBWEG3DBwbaoA&index=5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a73e8] hover:underline font-medium text-sm inline-flex items-center gap-1.5"
            >
              Watch video
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 border border-[#e8eaed] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <CommunityIcon className="w-8 h-8 text-[#1e8e3e] mb-6" />
              <h3 className="text-base sm:text-lg font-medium text-[#202124] font-sans leading-snug mb-6">
                Open source organizations are ready to welcome new, excited contributors into their
                communities
              </h3>
            </div>
            <a
              href="https://www.youtube.com/watch?v=p6xdQInKZh8&list=PLOU2XLYxmsIJ5kxKS2DO7y-X8EecbFT7g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a73e8] hover:underline font-medium text-sm inline-flex items-center gap-1.5"
            >
              Watch video
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 border border-[#e8eaed] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <LightbulbIcon className="w-8 h-8 text-[#e37400] mb-6" />
              <h3 className="text-base sm:text-lg font-medium text-[#202124] font-sans leading-snug mb-6">
                Learn how to apply to be a GSoC contributor
              </h3>
            </div>
            <a
              href="https://youtu.be/YN7uGCg5vLg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a73e8] hover:underline font-medium text-sm inline-flex items-center gap-1.5"
            >
              Watch video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
