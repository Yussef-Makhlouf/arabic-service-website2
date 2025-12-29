import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { ServicesPageHero } from "@/components/services-page/hero"
import { ServicesIntro } from "@/components/services-page/services-intro"
import { ServicesGrid } from "@/components/services-page/services-grid"
import { MaterialsComparisonTable } from "@/components/services-page/materials-table"
import { ServicesPageCTA } from "@/components/services-page/cta-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات عزل الأسطح بالرياض والخرج | عزل فوم - عزل مائي - كشف تسربات | 0507067378",
  description:
    "دليلك الشامل لجميع خدمات عزل الأسطح في الرياض والخرج: عزل فوم حراري ومائي، عزل مائي للأسطح، كشف تسربات المياه بدون تكسير، وعزل خزانات المياه. مواد معتمدة وضمان 15 سنة. اتصل الآن: 0507067378",
  keywords: [
    "عزل اسطح الرياض",
    "عزل مائي",
    "عزل فوم",
    "عزل حراري",
    "كشف تسربات",
    "شركة عزل الرياض",
    "عزل خزانات",
    "عزل فوم بالرياض",
    "عزل مائي بالخرج",
    "افضل شركة عزل",
    "ضمان 15 سنة",
    "توفير الكهرباء"
  ].join(", "),
  openGraph: {
    title: "خدمات عزل الأسطح بالرياض | عزل فوم - عزل مائي - كشف تسربات",
    description: "دليلك الشامل لجميع خدمات عزل الأسطح في الرياض. مواد معتمدة وضمان 15 سنة.",
    type: "website",
    images: ["/cover3.png"],
  },
}

// Schema.org for Services Page
const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "خدمات عزل الأسطح في الرياض",
  description: "قائمة شاملة بخدمات العزل المائي والحراري وكشف التسربات في الرياض والخرج",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "عزل فوم للأسطح",
        description: "عزل حراري ومائي متكامل بتقنية البولي يوريثان",
        url: "https://tebaservices.com/services/foam-insulation"
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "عزل مائي للأسطح",
        description: "حماية شاملة من تسرب المياه والرطوبة",
        url: "https://tebaservices.com/services/waterproofing"
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "كشف تسربات المياه",
        description: "كشف دقيق بأحدث التقنيات بدون تكسير",
        url: "https://tebaservices.com/services/leak-detection"
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "عزل خزانات المياه",
        description: "عزل داخلي وخارجي بمواد آمنة صحياً",
        url: "https://tebaservices.com/services/tank-insulation"
      }
    }
  ]
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tebaservices.com" },
    { "@type": "ListItem", position: 2, name: "خدماتنا", item: "https://tebaservices.com/services" },
  ],
}

export default function AllServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <ServicesPageHero />
        <ServicesIntro />
        <ServicesGrid />
        <MaterialsComparisonTable />
        <ServicesPageCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
