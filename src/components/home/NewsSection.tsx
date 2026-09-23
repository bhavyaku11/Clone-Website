import React from "react";

export function NewsSection() {
  return (
    <section className="relative w-full bg-[#1a73e8] text-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Authentic Google 3D Perspective News Dot Canvas */}
      <div className="home-news-dots" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-mono text-center text-white mb-12">
          Latest News
        </h2>

        {/* White Card Container */}
        <div className="max-w-3xl mx-auto bg-white text-[#202124] rounded-2xl p-6 sm:p-10 shadow-xl border border-white/20">
          {/* Article 1 */}
          <article className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-medium font-sans text-[#202124] hover:text-[#1a73e8] transition-colors leading-snug">
              <a
                href="https://opensource.googleblog.com/2026/05/the-journey-begins-meet-2026-gsoc-contributors.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Journey Begins: Meet the 2026 GSoC Contributors!
              </a>
            </h3>
            <p className="text-xs sm:text-sm text-[#5f6368]">
              By Google Open Source, May 1, 2026
            </p>
            <p className="text-sm sm:text-base text-[#3c4043] leading-relaxed">
              by Stephanie Taylor, Mary Radomile &amp; Lucila Ortiz, Google Summer of Code A warm
              welcome to the 1,141 Contributors of Google Summer of Code 2026! We are excited to
              start this new edition alongside our 184 mentoring orgs. Organizations reviewed a
              record-breaking 23,371 proposals to find the best matches for their communities.
              2026 Application Statistics: 15,245 ...
            </p>
            <div>
              <a
                href="https://opensource.googleblog.com/2026/05/the-journey-begins-meet-2026-gsoc-contributors.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] hover:underline font-medium text-sm inline-block pt-1"
              >
                Read More
              </a>
            </div>
          </article>

          {/* Divider */}
          <hr className="my-8 border-[#dadce0]" />

          {/* Article 2 */}
          <article className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-medium font-sans text-[#202124] hover:text-[#1a73e8] transition-colors leading-snug">
              <a
                href="https://opensource.googleblog.com/2026/03/open-source-open-doors-apply-now-for-google-summer-of-code.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Source, Open Doors, Apply Now for Google Summer of Code!
              </a>
            </h3>
            <p className="text-xs sm:text-sm text-[#5f6368]">
              By Google Open Source, Mar 17, 2026
            </p>
            <p className="text-sm sm:text-base text-[#3c4043] leading-relaxed">
              by Stephanie Taylor, Mary Radomile &amp; Lucila Ortiz, GSoC Program Admins Join
              Google Summer of Code (GSoC) and start contributing to the world of open source
              development! Applications for GSoC are open from now - March 31, 2026 at 18:00 UTC.
              Google Summer of Code is celebrating its 22nd year in 2026! GSoC started back in
              2005 and has brought over 22,000 new contributors from 123 ...
            </p>
            <div>
              <a
                href="https://opensource.googleblog.com/2026/03/open-source-open-doors-apply-now-for-google-summer-of-code.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a73e8] hover:underline font-medium text-sm inline-block pt-1"
              >
                Read More
              </a>
            </div>
          </article>
        </div>

        {/* View all news CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://opensource.googleblog.com/search/label/gsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white rounded-xs px-6 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            View all news
          </a>
        </div>
      </div>
    </section>
  );
}
