/**
 * هيكلة بيانات الخدمات الموحدة
 * تسهل التطوير المستقبلي للوحة التحكم
 */

import type { LucideIcon } from "lucide-react"

// أنواع الأقسام المتاحة في صفحات الخدمات
export type SectionType =
    | "text-image"
    | "features-grid"
    | "process-timeline"
    | "faq-accordion"
    | "benefits-grid"

// عنصر في قسم (سؤال/فائدة/خطوة)
export interface SectionItem {
    title: string
    description: string
}

// قسم في صفحة الخدمة
export interface ServiceSection {
    id: string
    type: SectionType
    title: string
    content?: string
    image?: string
    imageAlt?: string
    items?: SectionItem[]
}

// بيانات SEO
export interface ServiceSEO {
    title: string
    description: string
    keywords: string[]
    ogImage?: string
}

// Hero Section
export interface ServiceHero {
    image: string
    imageAlt: string
    description: string
    features: string[]
    stats?: { label: string; value: string }[]
}

// CTA Section
export interface ServiceCTA {
    title: string
    description: string
    benefits: string[]
}

// Schema.org data
export interface ServiceSchema {
    "@context": string
    "@type": string
    "@id": string
    name: string
    alternateName?: string
    description: string
    serviceType: string
    provider: {
        "@type": string
        "@id": string
        name: string
    }
    areaServed: { "@type": string; name: string }[]
    hasOfferCatalog?: object
    aggregateRating?: {
        "@type": string
        ratingValue: string
        reviewCount: string
        bestRating: string
        worstRating: string
    }
    review?: object[]
}

// تقييم/شهادة عميل
export interface ServiceTestimonial {
    name: string
    location: string
    rating: number
    comment: string
    service: string
    date?: string
}

// بيانات صفحة الخدمة الكاملة
export interface ServicePageConfig {
    // معلومات أساسية
    slug: string
    icon: LucideIcon
    title: string
    subtitle: string
    breadcrumb: string

    // SEO
    seo: ServiceSEO

    // Hero Section
    hero: ServiceHero

    // المحتوى الرئيسي
    sections: ServiceSection[]

    // CTA Section
    cta: ServiceCTA

    // Schema.org
    schema: ServiceSchema
    breadcrumbSchema: object
    productSchema?: object

    // التقييمات
    testimonials: ServiceTestimonial[]
}

// بيانات الخدمة في الشبكة/القائمة
export interface ServiceGridItem {
    id: string
    slug: string
    title: string
    subtitle: string
    shortDescription: string
    longDescription: string
    image: string
    icon: LucideIcon
    features: string[]
    keywords: string[]
}

// قائمة جميع الخدمات (للاستخدام في الشبكة والقوائم)
export const SERVICE_SLUGS = [
    "foam-insulation",
    "waterproofing",
    "leak-detection",
    "tank-insulation"
] as const

export type ServiceSlug = typeof SERVICE_SLUGS[number]

// خريطة الخدمات للصفحة الرئيسية
export const SERVICE_ROUTES: Record<ServiceSlug, string> = {
    "foam-insulation": "/services/foam-insulation",
    "waterproofing": "/services/waterproofing",
    "leak-detection": "/services/leak-detection",
    "tank-insulation": "/services/tank-insulation"
}

// ألوان الخدمات (للاستخدام في التصميم)
export const SERVICE_COLORS: Record<ServiceSlug, { primary: string; bg: string }> = {
    "foam-insulation": { primary: "#f97316", bg: "#fff7ed" },
    "waterproofing": { primary: "#3b82f6", bg: "#eff6ff" },
    "leak-detection": { primary: "#10b981", bg: "#ecfdf5" },
    "tank-insulation": { primary: "#8b5cf6", bg: "#f5f3ff" }
}
