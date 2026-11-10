import type { Metadata } from "next";
import { AgentsPartners } from "@/components/home/AgentsPartners";
import { BusinessProtection } from "@/components/home/BusinessProtection";
import { ClaimsCare } from "@/components/home/ClaimsCare";
import { ClosingCta } from "@/components/home/ClosingCta";
import { FindUs } from "@/components/home/FindUs";
import { Hero } from "@/components/home/Hero";
import { NewsOffers } from "@/components/home/NewsOffers";
import { PersonalProtection } from "@/components/home/PersonalProtection";
import { QuotePanel } from "@/components/home/QuotePanel";
import { TaskStrip } from "@/components/home/TaskStrip";
import { WhyMua } from "@/components/home/WhyMua";
import { buildPageMetadata } from "@/lib/seo";
import { siteIdentity } from "@/lib/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: siteIdentity.name,
    description: siteIdentity.description,
    path: "/",
    image: "/images/hero-motor.jpg",
  }),
  title: {
    absolute: siteIdentity.name,
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TaskStrip />
      <PersonalProtection />
      <BusinessProtection />
      <WhyMua />
      <ClaimsCare />
      <AgentsPartners />
      <NewsOffers />
      <FindUs />
      <QuotePanel />
      <ClosingCta />
    </main>
  );
}
