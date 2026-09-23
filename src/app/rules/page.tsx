import React from "react";
import { Metadata } from "next";
import { DotGridPattern } from "@/components/shared/DotGridPattern";

export const metadata: Metadata = {
  title: "Rules",
  description: "Official Google Summer of Code 2026 Program Rules.",
};

export default function RulesPage() {
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
            Rules
          </h1>
        </div>
      </section>

      {/* 2. Rules Document */}
      <section className="max-w-[960px] mx-auto px-6 sm:px-12 py-16 text-[#3c4043] leading-relaxed font-sans text-sm sm:text-base space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-normal font-mono text-[#202124] mb-4">
            Google Summer of Code 2026 Program Rules
          </h2>
          <p className="mb-6">
            Google Summer of Code 2026 (the &ldquo;<strong>Program</strong>&rdquo;) is sponsored by
            Google LLC. (&ldquo;<strong>Google</strong>&rdquo;), a Delaware limited liability company
            with its principal place of business at 1600 Amphitheatre Parkway, Mountain View, CA
            94043, USA.
          </p>
        </div>

        {/* Section 1: Definitions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#202124]">1. Definitions.</h3>
          <ol className="space-y-3 list-none pl-4 sm:pl-6 text-sm sm:text-base">
            <li>
              <strong>1.1. &ldquo;Acceptance Date&rdquo;</strong> means the date accepted Project
              Proposals are announced on the Program Website, as set forth on the Program Timeline.
            </li>
            <li>
              <strong>1.2. &ldquo;Coding Period&rdquo;</strong> means the period of time designated
              for GSoC Contributors to complete their projects.
            </li>
            <li>
              <strong>1.3. &ldquo;Community Bonding Period&rdquo;</strong> means the period for
              accepted GSoC Contributors to get to know their Mentors and prepare to begin work on
              their Projects, as set forth on the Program Timeline.
            </li>
            <li>
              <strong>1.4. &ldquo;Evaluation&rdquo;</strong> means an evaluation by the Mentor of
              their GSoC Contributor&apos;s work or an evaluation by the GSoC Contributor of their
              Mentor, as applicable.
            </li>
            <li>
              <strong>1.5. &ldquo;Final Phase&rdquo;</strong> means the final half of the Coding
              Period for a given Project.
            </li>
            <li>
              <strong>1.6. &ldquo;Final Project Materials&rdquo;</strong> means a GSoC
              Contributor&apos;s final source code and associated documentation for their Project.
            </li>
            <li>
              <strong>1.7. &ldquo;Final Submission&rdquo;</strong> means the work submission URL and
              answers to the final evaluation questions a GSoC contributor submits at the end of
              their coding period.
            </li>
            <li>
              <strong>1.8. &ldquo;Final Results&rdquo;</strong> means the list of GSoC Contributors
              who passed all of their Evaluations.
            </li>
            <li>
              <strong>1.9. &ldquo;GSoC Contributor&rdquo;</strong> means the individual who registers
              for the Program as a GSoC Contributor.
            </li>
            <li>
              <strong>1.10. &ldquo;GSoC Contributor Agreement&rdquo;</strong> means the agreement
              between Google and a GSoC Contributor that is presented during registration.
            </li>
            <li>
              <strong>1.11. &ldquo;Ideas List&rdquo;</strong> means the list of ideas for Projects
              publicly published by an Organization on the Program Website.
            </li>
            <li>
              <strong>1.12. &ldquo;Members&rdquo;</strong> means the Organization Administrators and
              Mentors for an Organization.
            </li>
            <li>
              <strong>1.13. &ldquo;Mentor&rdquo;</strong> means the individual who registers for the
              Program as a mentor for an Organization.
            </li>
            <li>
              <strong>1.14. &ldquo;Mentor Agreement&rdquo;</strong> means the agreement between
              Google and an Organization Administrator or Mentor, as applicable, that is presented
              during registration.
            </li>
            <li>
              <strong>1.15. &ldquo;Organization&rdquo;</strong> means the open source organization
              that registers for the Program as an organization.
            </li>
            <li>
              <strong>1.16. &ldquo;Organization Administrator&rdquo;</strong> means the individual who
              registers for the Program as an administrator for an Organization.
            </li>
            <li>
              <strong>1.17. &ldquo;Organization Application&rdquo;</strong> means an application from
              an Organization for its acceptance in the Program, including a completed profile.
            </li>
            <li>
              <strong>1.18. &ldquo;Organization Agreement&rdquo;</strong> means the agreement between
              Google and an Organization that is presented during registration.
            </li>
            <li>
              <strong>1.19. &ldquo;Organization Project Criteria&rdquo;</strong> means the criteria
              for grading Project Submissions that an Organization determines at its sole
              discretion.
            </li>
            <li>
              <strong>1.20. &ldquo;Participants&rdquo;</strong> means Organizations, Organization
              Administrators, Mentors, and GSoC Contributors.
            </li>
            <li>
              <strong>1.21. &ldquo;Payment Processor&rdquo;</strong> means the third party payment
              processor selected by Google to process payments under the Program.
            </li>
            <li>
              <strong>1.22. &ldquo;Midterm&rdquo;</strong> means the first half of the Coding Period
              of a given Project.
            </li>
            <li>
              <strong>1.23. &ldquo;Program Administrators&rdquo;</strong> means Google&apos;s
              administrators for the Program.
            </li>
            <li>
              <strong>1.24. &ldquo;Program Period&rdquo;</strong> means the period of time between
              January 19, 2026 and November 11, 2026.
            </li>
            <li>
              <strong>1.25. &ldquo;Program Timeline&rdquo;</strong> means the timeline for the
              Program on the Program Website.
            </li>
            <li>
              <strong>1.26. &ldquo;Program Website&rdquo;</strong> means the website for the Program
              located at{" "}
              <a
                href="https://summerofcode.withgoogle.com"
                className="text-[#1a73e8] hover:underline"
              >
                https://summerofcode.withgoogle.com
              </a>
              .
            </li>
            <li>
              <strong>1.27. &ldquo;Project&rdquo;</strong> means an open source coding project to be
              worked on by a GSoC Contributor as an individual. For the avoidance of doubt, Projects
              do not include projects for documentation only.
            </li>
            <li>
              <strong>1.28. &ldquo;Project Proposal&rdquo;</strong> means a GSoC
              Contributor&apos;s proposal for a Project.
            </li>
            <li>
              <strong>1.29. &ldquo;Project Submissions&rdquo;</strong> means the work product that a
              GSoC Contributor submits for a Project, including the Project Proposal and any
              software and documentation, including Final Project Materials.
            </li>
            <li>
              <strong>1.30. &ldquo;include&rdquo; and &ldquo;including&rdquo;</strong> as used
              herein mean &ldquo;including but not limited to.&rdquo;
            </li>
          </ol>
        </div>

        {/* Section 2: Privacy */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#202124]">2. Privacy.</h3>
          <ol className="space-y-3 list-none pl-4 sm:pl-6 text-sm sm:text-base">
            <li>
              <strong>2.1.</strong> Google will process the personal information provided during
              registration and in any subsequent communications to administer the Program (including
              verifying eligibility to participate in the Program, running the Program, and sending
              notifications regarding the Program).
            </li>
            <li>
              <strong>2.2.</strong> Google will also use aggregated, non-personally identifiable
              information from Participants&apos; written responses for evaluations, surveys and
              feedback in order to analyze Program effectiveness and make adjustments to the Program.
            </li>
            <li>
              <strong>2.3.</strong> The display name that Participants create during registration will
              be displayed publicly on the Program Website and any archives of the Program Website,
              and will be shared with Organizations for the purpose of communicating with the GSoC
              Contributors to answer their questions and reviewing their proposals and work.
            </li>
            <li>
              <strong>2.4.</strong> GSoC Contributor&apos;s Project Submissions and contact
              information (email address and display name) will be shared with the Organizations
              (including Members) they submit proposals to in order to administer the Program.
            </li>
            <li>
              <strong>2.5.</strong> Google may publicize your participation in the Program and the
              results of the Program, including announcements of accepted Project Proposals, the text
              of accepted Project Proposals, and the resulting code from your work on the Project.
            </li>
            <li>
              <strong>2.6.</strong> The personal information provided during registration and in any
              subsequent communications will also be processed by Google&apos;s trusted service
              providers for the purpose of delivering stipends to successful GSoC Contributors.
            </li>
            <li>
              <strong>2.7.</strong> Participants can access, update, and remove their personal
              information in their Program profile.
            </li>
            <li>
              <strong>2.8.</strong> The Google Privacy Policy (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] hover:underline"
              >
                policies.google.com/privacy
              </a>
              ) further explains how data is handled in this service.
            </li>
          </ol>
        </div>

        {/* Section 3: Program Administration */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#202124]">3. Program Administration.</h3>
          <ol className="space-y-3 list-none pl-4 sm:pl-6 text-sm sm:text-base">
            <li>
              <strong>3.1. Changes to the Program.</strong> Google may suspend, cancel, or modify the
              structure of the Program if technical difficulties or events beyond Google&apos;s
              reasonable control prevent or make it unfair to run the Program in accordance with these
              Program Rules.
            </li>
            <li>
              <strong>3.2. Verifying Eligibility.</strong> Google reserves the right to verify a
              Participant&apos;s eligibility and to adjudicate on any dispute at any time.
            </li>
            <li>
              <strong>3.3. Communications.</strong> All communications between Google and the
              Participants, including the Program Website and email communications, will be in
              English.
            </li>
            <li>
              <strong>3.4. Conduct.</strong> Participants must use professional and courteous conduct
              when interacting with other Participants and Program Administrators.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
