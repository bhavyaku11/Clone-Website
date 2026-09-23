"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon, UserIcon } from "./icons";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/get-started", label: "Get started" },
  { href: "/archive", label: "Past programs" },
];

const footerNavLinks = [
  { href: "/help", label: "Help" },
  { href: "/rules", label: "Rules" },
  { href: "/terms", label: "Terms" },
];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      {/* 1. Desktop Fixed Left Side Toolbar (125px width, >= 768px) */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[125px] h-screen bg-white z-40 flex-col items-center justify-between select-none">
        {/* Top Hamburger Toggle */}
        <div className="pt-8">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="w-12 h-12 flex items-center justify-center rounded-full text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>

        {/* Middle Rotated Brand Logo */}
        <div className="flex-1 flex items-center justify-center relative w-[125px]">
          <Link
            href="/"
            className="relative w-10 h-[317px] mb-20 flex items-center justify-center group"
            aria-label="Google Summer of Code Home"
          >
            {/* Authentic rotated GSoC logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/media/logo.svg"
              alt="Google Summer of Code"
              className="absolute left-1/2 bottom-[-20px] h-10 max-w-none origin-[center_left] rotate-[270deg] transition-opacity group-hover:opacity-85"
            />
          </Link>
        </div>

        {/* Bottom Spacer */}
        <div className="pb-8" />
      </aside>

      {/* 2. Mobile Fixed Top Toolbar (< 768px) */}
      <header className="flex md:hidden fixed top-0 left-0 right-0 h-14 bg-white z-40 border-b border-[#dadce0] px-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="p-1.5 -ml-1 text-[#5f6368] hover:text-[#202124] rounded-full hover:bg-[#f1f3f4] transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/media/logo.svg"
              alt="Google Summer of Code"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        <a
          href="https://summerofcode.withgoogle.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#202124] bg-white border border-[#dadce0] rounded-full hover:bg-[#f8f9fa] transition-colors shadow-2xs"
        >
          <span>Log in</span>
          <UserIcon className="w-3.5 h-3.5 text-[#5f6368]" />
        </a>
      </header>

      {/* 3. Floating Desktop "Log in" Button (>= 768px) */}
      <div className="hidden md:block fixed top-6 right-8 z-30">
        <a
          href="https://summerofcode.withgoogle.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-[#202124] bg-white border border-[#dadce0] rounded-full hover:bg-[#f8f9fa] hover:border-[#bdc1c6] transition-all shadow-xs"
        >
          <span>Log in</span>
          <UserIcon className="w-4 h-4 text-[#5f6368]" />
        </a>
      </div>

      {/* 4. Slideout Off-Canvas Navigation Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <nav
            className="relative w-[380px] max-w-[85vw] h-full bg-white z-50 shadow-2xl flex flex-col justify-between p-8 sm:p-12 animate-in slide-in-from-left duration-250 ease-out"
            aria-label="Site Navigation"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/media/logo.svg"
                  alt="Google Summer of Code"
                  className="h-7 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Main Links */}
            <ul className="flex-1 flex flex-col justify-center space-y-4">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`block font-mono text-2xl tracking-tight transition-colors py-1.5 px-3 rounded-md relative ${
                        isActive
                          ? "text-[#1a73e8] font-medium"
                          : "text-[#202124] hover:text-[#1a73e8]"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#1a73e8] rounded-full" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Footer Links */}
            <div className="pt-8 border-t border-[#e8eaed]">
              <ul className="flex items-center gap-6 text-sm text-[#5f6368]">
                {footerNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                        className={`transition-colors hover:text-[#1a73e8] ${
                          isActive ? "text-[#1a73e8] font-medium" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
