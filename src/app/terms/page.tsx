"use client";

import React, { useState } from "react";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

type AgreementType = "contributor" | "member" | "organization";

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<AgreementType>("contributor");

  return (
    <main className="flex-1 w-full bg-white">
      {/* 1. Hero Header */}
      <section className="relative bg-[#f8f9fa] text-[#202124] py-16 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-[#dadce0] overflow-hidden">
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
            Terms
          </h1>
        </div>
      </section>

      {/* 2. Terms Document Container */}
      <section className="max-w-[1280px] mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Agreement Switcher (3 cols) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-2">
            <button
              type="button"
              onClick={() => setActiveTab("contributor")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === "contributor"
                  ? "bg-[#e8f0fe] text-[#1a73e8] font-semibold"
                  : "text-[#3c4043] hover:bg-[#f1f3f4]"
              }`}
            >
              Contributor Agreement 2026
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("member")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === "member"
                  ? "bg-[#e8f0fe] text-[#1a73e8] font-semibold"
                  : "text-[#3c4043] hover:bg-[#f1f3f4]"
              }`}
            >
              Organization Member Agreement 2026
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("organization")}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === "organization"
                  ? "bg-[#e8f0fe] text-[#1a73e8] font-semibold"
                  : "text-[#3c4043] hover:bg-[#f1f3f4]"
              }`}
            >
              Organization Agreement 2026
            </button>
          </aside>

          {/* Right: Agreement Legal Text (9 cols) */}
          <div className="lg:col-span-9 max-w-[800px] text-[#3c4043] leading-relaxed font-sans text-sm sm:text-base space-y-6">
            {activeTab === "contributor" && (
              <>
                <h2 className="text-xl sm:text-2xl font-normal font-mono text-[#202124] uppercase tracking-wide mb-6">
                  Google Summer of Code 2026 Contributor Agreement
                </h2>

                <p>
                  By registering and clicking &ldquo;Accept&rdquo;, you agree to be bound by the
                  terms of this Contributor Agreement (&ldquo;<strong>Agreement</strong>&rdquo;) and
                  it forms a binding legal agreement between Google LLC, having a principal place of
                  business at 1600 Amphitheatre Parkway, Mountain View, CA 94043 (&ldquo;
                  <strong>Google</strong>&rdquo;), and you with respect to Google Summer of Code 2026
                  (the &ldquo;<strong>Program</strong>&rdquo;).
                </p>

                <p>
                  If you do not agree to these terms and conditions, please do not click the
                  &ldquo;Accept&rdquo; button and you may not participate in the Program.
                </p>

                <p>
                  The words &ldquo;include&rdquo; and &ldquo;including&rdquo; as used in this
                  Agreement mean &ldquo;including but not limited to.&rdquo;
                </p>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">1. Program Rules.</h3>
                  <p>
                    <strong>1.1.</strong> This Agreement incorporates the{" "}
                    <a href="/rules" className="text-[#1a73e8] hover:underline">
                      Google Summer of Code 2026 Program Rules
                    </a>{" "}
                    (&ldquo;<strong>Program Rules</strong>&rdquo;). The Program Rules constitute
                    part of this Agreement. All capitalized terms used herein that are not otherwise
                    defined will have the meaning given them in the Program Rules.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">2. Representations and Warranties.</h3>
                  <ul className="space-y-2 list-none pl-4">
                    <li>2.1. you are eligible, as described in the Program Rules, to participate in the Program as a Contributor;</li>
                    <li>2.2. the information you provide about yourself during registration and in subsequent communications with Google is truthful and accurate;</li>
                    <li>2.3. you own all rights in your Submissions; and</li>
                    <li>
                      2.4. your Submissions:
                      <ul className="list-none pl-6 pt-1 space-y-1">
                        <li>(a) are original;</li>
                        <li>(b) are not malicious, defamatory, libelous, pornographic, or obscene;</li>
                        <li>(c) do not violate any applicable laws; and</li>
                        <li>(d) do not violate any rights of any other person or entity or any obligation you may have with them.</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">3. Submissions.</h3>
                  <p>
                    <strong>3.1. &ldquo;Submissions&rdquo;</strong> means any materials you submit
                    to Google in connection with the Program, including Project Submissions and
                    Evaluations.
                  </p>
                  <p>
                    <strong>3.2. Ownership.</strong> You retain all ownership rights you had in
                    your Submissions before submitting them.
                  </p>
                  <p>
                    <strong>3.3. License to Google.</strong> You grant Google a non-exclusive,
                    worldwide, perpetual, irrevocable, free license (with right to sublicense) to
                    reproduce, prepare derivative works of, distribute, perform, display, and
                    otherwise use your Submissions for the purpose of administering the Program and
                    promoting Google Summer of Code.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">4. Privacy.</h3>
                  <p>
                    <strong>4.1.</strong> Google will process the personal information provided
                    during registration and in any subsequent communications to administer the
                    Program.
                  </p>
                  <p>
                    <strong>4.2.</strong> Google will also use aggregated, non-personally
                    identifiable information from Participants&apos; written responses for
                    evaluations, surveys and feedback.
                  </p>
                  <p>
                    <strong>4.3.</strong> The display name that Participants create during
                    registration will be displayed publicly on the Program Website.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">5. Indemnities.</h3>
                  <p>
                    You will indemnify Google and its affiliates, directors, officers, and
                    employees against all liabilities, damages, losses, costs, fees (including
                    legal fees), and expenses relating to any allegation or third-party legal
                    proceeding to the extent arising from your acts or omissions related to
                    applying for and participating in the Program.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">6. Limitation of Liability.</h3>
                  <p>
                    <strong>6.1. Liability.</strong> IN THIS SECTION 6, &ldquo;LIABILITY&rdquo;
                    MEANS ANY LIABILITY, WHETHER UNDER CONTRACT, TORT, OR OTHERWISE.
                  </p>
                  <p>
                    <strong>6.2. Limitations.</strong> GOOGLE&apos;S LIABILITY UNDER THIS AGREEMENT
                    IS LIMITED TO DIRECT DAMAGES, WHICH WILL NOT EXCEED US$1,000 IN AGGREGATE.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-[#202124]">7. General.</h3>
                  <p>
                    <strong>7.1. Stipends.</strong> Google will not pay any stipends to you if you
                    breach this Agreement.
                  </p>
                  <p>
                    <strong>7.2. Not an Offer or Contract of Employment.</strong> You acknowledge
                    that your participation in the Program is voluntary and does not create an
                    employment relationship with Google.
                  </p>
                </div>
              </>
            )}

            {activeTab === "member" && (
              <>
                <h2 className="text-xl sm:text-2xl font-normal font-mono text-[#202124] uppercase tracking-wide mb-6">
                  Google Summer of Code 2026 Organization Member Agreement
                </h2>
                <p>
                  By registering and participating in the Program as a mentor or organization
                  administrator, you agree to comply with all mentoring guidelines, code of conduct,
                  and programmatic duties outlined for open source mentoring organizations.
                </p>
                <p className="pt-4">
                  Organization members commit to providing constructive, regular feedback to
                  assigned contributors and submitting timely midpoint and final evaluations.
                </p>
              </>
            )}

            {activeTab === "organization" && (
              <>
                <h2 className="text-xl sm:text-2xl font-normal font-mono text-[#202124] uppercase tracking-wide mb-6">
                  Google Summer of Code 2026 Organization Agreement
                </h2>
                <p>
                  Participating organizations agree to maintain active open source repositories
                  under OSI-approved licenses and ensure dedicated mentors are assigned to guide
                  contributors throughout the full 12+ week project duration.
                </p>
                <p className="pt-4">
                  Organizations will designate at least two organization administrators to serve as
                  primary contacts with Google Summer of Code program administrators.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
