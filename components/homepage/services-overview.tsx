import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Wind, Hammer, Search, Database, ArrowLeft, Phone, Star, Building2 } from "lucide-react"
import Image from "next/image"

import { getServices } from "@/lib/api-client"

import { staticServices } from "@/lib/services-data"

export async function ServicesOverview() {
  const apiServices = await getServices()

  let services = []

  if (Array.isArray(apiServices) && apiServices.length > 0) {
    services = apiServices.map((service: any) => ({
      id: service.slug,
      image: service.hero?.image || '/cover.png',
      icon: service.icon === 'Wind' ? Wind : service.icon === 'Droplets' ? Droplets : service.icon === 'Search' ? Search : Database,
      title: service.title,
      slug: `/services/${service.slug}`,
      description: service.subtitle,
      content: service.hero?.description || service.subtitle,
      features: service.hero?.features || [],
      useCases: service.seo?.keywords || []
    }))
  } else {
    // Fallback to static services
    services = staticServices.map((service) => ({
      id: service.id,
      image: service.image,
      icon: service.icon,
      title: service.title,
      slug: service.href,
      description: service.subtitle,
      content: service.longDescription || service.description,
      features: service.features,
      useCases: service.keywords || []
    }))
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">خدماتنا المتخصصة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات العزل الاحترافية باستخدام أحدث التقنيات والمواد المعتمدة عالمياً
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service: any, index: number) => (
            <div key={service.id} className="scroll-mt-24" id={service.id}>
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image Section */}
                <div className="w-full lg:w-2/5 relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <service.icon className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/80 line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                  {/* Decorative */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        خدمة احترافية
                      </span>
                      {index % 2 === 0 && <div className="h-px bg-border flex-1" />}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">{service.content.split('\n')[0].substring(0, 100)}...</h3>
                  </div>

                  {/* Extract */}
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {service.content.split('\n\n')[0]}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        أبرز المميزات
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature: string) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        تطبيقات الخدمة
                      </h4>
                      <ul className="space-y-2">
                        {service.useCases.slice(0, 3).map((useCase: string) => (
                          <li key={useCase} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 flex-1 md:flex-none">
                      <Link href="https://wa.me/966507067378" target="_blank">
                        <Phone className="w-5 h-5" />
                        تواصل واتساب
                      </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="gap-2 flex-1 md:flex-none">
                      <Link href={service.slug}>
                        تفاصيل الخدمة
                        <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16 bg-card border-2 border-border rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">نخدم جميع مناطق الرياض والخرج</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            فريقنا المتخصص جاهز لتقديم خدمات العزل الاحترافية في جميع أنحاء المنطقة
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["الرياض", "شمال الرياض", "جنوب الرياض", "شرق الرياض", "غرب الرياض", "الخرج", "الدرعية", "العليا"].map(
              (area) => (
                <span key={area} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                  {area}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
