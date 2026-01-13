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
  title: "شركة عزل فوم بالرياض | أفضل خدمات العزل المائي والحراري 0507067378 ",
  description:
    "شركة عزل فوم بالرياض معتمده. نقدم أفضل خدمات عزل الاسطح بالفوم (بولي يوريثان) وعزل مائي وحراري وعزل خزانات. حلول نهائية لتسربات المياه مع ضمان 15 عاماً.",
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
  applicationName: "شركة عزل فوم بالرياض - العزل المتقدم",
  authors: [{ name: "شركة العزل المتقدم", url: "https://tebaservices.com" }],
  creator: "شركة العزل المتقدم",
  publisher: "شركة العزل المتقدم",
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
    title: "شركة عزل فوم بالرياض | ضمان 15 سنة وتوفير 40% من الكهرباء",
    description: "أفضل شركة عزل فوم بالرياض. تنفيذ عزل مائي وحراري بأحدث تقنيات البولي يوريثان. معتمدون لدى شركة الكهرباء ونقدم ضمان شامل.",
    url: "https://tebaservices.com",
    siteName: "شركة العزل المتقدم - خدمات عزل الفوم",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "شركة عزل فوم بالرياض",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة عزل فوم بالرياض | 0507067378",
    description: "حل نهائي لمشاكل الحرارة والتسربات. عزل فوم بولي يوريثان أمريكي مع ضمان 15 سنة. اتصل الآن: 0507067378",
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
  category: "خدمات العزل و عزل الفوم و الاسطح",
}

// Schema.org JSON-LD للموقع
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tebaservices.com/#organization",
  name: "شركة العزل المتقدم - عزل فوم بالرياض",
  alternateName: "شركة عزل فوم بالرياض",
  url: "https://tebaservices.com",
  logo: {
    "@type": "ImageObject",
    url: "https://tebaservices.com/logo.webp",
    width: 512,
    height: 512,
  },
  image: "https://tebaservices.com/logo.webp",
  description: "الشركة الرائدة في مجال عزل الفوم (بولي يوريثان) بالرياض والخرج. نقدم حلول متكاملة للعزل المائي والحراري للأسطح والخزانات.",
  foundingDate: "2009",
  founder: {
    "@type": "Person",
    name: "مؤسسة العزل المتقدم",
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
        opens: "07:00",
        closes: "23:00",
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
    "https://www.instagram.com/awazelalsafrrat/?hl=ar",
    "https://www.facebook.com/Awazelalsafrat/"
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
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://tebaservices.com/#localbusiness",
  name: "شركة عزل فوم بالرياض",
  image: "https://tebaservices.com/logo.webp",
  url: "https://tebaservices.com",
  telephone: "+966507067378",
  priceRange: "$$",
  description: "أفضل شركة عزل فوم وعزل مائي وحراري بالرياض. خبراء في عزل الأسطح الشينكو والخرسانية بمادة الفوم الأمريكي. معتمدون وضمان 15 سنة.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "طريق الملك فهد، حي الصحافة",
    addressLocality: "الرياض",
    addressRegion: "منطقة الرياض",
    postalCode: "13315",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7937,
    longitude: 46.6191,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "23:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "854",
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
        name: "خالد الشمري",
      },
      reviewBody: "ما شاء الله تبارك الله، شغل احترافي وسريع. عزلت السطح عندهم بالفوم والفرق واضح في برودة البيت.",
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
        name: "م. فهد السبيعي",
      },
      reviewBody: "تعاملت معهم في عزل مستودع هناجر (شينكو). الفوم كثافته ممتازة وسماكة منتظمة. أنصح بهم.",
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
        name: "أبو عبدالله",
      },
      reviewBody: "الأفضل في الرياض من تجربة. دقة في المواعيد وأسعارهم مناسبة جداً مقارنة بالجودة.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات عزل الفوم والعزل المائي",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل فوم بولي يوريثان",
          description: "عزل مزدوج (مائي وحراري) للأسطح الخرسانية والمعدنية لتوفير الطاقة وحماية المبنى.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل اسطح شينكو",
          description: "رش فوم بولي يوريثان على الهناجر والمستودعات لمنع الحرارة وتسرب مياه الأمطار.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل مائي",
          description: "حماية الأسطح والخزانات من التسربات باستخدام أفضل المواد العازلة.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "عزل خزانات",
          description: "تنظيف وعزل الخزانات بمواد إيبوكسي آمنة ومعتمدة.",
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
  name: "شركة عزل فوم بالرياض",
  description: "الموقع الرسمي لشركة العزل المتقدم - خدمات عزل الفوم وعزل الأسطح بالرياض بأفضل الأسعار",
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
