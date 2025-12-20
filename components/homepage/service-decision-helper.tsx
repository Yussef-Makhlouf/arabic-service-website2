"use client"

import { useState } from "react"
import { Check, ArrowRight, Home, Droplet, DollarSign, MessageCircle, Sparkles, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServiceDecisionHelper() {
  const [step, setStep] = useState(1)
  const [selections, setSelections] = useState({
    roofType: "",
    problem: "",
    budget: "",
  })
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const roofTypes = [
    { id: "flat", label: "سطح مستوي خرساني", icon: <Home className="w-8 h-8" />, desc: "الأسطح التقليدية للمباني السكنية والتجارية" },
    { id: "sloped", label: "سطح مائل (جمالون)", icon: <Home className="w-8 h-8" />, desc: "الأسطح المائلة المغطاة بالقرميد أو المعدن" },
    { id: "metal", label: "سطح معدني (شينكو)", icon: <Home className="w-8 h-8" />, desc: "المستودعات والهناجر والأسطح المعدنية" },
    { id: "mixed", label: "سطح مختلط", icon: <Home className="w-8 h-8" />, desc: "يحتوي على تمديدات وتكييفات وأجزاء مختلفة" },
  ]

  const problems = [
    { id: "leak", label: "تسريب مياه حالي", icon: <Droplet className="w-8 h-8" />, urgent: true, desc: "ظهور بقع مياه أو رطوبة في السقف" },
    { id: "heat", label: "ارتفاع درجة الحرارة", icon: <Sparkles className="w-8 h-8" />, urgent: false, desc: "الحرارة تخترق السقف وتزيد استهلاك المكيف" },
    { id: "prevention", label: "عزل وقائي (جديد)", icon: <ShieldCheck className="w-8 h-8" />, urgent: false, desc: "حماية المبنى الجديد قبل السكن" },
    { id: "old", label: "تجديد عزل قديم", icon: <Clock className="w-8 h-8" />, urgent: false, desc: "العزل الحالي متهالك أو غير فعال" },
  ]

  const budgets = [
    { id: "economic", label: "اقتصادي", range: "50-100 ريال/م²", icon: <DollarSign className="w-8 h-8" />, desc: "أفضل قيمة مقابل سعر للحماية الأساسية" },
    { id: "standard", label: "قياسي", range: "100-150 ريال/م²", icon: <DollarSign className="w-8 h-8" />, desc: "توازن مثالي بين الجودة والتكلفة" },
    { id: "premium", label: "ممتاز", range: "150-200+ ريال/م²", icon: <DollarSign className="w-8 h-8" />, desc: "أعلى مواصفات وضمان طويل الأمد" },
  ]

  const getRecommendation = () => {
    const { problem, budget } = selections

    if (problem === "leak") {
      return {
        service: "عزل مائي فوري بالبيتومين المطور",
        reason: "حالة طارئة تتطلب معالجة سريعة وحاسمة للتسريب لمنع تفاقم الأضرار الإنشائية.",
        features: ["إيقاف فوري للتسريبات", "طبقة حماية مزدوجة", "ضمان 10 سنوات ضد التسريب", "فريق طوارئ للاستجابة السريعة"],
        price: "يبدأ من 80 ريال/م²",
        duration: "1-2 يوم",
      }
    }

    if (problem === "heat" && (budget === "premium" || budget === "standard")) {
      return {
        service: "عزل الفوم (بولي يوريثان) المعتمد",
        reason: "الخيار الهندسي الأمثل لعزل الحرارة والماء معاً في طبقة واحدة متماسكة خفيفة الوزن.",
        features: [
          "يعكس 96% من أشعة الشمس",
          "خفض فاتورة الكهرباء حتى 40%",
          "عزل مائي وحراري مزدوج",
          "معتمد من شركة الكهرباء",
        ],
        price: "من 120 ريال/م²",
        duration: "1-3 أيام",
      }
    }

    if (budget === "economic") {
      return {
        service: "العزل الأسمنتي المقاوم",
        reason: "حل عملي واقتصادي يوفر حماية ممتازة للأسطح الخرسانية ودورات المياه.",
        features: ["تكلفة اقتصادية", "تنفيذ سريع", "مقاوم للرطوبة", "قوة التصاق عالية بالخرسانة"],
        price: "من 45 ريال/م²",
        duration: "1-2 يوم",
      }
    }

    return {
      service: "نظام العزل الشامل (فوم + حماية)",
      reason: "النظام المتكامل لتوفير أقصى درجات الحماية والراحة الحرارية لعمر المبنى بالكامل.",
      features: ["عزل حراري لا يضاهى", "حماية كاملة من الأمطار", "عمر افتراضي يتجاوز 20 سنة", "ضمان ذهبي شامل"],
      price: "حسب المعاينة",
      duration: "2-4 أيام",
    }
  }

  const handleFinish = () => {
    setRecommendation(getRecommendation().service)
    setStep(4)
  }

  const handleWhatsAppClick = () => {
    const rec = getRecommendation()
    const phoneNumber = "966507067378"
    const message = `السلام عليكم، أرغب في الاستفسار عن خدمة *${rec.service}*.\n\nتفاصيل طلبي:\n- نوع السطح: ${roofTypes.find(t => t.id === selections.roofType)?.label}\n- المشكلة: ${problems.find(p => p.id === selections.problem)?.label}\n- الميزانية: ${budgets.find(b => b.id === selections.budget)?.label}\n\nأرجو التواصل معي للتفاصيل.`

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[40%] -left-[10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 hover:bg-primary/20 transition-colors">
            <Sparkles className="w-4 h-4" />
            دليل اختيار العزل الذكي
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            محتار في نوع العزل؟ <span className="text-primary">دعنا نساعدك</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            أجب على 3 أسئلة بسيطة، وسنرشح لك الحل الهندسي الأمثل الذي يضمن لك راحة البال وتوفير المال.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-4 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 rounded-full" />
            <div
              className="absolute top-1/2 right-0 h-1 bg-primary -z-10 rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />

            {[1, 2, 3, 4].map((num) => (
              <div key={num} className={`relative flex flex-col items-center group ${step >= num ? 'text-primary' : 'text-muted-foreground'}`}>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 border-4 ${step >= num
                    ? "bg-background border-primary shadow-lg scale-110"
                    : "bg-background border-muted opacity-80"
                    } ${step > num ? "bg-primary text-primary-foreground border-primary" : ""}`}
                >
                  {step > num ? <Check className="w-6 h-6" /> : num}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-2 text-sm font-medium text-muted-foreground/80">
            <span>نوع السطح</span>
            <span>المشكلة</span>
            <span>الميزانية</span>
            <span>التوصية</span>
          </div>
        </div>

        {/* Decision Steps */}
        <div className="max-w-5xl mx-auto min-h-[400px]">
          {/* Step 1: Roof Type */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-3xl font-bold text-center mb-10">ما هو نوع السطح في منشأتك؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roofTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelections({ ...selections, roofType: type.id })
                      setStep(2)
                    }}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-right flex flex-col items-start gap-4 ${selections.roofType === type.id
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border bg-card hover:border-primary/50"
                      }`}
                  >
                    <div className={`p-4 rounded-xl transition-colors ${selections.roofType === type.id ? "bg-primary text-primary-foreground" : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground"}`}>
                      {type.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold text-foreground mb-2">{type.label}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Problem */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-2">ما هو التحدي الرئيسي؟</h3>
                <p className="text-muted-foreground">ساعدنا نفهم المشكلة لنعطيك الحل الجذري</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {problems.map((problem) => (
                  <button
                    key={problem.id}
                    onClick={() => {
                      setSelections({ ...selections, problem: problem.id })
                      setStep(3)
                    }}
                    className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-right relative overflow-hidden ${selections.problem === problem.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
                      }`}
                  >
                    {problem.urgent && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-destructive/10 text-destructive text-xs rounded-full font-bold flex items-center gap-1 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        عاجل
                      </div>
                    )}
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl shrink-0 transition-colors ${selections.problem === problem.id ? "bg-primary text-primary-foreground" : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground"}`}>
                        {problem.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{problem.label}</h4>
                        <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="ghost" size="lg" onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground">
                  <ArrowRight className="w-4 h-4 ml-2 rotate-180" />
                  خطوة للوراء
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Budget */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-2">ما هي ميزانيتك التقريبية؟</h3>
                <p className="text-muted-foreground">سنرشح لك الأفضل في حدود إمكانياتك</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {budgets.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => {
                      setSelections({ ...selections, budget: budget.id })
                      handleFinish()
                    }}
                    className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center flex flex-col items-center ${selections.budget === budget.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
                      }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${selections.budget === budget.id ? "bg-primary text-primary-foreground" : "bg-muted group-hover:bg-primary group-hover:text-primary-foreground"}`}>
                      {budget.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">{budget.label}</h4>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">{budget.range}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{budget.desc}</p>
                  </button>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="ghost" size="lg" onClick={() => setStep(2)} className="text-muted-foreground hover:text-foreground">
                  <ArrowRight className="w-4 h-4 ml-2 rotate-180" />
                  خطوة للوراء
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Recommendation */}
          {step === 4 && recommendation && (
            <div className="animate-in zoom-in-95 duration-500 max-w-4xl mx-auto">
              <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50">
                <div className="bg-primary/5 p-8 md:p-12 text-center border-b border-border/50">
                  <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-success/5 animate-in zoom-in duration-500 delay-100">
                    <Check className="w-12 h-12 text-success" />
                  </div>
                  <h3 className="text-2xl font-medium text-muted-foreground mb-3">بناءً على اختياراتك، الحل الأمثل هو:</h3>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">{getRecommendation().service}</h2>
                  <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">{getRecommendation().reason}</p>
                </div>

                <div className="p-8 md:p-12 bg-background">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
                    <div className="space-y-4">
                      <h5 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-accent" />
                        مميزات هذا النظام:
                      </h5>
                      <ul className="space-y-3">
                        {getRecommendation().features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 bg-muted/20 p-3 rounded-lg">
                            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/90 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex-1 p-6 bg-muted/30 rounded-2xl border border-muted/50 flex flex-col justify-center">
                        <p className="text-sm text-muted-foreground mb-1">متوسط التكلفة التقديرية</p>
                        <p className="text-3xl font-bold text-foreground">{getRecommendation().price}</p>
                      </div>
                      <div className="flex-1 p-6 bg-muted/30 rounded-2xl border border-muted/50 flex flex-col justify-center">
                        <p className="text-sm text-muted-foreground mb-1">مدة التنفيذ المتوقعة</p>
                        <p className="text-3xl font-bold text-foreground">{getRecommendation().duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      size="xl"
                      className="w-full sm:w-auto min-w-[280px] bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 rounded-xl h-14 text-lg"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-6 h-6 mr-2" />
                      طلب الخدمة واتساب
                    </Button>

                    <Button
                      size="xl"
                      variant="outline"
                      className="w-full sm:w-auto rounded-xl h-14"
                      onClick={() => {
                        setStep(1)
                        setSelections({ roofType: "", problem: "", budget: "" })
                        setRecommendation(null)
                      }}
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      تجربة خيار آخر
                    </Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    * الأسعار والمدة تقريبية وتعتمد على المعاينة الميدانية المجانية
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
