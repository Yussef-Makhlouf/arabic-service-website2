import { Shield, Award, CheckCircle, Clock, ThumbsUp, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TrustSection() {
  const trustFactors = [
    {
      icon: Shield,
      title: "ضمان شامل",
      description: "نقدم ضماناً يصل إلى 10 سنوات على جميع أعمال العزل مع خدمة فحص دورية مجانية",
    },
    {
      icon: Award,
      title: "اعتماد رسمي",
      description: "معتمدون من الهيئة السعودية للمهندسين ونلتزم بجميع المعايير والمواصفات السعودية",
    },
    {
      icon: CheckCircle,
      title: "جودة مضمونة",
      description: "نستخدم فقط مواد عزل معتمدة عالمياً وأثبتت فعاليتها في البيئة السعودية",
    },
    {
      icon: Clock,
      title: "التزام بالمواعيد",
      description: "نحترم وقت عملائنا ونلتزم بمواعيد التسليم المحددة دون تأخير",
    },
    {
      icon: ThumbsUp,
      title: "+5000 عميل راضٍ",
      description: "آلاف العملاء في الرياض والخرج يثقون بخدماتنا ويشهدون على جودة أعمالنا",
    },
    {
      icon: FileCheck,
      title: "استشارة مجانية",
      description: "نقدم استشارة فنية مجانية وكشف على الموقع لتحديد أفضل الحلول المناسبة",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">لماذا تثق بنا؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نبني علاقات طويلة الأمد مع عملائنا من خلال الالتزام بالجودة والشفافية والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((factor) => (
            <Card key={factor.title} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="bg-primary/10 text-primary inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4">
                  <factor.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{factor.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Coverage */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-8 pb-8">
              <h3 className="font-heading text-2xl font-bold mb-4">اعتمادات وشهادات</h3>
              <ul className="space-y-3">
                {[
                  "معتمد من الهيئة السعودية للمهندسين",
                  "مطابق للمواصفات السعودية SASO",
                  "شهادات جودة ISO 9001",
                  "مواد معتمدة من منظمة الصحة العالمية",
                  "تراخيص نشاط سارية المفعول",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardContent className="pt-8 pb-8">
              <h3 className="font-heading text-2xl font-bold mb-4">تغطية شاملة</h3>
              <p className="mb-4 leading-relaxed">نخدم جميع مناطق الرياض والخرج بفريق متخصص ومتاح على مدار الساعة:</p>
              <ul className="space-y-3">
                {[
                  "شمال الرياض وحي النرجس والعليا",
                  "جنوب الرياض والعزيزية",
                  "شرق الرياض والملز والروضة",
                  "غرب الرياض والشفا",
                  "الخرج وجميع المناطق المحيطة",
                  "خدمة طوارئ 24 ساعة",
                ].map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
