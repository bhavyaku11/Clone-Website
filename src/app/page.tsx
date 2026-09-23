import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutStatsSection } from "@/components/home/AboutStatsSection";
import { ContributorSection } from "@/components/home/ContributorSection";
import { OrganizationsSection } from "@/components/home/OrganizationsSection";
import { NewsSection } from "@/components/home/NewsSection";

export default function HomePage() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      <HeroSection />
      <AboutStatsSection />
      <ContributorSection />
      <OrganizationsSection />
      <NewsSection />
    </main>
  );
}
