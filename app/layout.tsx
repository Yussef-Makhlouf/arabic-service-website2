import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "شركة العزل المتقدم لعزل الاسطح بالرياض | عزل فوم ومائي معتمد (SBC) - ضمان 15 سنة",
  description:
    "شركة عزل اسطح بالرياض معتمدة من هيئة المهندسين. متخصصون في عزل الفوم (بولي يوريثان) والعزل المائي والحراري وعزل الخزانات. نضمن الامتثال لكود البناء السعودي (SBC) وتوفير 40% من الكهرباء. حلول نهائية لتسربات المياه مع ضمان 15 عاماً.",
  keywords: [
    "شركة عزل اسطح بالرياض",
    "عزل فوم بالرياض",
    "عزل مائي وحراري",
    "عزل خزانات المياه",
    "عزل الحمامات",
    "عزل المسابح",
    "شركة عزل معتمدة",
    "ضمان عزل 15 سنة",
    "توفير فاتورة الكهرباء",
    "عزل ضد الحرارة",
    "عزل ضد الرطوبة",
    "شركة عزل شمال الرياض",
    "شركة عزل جنوب الرياض",
    "شركة عزل شرق الرياض",
    "شركة عزل غرب الرياض"
  ].join(", "),
  generator: "Next.js",
  applicationName: "شركة عزل الأسطح - الرياض والخرج",
  authors: [{ name: "شركة عزل الأسطح", url: "https://tebaservices.com" }],
  creator: "شركة عزل الأسطح",
  publisher: "شركة عزل الأسطح",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://tebaservices.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/",
    },
  },
  openGraph: {
    title: "شركة عزل اسطح بالرياض والخرج | خبرة +15 عام | ضمان شامل",
    description: "أفضل شركة عزل اسطح بالرياض - عزل فوم، عزل مائي، كشف تسربات، عزل خزانات. ضمان 15 سنة وتوفير 40% من الكهرباء. اتصل الآن!",
    url: "https://tebaservices.com",
    siteName: "شركة عزل الأسطح - الرياض والخرج",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "شركة عزل اسطح بالرياض والخرج",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة عزل اسطح بالرياض والخرج | ضمان 15 سنة",
    description: "أفضل شركة عزل اسطح بالرياض - عزل فوم، عزل مائي، كشف تسربات. ضمان 15 سنة. اتصل: 0507067378",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.webp",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.webp",
        type: "image/webp",
      },
    ],
    apple: "/logo.webp",
  },
  verification: {
    google: "SaKRifnILeX3xHG89nlw8wo7M8gICSzz_iiaGkSdFnY",
  },
  category: "خدمات العزل والبناء",
}

// Schema.org JSON-LD للموقع
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tebaservices.com/#organization",
  name: "شركة عزل الأسطح",
  alternateName: "شركة عزل اسطح بالرياض والخرج",
  url: "https://tebaservices.com",
  logo: {
    "@type": "ImageObject",
    url: "https://tebaservices.com/logo.webp",
    width: 512,
    height: 512,
  },
  image: "https://tebaservices.com/logo.webp",
  description: "شركة متخصصة في عزل الأسطح والخزانات بالرياض والخرج. خبرة أكثر من 15 عاماً في مجال العزل المائي والحراري وكشف تسربات المياه.",
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "شركة عزل الأسطح",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "طريق الملك فهد",
    addressLocality: "الرياض",
    addressRegion: "منطقة الرياض",
    postalCode: "12345",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+966507067378",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
      areaServed: ["SA"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "22:00",
      },
    },
    {
      "@type": "ContactPoint",
      telephone: "+966507067378",
      contactType: "sales",
      availableLanguage: ["Arabic"],
    },
  ],
  sameAs: [
    "https://wa.me/966507067378",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "الرياض",
      "@id": "https://www.wikidata.org/wiki/Q3692",
    },
    {
      "@type": "City",
      name: "الخرج",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات العزل",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "عزل فوم بولي يوريثان",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "عزل فوم للأسطح",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "عزل مائي",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "عزل مائي للأسطح",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "كشف تسربات",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "كشف تسربات المياه",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "عزل خزانات",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "عزل خزانات المياه",
            },
          },
        ],
      },
    ],
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tebaservices.com/#localbusiness",
  name: "شركة عزل اسطح بالرياض والخرج",
  image: "https://tebaservices.com/logo.webp",
  url: "https://tebaservices.com",
  telephone: "+966507067378",
  priceRange: "$$",
  description: "أفضل شركة عزل اسطح بالرياض والخرج - خبرة 15+ عام في عزل الفوم والعزل المائي وكشف التسربات وعزل الخزانات. ضمان شامل 15 سنة.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "طريق الملك فهد",
    addressLocality: "الرياض",
    addressRegion: "منطقة الرياض",
    postalCode: "12345",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "سعد القحطاني",
      },
      reviewBody: "بصراحة كنت متردد في عزل الفوم، لكن بعد التعامل مع فريقكم تغيرت نظرتي. فواتير الكهرباء نزلت بشكل ملحوظ من أول شهر.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "م. عبدالرحمن الزهراني",
      },
      reviewBody: "كمهندس، أقيم العمل بناءً على المعايير الفنية. المواد المستخدمة عندكم ممتازة وسماكة الفوم مطابقة للمواصفات.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "أبو محمد",
      },
      reviewBody: "عانيت سنوات من تسربات الأمطار في الملحق. بعد العزل المائي والحراري بالفوم، اختفت المشكلة تماماً.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات شركة العزل",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل فوم بولي يوريثان",
          description: "عزل حراري ومائي بتقنية الفوم البولي يوريثان - توفير 40% من فاتورة الكهرباء",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل مائي للأسطح",
          description: "حماية شاملة من تسرب المياه والرطوبة بضمان 15 سنه",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "كشف تسربات المياه",
          description: "كشف التسربات بأحدث الأجهزة الإلكترونية بدون تكسير",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل خزانات المياه",
          description: "عزل خزانات أرضية وعلوية بمواد آمنة صحياً",
        },
      },
    ],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tebaservices.com/#website",
  url: "https://tebaservices.com",
  name: "شركة عزل الأسطح - الرياض والخرج",
  description: "الموقع الرسمي لشركة عزل الأسطح بالرياض والخرج - خدمات عزل احترافية بضمان شامل",
  publisher: {
    "@id": "https://tebaservices.com/#organization",
  },
  inLanguage: "ar-SA",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://tebaservices.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "الرئيسية",
      item: "https://tebaservices.com",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
