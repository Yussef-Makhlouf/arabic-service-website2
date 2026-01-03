import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ChevronLeft,
  type LucideIcon,
  HelpCircle,
  Shield,
  Award,
  Clock,
  Users,
  Wrench,
  Camera,
  Star,
  MapPin,
  Zap,
  Target,
  ThumbsUp,
} from "lucide-react"
import { ServiceAreas } from "@/components/services/service-areas"
import { StickyMobileCTA } from "@/components/services/sticky-mobile-cta"

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
  heroImage?: string
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
      <div className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-4 h-4" />
            <Link href="/services" className="hover:text-primary transition-colors">
              الخدمات
            </Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-primary font-medium">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-right space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">خدمة معتمدة بضمان 15 سنة</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl text-white lg:text-5xl xl:text-6xl font-bold leading-tight font-heading">
                {data.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {data.subtitle}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-white/70">سنة خبرة</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-sm text-white/70">عميل راضٍ</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm text-white/70">سنة ضمان</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button
                  size="lg"
                  className="gap-3 text-lg h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl hover:shadow-2xl transition-all font-bold"
                  asChild
                >
                  <a href="tel:+966507067378">
                    <Phone className="h-5 w-5" />
                    اتصل الآن: 0507067378
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-3 text-lg h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-white/5 shadow-lg"
                  asChild
                >
                  <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    واتساب
                  </a>
                </Button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src={data.heroImage || "/cover3.webp"}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">ضمان شامل</div>
                    <div className="text-sm text-muted-foreground">15 سنة على جميع الأعمال</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/60 hover:border-primary/30 hover:shadow-lg transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Target className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">لمن هذه الخدمة؟</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  أصحاب الفلل والمباني التجارية والمستودعات الذين يريدون حماية عقاراتهم
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 hover:border-primary/30 hover:shadow-lg transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">متى تطلبها؟</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  قبل موسم الأمطار، عند ظهور علامات التسرب، أو كإجراء وقائي
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 hover:border-primary/30 hover:shadow-lg transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ThumbsUp className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">لماذا نحن؟</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  خبرة 15+ عاماً، ضمان 15 سنة، مواد معتمدة، وفريق متخصص
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12">

          {/* Content Area */}
          <div className="space-y-16 order-2 lg:order-1">

            {/* About Service */}
            <section>
              <SectionHeader icon={Zap} title="عن الخدمة" />
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-loose text-lg">
                  {data.heroContent.description}
                </p>
              </div>

              {data.heroContent.features.length > 0 && (
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {data.heroContent.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-100 dark:border-green-900">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Dynamic Sections */}
            {data.sections.map((section, index) => (
              <SectionRenderer key={index} section={section} index={index} />
            ))}

          </div>

          {/* Sidebar */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Service Card */}
              <Card className="border-border shadow-xl overflow-hidden">
                <div className="bg-primary p-5">
                  <h3 className="text-lg font-bold text-white text-center">معلومات الخدمة</h3>
                </div>
                <CardContent className="p-6 space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">مدة التنفيذ</div>
                        <div className="font-bold text-foreground">1-3 أيام</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">الضمان</div>
                        <div className="font-bold text-foreground">15 سنة مكتوب</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">نطاق الخدمة</div>
                        <div className="font-bold text-foreground">الرياض والخرج</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <Button
                      size="lg"
                      className="w-full gap-2 h-13 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
                      asChild
                    >
                      <a href="tel:+966507067378">
                        <Phone className="h-5 w-5" />
                        اتصل الآن
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full gap-2 h-13 text-base font-bold border-green-500 text-green-600 hover:bg-green-50"
                      asChild
                    >
                      <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        واتساب
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-border shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-5 text-center">لماذا تختارنا؟</h4>
                  <div className="space-y-3">
                    {[
                      "خبرة أكثر من 15 عاماً",
                      "مواد معتمدة عالمياً",
                      "فريق فني متخصص",
                      "ضمان مكتوب 15 سنة",
                      "أسعار منافسة",
                      "خدمة سريعة"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rating */}
              <Card className="border-border shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground mt-1">من أكثر من 5000 عميل</div>
                </CardContent>
              </Card>
            </div>
          </aside>

        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <SectionHeader icon={Camera} title="معرض أعمالنا" centered />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <Image
                  src={`/cover${(i % 4) + 1}.webp`}
                  alt={`مشروع ${i}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="font-bold">مشروع {i}</div>
                  <div className="text-sm text-white/80">الرياض</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas serviceName={data.title} />

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
              <Phone className="w-8 h-8 text-secondary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
              {data.ctaSection.title}
            </h2>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              {data.ctaSection.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="gap-3 text-lg h-16 px-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold"
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
                className="gap-3 text-lg h-16 px-10 border-white/30 text-white hover:bg-white/10 bg-white/5"
                asChild
              >
                <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6" />
                  واتساب
                </a>
              </Button>
            </div>

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="font-medium">ضمان 15 سنة مكتوب على جميع أعمالنا</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </main>
  )
}

// Section Header Component
function SectionHeader({ icon: Icon, title, centered = false }: { icon: LucideIcon; title: string; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}>
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">{title}</h2>
    </div>
  )
}

// Section Renderer Component
function SectionRenderer({ section, index }: { section: ServiceSection; index: number }) {
  switch (section.type) {
    case "features-grid":
      return (
        <section>
          <SectionHeader icon={CheckCircle} title={section.title} />
          <div className="grid sm:grid-cols-2 gap-4">
            {section.items?.map((item, i) => (
              <Card key={i} className="border-border/60 hover:border-primary/30 hover:shadow-md transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )

    case "benefits-grid":
      return (
        <section>
          <SectionHeader icon={Award} title={section.title} />
          <div className="grid sm:grid-cols-2 gap-4">
            {section.items?.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )

    case "process-timeline":
      return (
        <section>
          <SectionHeader icon={Wrench} title={section.title} />
          <div className="space-y-4">
            {section.items?.map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-xl shadow-lg">
                  {i + 1}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )

    case "faq-accordion":
      return (
        <section>
          <SectionHeader icon={HelpCircle} title={section.title} />
          <Accordion type="single" collapsible className="w-full bg-background rounded-2xl border border-border overflow-hidden shadow-sm">
            {section.items?.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 last:border-0">
                <AccordionTrigger className="px-6 py-5 text-right font-bold hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-base">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  <div className="pr-11">{item.description}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )

    case "text-image":
    default:
      return (
        <section>
          <SectionHeader icon={Zap} title={section.title} />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="prose prose-lg max-w-none">
              {section.content && /<[a-z][\s\S]*>/i.test(section.content) ? (
                <div dangerouslySetInnerHTML={{ __html: section.content }} className="text-muted-foreground" />
              ) : (
                section.content?.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-loose mb-4">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
            {section.image && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )
  }
}
