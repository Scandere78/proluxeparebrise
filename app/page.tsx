import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee";
import { ServiceStripSection } from "@/components/sections/service-strip";
import { IconGridSection } from "@/components/sections/icon-grid";
import { BenefitsSection } from "@/components/sections/benefits";
import { LawBannerSection } from "@/components/sections/law-banner";
import { ProcessSection } from "@/components/sections/process";
import { ReviewsSection } from "@/components/sections/reviews";
import { FaqSection } from "@/components/sections/faq";
import { SiteFooter } from "@/components/sections/site-footer";
import { StickyCtaMobile } from "@/components/sections/sticky-cta";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ServiceStripSection />
        <IconGridSection />
        <BenefitsSection />
        <LawBannerSection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <StickyCtaMobile />
    </>
  );
}
