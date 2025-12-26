import type React from "react"
import type { Metadata } from "next"
import { Cairo, Noto_Kufi_Arabic, Amiri, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
})

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
  display: "swap",
})

// const amiri = Amiri({
//   subsets: ["arabic"],
//   weight: ["400", "700"],
//   variable: "--font-amiri",
//   display: "swap",
// })

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
})

export const metadata: Metadata = {
  title: "شركة عزل اسطح بالرياض والخرج | خبرة +15 عام | ضمان شامل",
  description:
    "شركة متخصصة في عزل الأسطح والخزانات بالرياض والخرج. نقدم عزل مائي، عزل فوم، عزل أسمنتي، وكشف تسربات المياه. معتمدون من الهيئة السعودية للمهندسين مع ضمان شامل.",
  keywords: "عزل اسطح بالرياض, عزل اسطح بالخرج, عزل فوم, عزل مائي, كشف تسربات المياه, عزل خزانات, شركة عزل الرياض",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${notoKufi.variable} ${tajawal.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
