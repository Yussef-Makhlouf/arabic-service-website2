import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "ما هي أنواع العزل التي تقدمونها؟",
      answer:
        "نقدم جميع أنواع العزل: العزل المائي باستخدام البيتومين والأغشية العازلة، عزل الفوم (البولي يوريثان) للعزل الحراري والمائي، عزل الخزانات الداخلي والخارجي، بالإضافة إلى خدمة كشف التسربات باستخدام أحدث الأجهزة.",
    },
    {
      question: "كم تستغرق عملية عزل السطح؟",
      answer:
        "تختلف المدة حسب نوع العزل ومساحة السطح. عادة، عزل الفوم يستغرق يوماً واحداً للأسطح المتوسطة، والعزل المائي من 2-3 أيام. نلتزم بجدول زمني واضح ونخبر العميل بالمدة بدقة بعد المعاينة.",
    },
    {
      question: "هل تقدمون ضماناً على أعمال العزل؟",
      answer:
        "نعم، نقدم ضماناً شاملاً على جميع أعمال العزل يتراوح بين 8 إلى 10 سنوات حسب نوع العزل. الضمان يشمل جودة المواد والتنفيذ. كما نوفر خدمة فحص دوري مجانية خلال فترة الضمان للتأكد من كفاءة العزل.",
    },
    {
      question: "ما هي تكلفة عزل السطح؟",
      answer:
        "تختلف التكلفة حسب عدة عوامل: نوع العزل المختار، مساحة السطح، حالة السطح الحالية، وموقع العقار. نقدم استشارة مجانية وكشف على الموقع لتقديم عرض سعر دقيق ومفصل. أسعارنا تنافسية مع ضمان أعلى جودة.",
    },
    {
      question: "هل المواد المستخدمة آمنة وصحية؟",
      answer:
        "نستخدم فقط مواد عزل معتمدة من الهيئات الدولية والسعودية. جميع المواد آمنة صحياً وصديقة للبيئة. مواد عزل الخزانات خاصة معتمدة من منظمة الصحة العالمية وهيئة الغذاء والدواء السعودية ولا تؤثر على خواص المياه.",
    },
    {
      question: "كيف يمكنني معرفة أن هناك تسرباً في المبنى؟",
      answer:
        "علامات التسرب تشمل: ارتفاع غير مبرر في فاتورة المياه، ظهور بقع رطوبة أو تشققات في الجدران والأسقف، رائحة عفن أو فطريات، سماع صوت مياه جارية داخل الجدران، أو ظهور تشوهات في الدهانات. إذا لاحظت أي من هذه العلامات، تواصل معنا فوراً للفحص.",
    },
    {
      question: "هل تقدمون خدمات الصيانة الدورية؟",
      answer:
        "نعم، نقدم خدمة صيانة دورية شاملة تتضمن فحص حالة العزل، تنظيف الأسطح، معالجة أي تشققات صغيرة، وتنظيف وتعقيم الخزانات. يمكن للعملاء الاشتراك في برنامج الصيانة السنوي بأسعار مخفضة.",
    },
    {
      question: "هل تخدمون جميع مناطق الرياض؟",
      answer:
        "نعم، نقدم خدماتنا في جميع أنحاء الرياض بما في ذلك شمال الرياض، جنوب الرياض، شرق وغرب الرياض، بالإضافة إلى الخرج والمناطق المحيطة. لدينا فرق عمل متعددة لضمان سرعة الاستجابة في جميع المناطق.",
    },
  ]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات العزل والتسربات
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-right font-heading text-lg font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">لديك المزيد من الأسئلة؟ تصفح صفحة الأسئلة الشائعة الكاملة</p>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
              <Link href="/faq">
                عرض جميع الأسئلة
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
