import { Award, Shield, CheckCircle } from "lucide-react"

export function AuthorityProofSection() {
  const timeline = [
    { year: "2008", event: "تأسيس الشركة في الرياض", icon: "🏢" },
    { year: "2012", event: "الحصول على الاعتماد من البلدية", icon: "📜" },
    { year: "2016", event: "تجاوز 1000+ مشروع ناجح", icon: "🎯" },
    { year: "2020", event: "إطلاق قسم الطوارئ 24/7", icon: "⚡" },
    { year: "2024", event: "أكثر من 5000+ عميل راض", icon: "⭐" },
  ]

  const certifications = [
    {
      title: "ترخيص البلدية",
      description: "شركة مرخصة بالكامل من أمانة منطقة الرياض",
      verified: true,
    },
    {
      title: "اعتماد الجودة",
      description: "معايير الجودة الدولية في جميع مشاريعنا",
      verified: true,
    },
    {
      title: "تأمين شامل",
      description: "جميع أعمالنا مؤمنة ضد أي أضرار",
      verified: true,
    },
    {
      title: "عمالة معتمدة",
      description: "فريق عمل مدرب ومعتمد من الهيئات المختصة",
      verified: true,
    },
  ]

  const projectTypes = [
    { type: "فلل سكنية", count: "2000+", icon: "🏠" },
    { type: "عمائر ومجمعات", count: "800+", icon: "🏢" },
    { type: "مباني تجارية", count: "500+", icon: "🏪" },
    { type: "مساجد ومرافق عامة", count: "300+", icon: "🕌" },
    { type: "مصانع ومستودعات", count: "400+", icon: "🏭" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            خبرة ومصداقية
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            لماذا يثق بنا آلاف العملاء؟
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            أكثر من 15 عاماً من الخبرة المثبتة في عزل وحماية المباني
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">رحلتنا من البداية حتى اليوم</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:block absolute right-1/2 transform translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                    <div className="p-6 bg-muted/50 rounded-xl border border-border hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="md:hidden text-2xl">{item.icon}</span>
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                      </div>
                      <p className="text-foreground font-semibold">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">الاعتمادات والشهادات</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                {cert.verified && (
                  <div className="flex items-center justify-center gap-1 text-success text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>موثق ومعتمد</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">أنواع المشاريع التي نفذناها</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-muted/50 rounded-xl border border-border text-center hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-3">{project.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{project.count}</div>
                <p className="text-sm font-medium text-foreground">{project.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Explanation */}
        <div className="max-w-4xl mx-auto p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">ضمان شامل يحميك لسنوات</h3>
              <div className="space-y-3 text-foreground leading-relaxed">
                <p>
                  <strong>ضمان 15 سنه</strong> على جميع أعمال العزل المائي
                </p>
                <p>
                  <strong>ضمان 15 سنة</strong> على عزل الفوم (البولي يوريثان)
                </p>
                <p>
                  <strong>ضمان مكتوب وموثق</strong> يشمل المواد والتنفيذ
                </p>
                <p>
                  <strong>صيانة دورية مجانية</strong> خلال السنة الأولى
                </p>
                <p className="text-primary font-semibold">
                  إذا حدثت أي مشكلة خلال فترة الضمان، نصلحها فوراً بدون أي تكلفة إضافية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
