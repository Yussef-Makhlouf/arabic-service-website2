import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, CheckCircle, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { getFAQCategories } from "@/lib/api-client"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة عن العزل - دليلك الشامل لعزل الأسطح والخزانات بالرياض | 0507067378",
  description:
    "إجابات شاملة على جميع أسئلتك حول خدمات العزل المائي والحراري، كشف التسربات، عزل الفوم، وعزل الخزانات في الرياض والخرج. أكثر من 50 سؤال وجواب من خبراء العزل مع خبرة 15+ عام.",
  keywords: [
    "اسئلة شائعة عن العزل",
    "ما هو عزل الفوم",
    "كم تكلفة عزل الأسطح",
    "ضمان العزل",
    "كشف تسربات بدون تكسير",
    "عزل الخزانات",
  ].join(", "),
}

// Static fallback data
const staticFaqCategories = [
  {
    _id: "1",
    name: "أسئلة عامة حول خدمات العزل",
    questions: [
      {
        _id: "q1",
        question: "ما هي أنواع العزل المتوفرة لديكم؟",
        answer: "نقدم مجموعة شاملة من خدمات العزل المتخصصة تشمل: العزل المائي لحماية الأسطح من تسرب المياه والرطوبة، العزل الحراري بالفوم البولي يوريثان لتقليل استهلاك الطاقة، كشف تسربات المياه بأحدث الأجهزة الإلكترونية، وعزل الخزانات الأرضية والعلوية.",
        isActive: true
      },
      {
        _id: "q2",
        question: "لماذا يعتبر العزل ضرورياً للمباني في السعودية؟",
        answer: "المناخ السعودي يتميز بدرجات حرارة مرتفعة جداً في الصيف تصل إلى 50 درجة مئوية. العزل الجيد يحمي المبنى من تسرب المياه ويقلل استهلاك الكهرباء للتكييف بنسبة تصل إلى 40%.",
        isActive: true
      },
      {
        _id: "q3",
        question: "هل تقدمون ضمان على الأعمال؟",
        answer: "نعم، نقدم ضماناً شاملاً على جميع أعمالنا يتراوح من 5 إلى 15 سنة حسب نوع الخدمة والمواد المستخدمة.",
        isActive: true
      }
    ],
    isActive: true
  }
]

// Generate FAQPage Schema
function generateFAQSchema(categories: any[]) {
  const allQuestions = categories.flatMap(category =>
    category.questions
      .filter((q: any) => q.isActive)
      .map((q: any) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
  )

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions,
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tebaservices.com" },
    { "@type": "ListItem", position: 2, name: "الأسئلة الشائعة", item: "https://tebaservices.com/faq" },
  ],
}

// Fetch FAQ data with fallback
async function getFAQData() {
  try {
    const apiData = await getFAQCategories()
    if (apiData && apiData.length > 0) {
      return apiData.filter((cat: any) => cat.isActive)
    }
    return staticFaqCategories
  } catch (error) {
    console.log('API unavailable, using static FAQ data')
    return staticFaqCategories
  }
}

export default async function FAQPage() {
  const faqCategories = await getFAQData()
  const faqSchema = generateFAQSchema(faqCategories)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-24 border-b bg-muted/20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container relative px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                مركز المساعدة والدعم
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground lg:text-7xl">
                الأسئلة الشائعة
                <span className="block text-primary mt-2">وإجابات الخبراء</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                لقد قمنا بتجميع إجابات مفصلة لأهم الأسئلة حول خدمات العزل المائي والحراري.
                <br className="hidden sm:inline" />
                اكتشف كيف يمكننا حماية منزلك بأفضل الحلول.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto space-y-16">
              {faqCategories.map((category: any, categoryIndex: number) => (
                <div key={category._id || categoryIndex} className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-primary/10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-inner">
                      <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">{category.name}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions
                      .filter((item: any) => item.isActive !== false)
                      .map((item: any, itemIndex: number) => (
                        <AccordionItem
                          key={item._id || itemIndex}
                          value={`item-${categoryIndex}-${itemIndex}`}
                          className="group border border-border/50 rounded-xl overflow-hidden bg-card transition-all duration-200 hover:shadow-lg hover:border-primary/20"
                        >
                          <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 data-[state=open]:bg-muted/30">
                            <div className="flex items-start gap-4 text-right w-full">
                              <CheckCircle className="w-5 h-5 text-primary/60 mt-1 flex-shrink-0 group-hover:text-primary transition-colors" />
                              <span className="font-semibold text-lg leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors">
                                {item.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-16 pb-6 pt-2 bg-muted/5">
                            <div className="text-muted-foreground text-base leading-7">
                              {item.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 border-t bg-muted/20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-primary/10 shadow-xl bg-gradient-to-br from-background to-muted">
                <CardContent className="p-10 md:p-12 text-center space-y-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto ring-8 ring-primary/5">
                    <HelpCircle className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">لم تجد إجابة لسؤالك؟</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      فريقنا المتخصص جاهز للإجابة على جميع استفساراتك وتقديم استشارات مجانية حول احتياجاتك الخاصة.
                      لا تتردد في التواصل معنا.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a
                      href="tel:+966507067378"
                      className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                    >
                      <Phone className="w-6 h-6" />
                      اتصل بنا الآن
                    </a>
                    <a
                      href="https://wa.me/966507067378"
                      className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#25D366]/90 transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
                    >
                      <Mail className="w-6 h-6" />
                      محادثة واتساب
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
