import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Check, AlertTriangle, Lightbulb, Trophy } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface MaterialSpec {
  name: string
  thickness: string
  lifespan: string
  heatResistance: string
  warranty: string
}

interface BeforeAfter {
  before: string
  beforeAlt: string
  beforeQuery: string
  after: string
  afterAlt: string
  afterQuery: string
}

interface WorkImage {
  src: string
  alt: string
  query: string
}

interface FAQ {
  q: string
  a: string
}

interface Warranty {
  duration: string
  coverage: string
  conditions: string[]
}

interface ProblemSolutionResult {
  title: string
  description: string
  image: string
  imageAlt: string
  imageQuery: string
}

interface ServiceBlockProps {
  id: string
  serviceNumber: number
  title: string
  subtitle: string
  heroImage: string
  heroImageAlt: string
  heroImageQuery: string
  problem: ProblemSolutionResult
  solution: ProblemSolutionResult
  result: ProblemSolutionResult
  whenRecommended: string[]
  materials: MaterialSpec[]
  warranty: Warranty
  beforeAfterImages: BeforeAfter[]
  workImages: WorkImage[]
  faqs: FAQ[]
}

export function ServiceBlock({
  id,
  serviceNumber,
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  heroImageQuery,
  problem,
  solution,
  result,
  whenRecommended,
  materials,
  warranty,
  beforeAfterImages,
  workImages,
  faqs,
}: ServiceBlockProps) {
  return (
    <section id={id} className="py-16 md:py-24 border-b border-border scroll-mt-32">
      <div className="container mx-auto px-4">
        {/* Service Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <span className="font-bold">الخدمة {serviceNumber}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">{title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:+966507067378">
                  <Phone className="h-5 w-5" />
                  اطلب الخدمة
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  استشارة مجانية
                </a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={`/placeholder.svg?height=600&width=800&query=${encodeURIComponent(heroImageQuery)}`}
              alt={heroImageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Problem Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 bg-destructive/5 rounded-2xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-destructive/10 rounded-full">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{problem.title}</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {problem.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
            <Image
              src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(problem.imageQuery)}`}
              alt={problem.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
              المشكلة
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-md order-2 lg:order-1">
            <Image
              src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(solution.imageQuery)}`}
              alt={solution.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              الحل
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{solution.title}</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {solution.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 bg-accent/50 rounded-2xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent rounded-full">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{result.title}</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {result.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
            <Image
              src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(result.imageQuery)}`}
              alt={result.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-sm font-medium">
              النتيجة
            </div>
          </div>
        </div>

        {/* Before/After Gallery */}
        {beforeAfterImages.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              قبل وبعد العزل
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {beforeAfterImages.map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(item.beforeQuery)}`}
                      alt={item.beforeAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                      قبل
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(item.afterQuery)}`}
                      alt={item.afterAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      بعد
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Work Process Images */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">مراحل العمل</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {workImages.map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={`/placeholder.svg?height=300&width=500&query=${encodeURIComponent(img.query)}`}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-background p-4 text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When Recommended */}
        <div className="mb-16 bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">متى نوصي بهذه الخدمة؟</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {whenRecommended.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <div className="p-1 bg-primary/10 rounded-full shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Materials Table */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
            المواد المستخدمة ومواصفاتها
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-right p-4 font-bold">المادة</th>
                  <th className="text-right p-4 font-bold">السماكة</th>
                  <th className="text-right p-4 font-bold">العمر الافتراضي</th>
                  <th className="text-right p-4 font-bold">مقاومة الحرارة</th>
                  <th className="text-right p-4 font-bold">الضمان</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((material, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                    <td className="p-4 font-medium text-foreground">{material.name}</td>
                    <td className="p-4 text-muted-foreground">{material.thickness}</td>
                    <td className="p-4 text-muted-foreground">{material.lifespan}</td>
                    <td className="p-4 text-muted-foreground">{material.heatResistance}</td>
                    <td className="p-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                        {material.warranty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="mb-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-right">
              <div className="text-6xl md:text-7xl font-bold">{warranty.duration}</div>
              <div className="text-xl mt-2">ضمان شامل</div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-heading font-bold">ماذا يغطي الضمان؟</h3>
              <p className="text-primary-foreground/90 leading-relaxed">{warranty.coverage}</p>
              <div className="pt-4">
                <h4 className="font-bold mb-2">شروط الضمان:</h4>
                <ul className="space-y-2">
                  {warranty.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-primary-foreground/90">
                      <Check className="h-4 w-4" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">أسئلة شائعة عن {title}</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Service CTA */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">هل تحتاج خدمة {title}؟</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            فريقنا جاهز لزيارة موقعك وتقديم استشارة مجانية. احصل على عرض سعر مفصل خلال 24 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-lg h-14" asChild>
              <a href="tel:+966507067378">
                <Phone className="h-5 w-5" />
                اتصل الآن: 0507067378
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg h-14 bg-transparent" asChild>
              <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                واتساب للاستشارة
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
