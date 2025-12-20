import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { ServicesPageHero } from "@/components/services-page/hero"
import { ServicesGrid } from "@/components/services-page/services-grid"
import { MaterialsComparisonTable } from "@/components/services-page/materials-table"
import { ServicesPageCTA } from "@/components/services-page/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدماتنا في عزل الأسطح بالرياض | جميع خدمات العزل المائي والحراري",
  description:
    "دليلك الشامل لجميع خدمات عزل الأسطح في الرياض: العزل المائي، عزل الفوم، وكشف التسربات. مواد معتمدة وضمان 10 سنوات.",
  keywords: "عزل اسطح الرياض, عزل مائي, عزل فوم, عزل حراري, كشف تسربات, شركة عزل الرياض",
}

export default function AllServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ServicesPageHero />
        <ServicesGrid />
        <MaterialsComparisonTable />
        <ServicesPageCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
