import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
  ChevronLeft,
  type LucideIcon,
  HelpCircle,
  Info,
} from "lucide-react"
import { Rating } from "@/components/ui/rating"
import { ServiceAreas } from "@/components/services/service-areas"

export type SectionType = "text-image" | "features-grid" | "process-timeline" | "faq-accordion" | "benefits-grid"

export interface ServiceSectionItem {
  title: string
  description: string
}

export interface ServiceSection {
  title: string
  type?: SectionType
  content?: string
  image?: string
  imageQuery?: string
  items?: ServiceSectionItem[]
}

export interface ServicePageData {
  icon: LucideIcon
  title: string
  subtitle: string
  breadcrumb: string
  heroImage?: string // صورة خلفية للـ Hero
  heroContent: {
    description: string
    features: string[]
  }
  sections: ServiceSection[]
  ctaSection: {
    title: string
    description: string
    benefits: string[]
  }
}

export function ServicePageLayout({ data }: { data: ServicePageData }) {
  const Icon = data.icon

  return (
    <main className="min-h-screen bg-background dir-rtl">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            <Link href="/services" className="hover:text-primary transition-colors">
              الخدمات
            </Link>
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            <span className="text-foreground font-medium">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-[#59478a] via-[#4a3a75] to-[#3d2f63] text-white overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* المحتوى */}
            <div className="space-y-8 text-center lg:text-right">
              {/* شارة الثقة */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full shadow-lg">
                <Icon className="h-5 w-5 text-amber-400" />
                <span className="text-sm md:text-base font-medium text-white/95">خدمة معتمدة بضمان 15 سنة</span>
              </div>

              {/* العنوان الرئيسي */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-xl mb-4">
                  {data.title}
                </h1>
                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  {data.subtitle}
                </p>
              </div>

              {/* شارات المميزات */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {data.heroContent.features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm border border-white/10"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* أزرار CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-3 text-lg h-16 px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white text-[#59478a] hover:bg-gray-100 font-bold"
                  asChild
                >
                  <a href="tel:+966507067378">
                    <Phone className="h-6 w-6" />
                    اتصل الآن: 0507067378
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-3 text-lg h-16 px-8 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-6 w-6" />
                    واتساب للاستشارة
                  </a>
                </Button>
              </div>

              {/* الإحصائيات */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/20">
                <div className="text-center p-2">
                  <div className="text-2xl md:text-3xl font-bold text-white">+15</div>
                  <div className="text-xs md:text-sm text-white/70">سنة خبرة</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-2xl md:text-3xl font-bold text-white">+5000</div>
                  <div className="text-xs md:text-sm text-white/70">مشروع</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-2xl md:text-3xl font-bold text-white">15</div>
                  <div className="text-xs md:text-sm text-white/70">سنة ضمان</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-xs md:text-sm text-white/70">دعم فني</div>
                </div>
              </div>
            </div>

            {/* الصورة */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src={data.heroImage || "/cover3.webp"}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#59478a]/60 via-transparent to-transparent"></div>

                {/* بطاقة عائمة */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">ضمان 15 سنة مكتوب</div>
                      <div className="text-sm text-muted-foreground">على جميع أعمال العزل والمواد</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* زخرفة */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* الوصف التفصيلي - للموبايل وأسفل الهيرو */}
          <div className="mt-12 lg:mt-16">
            <Card className="text-right bg-white/5 backdrop-blur-md border-white/10 shadow-2xl overflow-hidden">
              <CardContent className="pt-8 pb-8 md:p-10">
                <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 font-light">
                  {data.heroContent.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.heroContent.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/5">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-base text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-16 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <SummaryCard
              icon={HelpCircle}
              title="لمن هذه الخدمة؟"
              description="أصحاب الفلل والمباني التجارية والمستودعات الذين يعانون من مشاكل التسرب أو يريدون الوقاية."
            />
            <SummaryCard
              icon={Info}
              title="متى تطلبها؟"
              description="قبل موسم الأمطار، عند ظهور علامات التسرب، أو كإجراء وقائي للمباني الجديدة."
            />
            <SummaryCard
              icon={CheckCircle}
              title="لماذا نحن؟"
              description="خبرة 15+ عاماً، ضمان 15 سنه، مواد معتمدة، وفريق متخصص يضمن جودة التنفيذ."
            />
          </div>
        </div>
      </section>

      <div className="bg-background">
        {data.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} index={index} />
        ))}
      </div>

      {/* Service Areas Section */}
      <ServiceAreas serviceName={data.title} />

      {/* Rating Section */}
      <section className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-center">
            <Rating
              rating={4.9}
              totalReviews={1250}
              className="w-full max-w-md bg-muted/20 border-border/50"
            />
          </div>
        </div>
      </section>

      {/* Other Services Link */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 font-heading">هل تبحث عن خدمة أخرى؟</h3>
            <p className="text-muted-foreground text-lg mb-8">
              نقدم مجموعة متكاملة من خدمات العزل والكشف عن التسربات لتغطية جميع احتياجاتك
            </p>
            <Button asChild size="lg" variant="outline" className="gap-2 h-12 px-8 text-base">
              <Link href="/services">
                عرض جميع خدماتنا
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#59478a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{data.ctaSection.title}</h2>
            <p className="text-xl leading-relaxed mb-10 opacity-90 max-w-2xl mx-auto">
              {data.ctaSection.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
              {data.ctaSection.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 justify-center md:justify-start bg-white/10 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-base font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-lg"
                asChild
              >
                <a href="tel:+966507067378">
                  <Phone className="h-5 w-5" />
                  اطلب الخدمة الآن
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg h-14 px-8 border-white/30 hover:bg-white/10 bg-transparent text-white"
                asChild
              >
                <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  تواصل واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SummaryCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4 text-primary">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function SectionRenderer({ section, index }: { section: ServiceSection; index: number }) {
  const isEven = index % 2 === 0
  const bgClass = isEven ? "bg-background" : "bg-muted/30"

  switch (section.type) {
    case "features-grid":
      return (
        <section className={`py-20 ${bgClass}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <SectionHeader title={section.title} centered />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items?.map((item, i) => (
                  <Card key={i} className="border-border/60 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3 text-lg leading-tight">
                        <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )

    case "benefits-grid":
      return (
        <section className={`py-20 ${bgClass}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <SectionHeader title={section.title} centered />
              <div className="grid sm:grid-cols-2 gap-6">
                {section.items?.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-background rounded-xl border border-border shadow-sm transition-hover hover:shadow-md">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )

    case "process-timeline":
      return (
        <section className={`py-20 ${bgClass} overflow-hidden`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader title={section.title} centered />
              <div className="relative space-y-8 sm:space-y-12">
                {/* Timeline line - hidden on small screens */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border -translate-x-1/2 hidden sm:block"></div>

                {section.items?.map((item, i) => (
                  <div key={i} className="relative flex flex-col sm:flex-row items-center justify-between gap-8 group">
                    {/* Content Box */}
                    <div className={`w-full sm:w-[45%] ${i % 2 === 0 ? "sm:order-1 sm:text-left" : "sm:order-2 sm:text-right"}`}>
                      <div className={`p-6 bg-background rounded-xl border border-border shadow-sm relative transition-transform hover:-translate-y-1 duration-300 ${i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}>
                        {/* Connecting line */}
                        <div className={`absolute top-6 w-8 h-px bg-border hidden sm:block ${i % 2 === 0 ? "-right-8" : "-left-8"}`}></div>

                        <Badge variant="secondary" className="mb-3 w-fit">المرحلة {i + 1}</Badge>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Circle */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-background z-10 sm:block hidden">
                      {i + 1}
                    </div>

                    {/* Mobile Number - only visible on mobile */}
                    <div className="sm:hidden w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-2">
                      {i + 1}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )

    case "faq-accordion":
      return (
        <section className={`py-20 ${bgClass}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeader title={section.title} centered />
              <Accordion type="single" collapsible className="w-full bg-background rounded-xl border border-border px-6 py-2 shadow-sm">
                {section.items?.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-right font-bold text-lg py-4 hover:no-underline hover:text-primary transition-colors">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )

    case "text-image":
    default:
      return (
        <section className={`py-20 ${bgClass} scroll-mt-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <SectionHeader title={section.title} />
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    {section.content && /<[a-z][\s\S]*>/i.test(section.content) ? (
                      <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    ) : (
                      section.content?.split("\n\n").map((paragraph, i) => {
                        if (paragraph.startsWith("**")) {
                          const parts = paragraph.split("**")
                          return (
                            <div key={i} className="mb-4 bg-muted/30 p-4 rounded-lg border-r-4 border-primary">
                              <h4 className="text-lg font-bold text-foreground mb-1">{parts[1]}</h4>
                              <p className="text-muted-foreground leading-relaxed text-sm">{parts[2]}</p>
                            </div>
                          )
                        }
                        return (
                          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        )
                      })
                    )}
                  </div>
                </div>
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border group ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <Image
                    src={section.image || `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(section.imageQuery || section.title)}`}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
  }
}

function SectionHeader({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <div className={`mb-10 ${centered ? "text-center flex flex-col items-center" : ""}`}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground relative inline-block pb-4 z-10">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
      </h2>
    </div>
  )
}
