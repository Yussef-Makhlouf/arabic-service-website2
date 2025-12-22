import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { HeroSection } from "@/components/homepage/hero-section"
import { ServicesOverview } from "@/components/homepage/services-overview"
import { AboutSection } from "@/components/homepage/about-section"
// import { FaqSection } from "@/components/homepage/faq-section"
import { ServiceDecisionHelper } from "@/components/homepage/service-decision-helper"
import { EmergencyServiceSection } from "@/components/homepage/emergency-service-section"
import { PricingTransparencySection } from "@/components/homepage/pricing-transparency-section"
// import { ContentNavigation } from "@/components/homepage/content-navigation"
import { ComparisonTable } from "@/components/homepage/comparison-table"
import { CitiesDeepSEO } from "@/components/homepage/cities-deep-seo"
import { BlogPreview } from "@/components/homepage/blog-preview"
import { FaqSection } from "@/components/homepage/faq-section"
import { FoamInsulationSection } from "@/components/homepage/foam-insulation-section"
import { FeaturedLocationCard } from "@/components/homepage/featured-location-card"
import { EliteInsulationServicesTable } from "@/components/homepage/EliteInsulationServicesTable"
import { EliteInsulationSolutionsTable } from "@/components/homepage/EliteInsulationSolutionsTable"
import { TestimonialsSection } from "@/components/homepage/testimonials-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - First impression with trust signals */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* 2. About / Why Choose Us - Build credibility */}
        <AboutSection />

        {/* 3. Services Overview - Visual service cards */}
        <ServicesOverview />

        {/* Foam Insulation Section - Educational content */}
        <FoamInsulationSection />

        {/* 4. Comparison Table - Help decision making */}
        <section id="comparison-table">
          <ComparisonTable />
        </section>

        {/* 5. Decision Helper - Guide users to right service */}
        <section id="decision-helper">
          <ServiceDecisionHelper />
        </section>

        {/* Featured Location - Focus on specific area */}
        <FeaturedLocationCard />

        {/* 6. Cities & Neighborhoods - Local SEO */}
        <section id="cities">
          <CitiesDeepSEO />
        </section>

        {/* 7. Testimonials - Social Proof */}


        {/* 8. Pricing Education - Transparency */}
        <section id="pricing">
          <PricingTransparencySection />
        </section>

        {/* 8. Blog Preview - Show expertise */}
        <section id="blog-preview">
          <BlogPreview />
        </section>

   

        {/* New Services Table 1 */}
        <EliteInsulationServicesTable />

        {/* New Solutions Table 2 */}
        <EliteInsulationSolutionsTable />

        {/* 10. Final CTA - Conversion */}
        <section id="cta">
          <EmergencyServiceSection />
        </section>
             {/* 9. FAQ - Answer objections */}
        <section id="faq">
          <FaqSection />
        </section>
                <section id="testimonials">
          <TestimonialsSection />
        </section>

      </main>
      <Footer />
      <FloatingActions />

    </>
  )
}

