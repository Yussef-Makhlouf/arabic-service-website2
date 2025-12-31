import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ArrowLeft, Check, Wind, Droplets, Search, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getServices } from "@/lib/api-client"

import { Service, staticServices } from "@/lib/services-data"


// Icon mapping for API data
const iconMap: Record<string, LucideIcon> = {
  Wind,
  Droplets,
  Search,
  Database,
}

// Fetch services with fallback
async function getServicesData(): Promise<Service[]> {
  try {
    const apiServices = await getServices()
    if (Array.isArray(apiServices) && apiServices.length > 0) {
      return apiServices.map((service: any) => ({
        id: service._id || service.slug,
        slug: service.slug,
        title: service.title,
        subtitle: service.subtitle,
        description: service.subtitle,
        longDescription: service.hero?.description || service.subtitle,
        href: `/services/${service.slug}`,
        image: service.hero?.image || '/cover.webp',
        icon: iconMap[service.icon] || Wind,
        features: service.hero?.features || [],
        keywords: service.seo?.keywords || []
      }))
    }
    return staticServices
  } catch (error) {
    console.error('Failed to fetch services:', error)
    return staticServices
  }
}

export async function ServicesGrid() {
  const services = await getServicesData()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="اختر الخدمة المناسبة لاحتياجاتك"
          subtitle="نقدم 4 خدمات متخصصة تغطي جميع احتياجات العزل وكشف التسربات في الرياض والخرج. اضغط على أي خدمة للتفاصيل الكاملة."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = typeof service.icon === 'string' ? iconMap[service.icon] || Wind : service.icon
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col border-2 border-transparent hover:border-primary/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} في الرياض - ${service.subtitle}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

                  {/* أيقونة الخدمة */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* العنوان على الصورة */}
                  <div className="absolute bottom-4 right-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-2">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* الوصف الطويل */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.longDescription || service.description}
                  </p>

                  {/* المميزات */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* الكلمات المفتاحية */}
                  {service.keywords && service.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.keywords.slice(0, 3).map((keyword, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button asChild className="w-full gap-2 group/btn h-12 text-base font-bold">
                    <Link href={service.href}>
                      عرض تفاصيل الخدمة
                      <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
