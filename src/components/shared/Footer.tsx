import React from "react";
import Link from "next/link";
import { GSoCSunLogo, GoogleWordmark } from "./icons";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#e8eaed] mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Brand & Description (5 cols) */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <GSoCSunLogo className="w-7 h-7 shrink-0" />
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="text-[#202124] font-medium text-lg font-sans">Google</span>
                <span className="text-[#5f6368] text-lg font-sans">Summer of Code</span>
              </div>
            </Link>
            <p className="text-[#5f6368] text-sm max-w-sm leading-relaxed">
              Introducing developers to open source software development
            </p>
          </div>

          {/* Directory Links (7 cols) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 text-sm">
            {/* Column 1 */}
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#3c4043] hover:text-[#1a73e8] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-[#3c4043] hover:text-[#1a73e8] transition-colors">
                  Get started
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#3c4043] hover:text-[#1a73e8] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-[#3c4043] hover:text-[#1a73e8] transition-colors">
                  Past programs
                </Link>
              </li>
              <li>
                <a
                  href="https://developers.google.com/open-source/gsoc/timeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c4043] hover:text-[#1a73e8] transition-colors"
                >
                  Program timeline
                </a>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-3">
              <li>
                <span className="text-[#3c4043]">
                  2026 program
                </span>
              </li>
              <li>
                <a
                  href="https://opensource.googleblog.com/search/label/gsoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c4043] hover:text-[#1a73e8] transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <Link href="/help" className="text-[#3c4043] hover:text-[#1a73e8] transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/GoogleOSPO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c4043] hover:text-[#1a73e8] transition-colors"
                >
                  GSoC YouTube
                </a>
              </li>
              <li>
                <Link href="/help#contact" className="text-[#3c4043] hover:text-[#1a73e8] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#dadce0]" />

        {/* Bottom Legal Section */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-[#5f6368]">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <GoogleWordmark className="h-5" />
          </a>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#202124] transition-colors"
          >
            Privacy
          </a>
          <Link href="/rules" className="hover:text-[#202124] transition-colors">
            Rules
          </Link>
          <Link href="/terms" className="hover:text-[#202124] transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
