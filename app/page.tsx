import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

// Homepage Sections
import { HeroSection } from "@/components/homepage/hero-section"
import { ProblemsSection } from "@/components/homepage/problems-section"
import { ServicesOverview } from "@/components/homepage/services-overview"
import { AboutSection } from "@/components/homepage/about-section"
import { WhyChooseUsSection } from "@/components/homepage/why-choose-us-section"
import { WorkProcessSection } from "@/components/homepage/work-process-section"
import { FoamInsulationPreview } from "@/components/homepage/foam-insulation-preview"
import { WaterproofingPreview } from "@/components/homepage/waterproofing-preview"
import { ComparisonTable } from "@/components/homepage/comparison-table"
import { ServiceDecisionHelper } from "@/components/homepage/service-decision-helper"
import { TestimonialsSection } from "@/components/homepage/testimonials-section"
import { FaqSection } from "@/components/homepage/faq-section"
import { CTASection } from "@/components/homepage/cta-section"
import { EliteInsulationServicesTable } from "@/components/homepage/EliteInsulationServicesTable"
import { EliteInsulationSolutionsTable } from "@/components/homepage/EliteInsulationSolutionsTable"

// New Content-Rich Sections
import {
  InsulationNecessitySection,
  InsulationBasicsSection,
  WaterproofingGuideSection,
  FoamTechnologySection,
  TraditionalInsulationSection,
  SelectionGuideSection,
  MarketChallengesSection
} from "@/components/homepage/content-sections"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero Section - Value proposition + trust signals + city SEO */}
        <HeroSection />

        {/* NEW: Content-Rich Educational Sections */}

        <InsulationBasicsSection />
                <InsulationNecessitySection />
        <WaterproofingGuideSection />
        <FoamTechnologySection />
        <TraditionalInsulationSection />
        <SelectionGuideSection />
        <MarketChallengesSection />

        {/* 2. About Section - Company credibility */}
        <AboutSection />

        {/* 3. Problems We Solve - Common Saudi building problems */}
        <ProblemsSection />

        {/* 4. Core Services - Service cards with CTAs */}
        <ServicesOverview />

        {/* 5. Foam Insulation Preview - SEO + Educational */}
        <FoamInsulationPreview />

        {/* 6. Waterproofing Preview - SEO + Educational */}
        <WaterproofingPreview />

        {/* 7. Comparison Table - Help decision making */}
        <ComparisonTable />

        {/* 8. Why Choose Us - Competitive advantages */}
        <WhyChooseUsSection />

        {/* 9. Work Process - Step-by-step timeline */}
        <WorkProcessSection />
        <EliteInsulationServicesTable />

        {/* 10. Service Decision Helper - Interactive wizard */}
        <ServiceDecisionHelper />
        <EliteInsulationSolutionsTable />

        {/* 11. Testimonials - Social proof with locations */}
        <TestimonialsSection />

        {/* 12. FAQ - Answer common questions */}
        <FaqSection />

        {/* 13. Strong CTA - Final conversion section */}
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
