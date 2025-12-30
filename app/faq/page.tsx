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
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 border-b">
          <div className="container px-4 mx-0">
            <div className="max-w-3xl mx-auto text-center space-y-6 ">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-base px-4 py-2">
                مركز المساعدة
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">الأسئلة الشائعة حول خدمات العزل</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                دليلك الشامل للإجابة على جميع أسئلتك حول العزل المائي والحراري، كشف التسربات، وعزل الخزانات في الرياض.
                خبرة 15 عاماً في خدمتك.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category: any, categoryIndex: number) => (
                <div key={category._id || categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b-2 border-primary/20">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions
                      .filter((item: any) => item.isActive !== false)
                      .map((item: any, itemIndex: number) => (
                        <AccordionItem
                          key={item._id || itemIndex}
                          value={`item-${categoryIndex}-${itemIndex}`}
                          className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                            <div className="flex items-start gap-3 text-right">
                              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span className="font-semibold text-lg leading-relaxed">{item.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-2">
                            <div className="pr-8 text-muted-foreground text-base leading-relaxed">{item.answer}</div>
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
        <section className="py-16 border-t bg-accent/30">
          <div className="container px-4">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">لم تجد إجابة لسؤالك؟</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  فريقنا المتخصص جاهز للإجابة على جميع استفساراتك وتقديم استشارات مجانية حول احتياجاتك الخاصة
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="tel:+966507067378"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل بنا الآن
                  </a>
                  <a
                    href="https://wa.me/966507067378"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#25D366]/90 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    واتساب
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
