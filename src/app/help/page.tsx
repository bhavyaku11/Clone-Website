import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

export const metadata: Metadata = {
  title: "Help",
  description: "Get help, guides, resources, and contact information for Google Summer of Code.",
};

export default function HelpPage() {
  return (
    <main className="flex-1 w-full">
      {/* 1. Hero Header */}
      <section className="relative bg-[#f8f9fa] text-[#202124] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#dadce0]">
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 pointer-events-none opacity-40">
          <DotGridPattern
            color="#dadce0"
            rows={12}
            cols={14}
            gap={44}
            radius={14}
            perspective={false}
            className="w-full h-full"
          />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal font-mono tracking-tight text-[#202124]">
            Help
          </h1>
        </div>
      </section>

      {/* 2. Important Links & Resources */}
      <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-b border-[#dadce0]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Important Links */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124] mb-6">
              Important Links
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/rules" className="text-[#1a73e8] hover:underline">
                  Program Rules
                </Link>
              </li>
              <li>
                <a
                  href="https://developers.google.com/open-source/gsoc/timeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline"
                >
                  Program Timeline
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/GoogleOSPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/open-source/gsoc/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline"
                >
                  GSoC Presentation &amp; Flyers
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/open-source/gsoc/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Resources */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124] mb-6">
              Resources
            </h2>

            {/* Sub-section: Contributors */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-[#202124] mb-3">
                GSoC Contributors
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li>
                  <a
                    href="https://google.github.io/gsocresources/contributor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Advice for people applying for GSoC
                  </a>
                </li>
                <li>
                  <a
                    href="https://google.github.io/gsocresources/contributor/guide.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    GSoC Contributor Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=Wxjxwx7mqaI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Q&amp;A Session for Contributors
                  </a>
                </li>
              </ul>
            </div>

            {/* Sub-section: Mentors & Org Admins */}
            <div>
              <h3 className="text-base font-semibold text-[#202124] mb-3">
                Mentor &amp; Org Admins
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li>
                  <a
                    href="https://google.github.io/gsocresources/mentor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Mentor Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://google.github.io/gsocresources/mentor/tips.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Org Admin Tips
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/open-source/gsoc/resources"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Mentor Panel Discussion Notes
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.google.com/open-source/gsoc/help/responsibilities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline"
                  >
                    Roles and Responsibilities
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Us Section */}
      <section id="contact" className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124] mb-6">
            Contact Us
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3c4043] leading-relaxed">
            <p>
              Connect with our community in Discord, join{" "}
              <a
                href="http://discord.gg/google-dev-community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] hover:underline"
              >
                http://discord.gg/google-dev-community
              </a>{" "}
              and look for the <strong>#google-summer-of-code</strong> channel.
            </p>
            <p>
              For GSoC support questions please email:{" "}
              <a
                href="mailto:gsoc-support@google.com"
                className="text-[#1a73e8] hover:underline font-medium"
              >
                gsoc-support@google.com
              </a>
            </p>
            <p>
              To see updates on the program or ask a question that many others would be interested
              in use the{" "}
              <a
                href="https://groups.google.com/forum/#!forum/google-summer-of-code-discuss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] hover:underline font-medium"
              >
                GSoC Discussion List
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
