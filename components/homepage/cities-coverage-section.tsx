"use client"

import { MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CitiesCoverageSection() {
  const [activeRegion, setActiveRegion] = useState<string>("north")

  const regions = {
    north: {
      name: "شمال الرياض",
      cities: [
        { name: "حي الملقا", response: "خدمة فورية", unique: "متخصصون في الفلل الحديثة" },
        { name: "حي الياسمين", response: "30 دقيقة", unique: "خبرة في المجمعات السكنية" },
        { name: "حي النرجس", response: "خدمة فورية", unique: "فريق مخصص للأحياء الراقية" },
        { name: "حي الصحافة", response: "45 دقيقة", unique: "خبرة في المباني التجارية" },
        { name: "حي النخيل", response: "خدمة فورية", unique: "متخصصون في العقارات الكبيرة" },
        { name: "حي العارض", response: "30 دقيقة", unique: "خدمات طوارئ على مدار الساعة" },
        { name: "حي الربوة", response: "خدمة فورية", unique: "فريق متخصص في الفلل" },
        { name: "حي المعذر", response: "40 دقيقة", unique: "خبرة في المباني القديمة" },
        { name: "حي الورود", response: "خدمة فورية", unique: "خدمة سريعة للطوارئ" },
        { name: "حي الروضة", response: "35 دقيقة", unique: "متخصصون في الأسطح المعقدة" },
        { name: "حي الملك فهد", response: "خدمة فورية", unique: "خبرة 15+ سنة في المنطقة" },
        { name: "حي الغدير", response: "30 دقيقة", unique: "فريق احترافي معتمد" },
        { name: "حي الندى", response: "خدمة فورية", unique: "ضمان شامل لجميع الأعمال" },
        { name: "حي الريان", response: "45 دقيقة", unique: "خبرة في العزل الحراري" },
        { name: "حي الصفا", response: "خدمة فورية", unique: "متخصصون في كشف التسربات" },
        { name: "حي المروج", response: "35 دقيقة", unique: "خدمات شاملة للمجمعات" },
        { name: "حي المحمدية", response: "خدمة فورية", unique: "فريق متخصص في العزل المائي" },
        { name: "حي الرحمانية", response: "40 دقيقة", unique: "خبرة في المباني الحديثة" },
        { name: "حي قرطبة", response: "خدمة فورية", unique: "أسعار تنافسية وجودة عالية" },
        { name: "حي الفلاح", response: "30 دقيقة", unique: "ضمان مكتوب لـ 10 سنوات" },
        { name: "حي الوادي", response: "خدمة فورية", unique: "خدمة عملاء ممتازة" },
        { name: "حي الرمال", response: "45 دقيقة", unique: "فريق فني محترف" },
        { name: "حي الشفا", response: "خدمة فورية", unique: "استشارة مجانية قبل البدء" },
        { name: "حي المغرزات", response: "35 دقيقة", unique: "خبرة في جميع أنواع العزل" },
        { name: "حي الرائد", response: "خدمة فورية", unique: "تقنيات حديثة ومتطورة" },
        { name: "حي العقيق", response: "30 دقيقة", unique: "متخصصون في عزل الخزانات" },
        { name: "حي الياقوت", response: "خدمة فورية", unique: "فريق معتمد من البلدية" },
        { name: "حي الزمرد", response: "40 دقيقة", unique: "خدمات صيانة دورية" },
        { name: "حي اللؤلؤ", response: "خدمة فورية", unique: "ضمان الجودة والأداء" },
        { name: "حي المرجان", response: "35 دقيقة", unique: "خبرة في العزل الحراري والمائي" },
      ],
    },
    south: {
      name: "جنوب الرياض",
      cities: [
        { name: "حي العزيزية", response: "خدمة فورية", unique: "متخصصون في المباني السكنية" },
        { name: "حي النسيم", response: "30 دقيقة", unique: "خبرة في الفلل والقصور" },
        { name: "حي السلام", response: "خدمة فورية", unique: "فريق مخصص للعمائر" },
        { name: "حي الدار البيضاء", response: "40 دقيقة", unique: "خدمات طوارئ متاحة دائماً" },
        { name: "حي طويق", response: "خدمة فورية", unique: "خبرة في المباني التجارية" },
        { name: "حي الشميسي", response: "35 دقيقة", unique: "متخصصون في كشف التسربات" },
        { name: "حي عتيقة", response: "خدمة فورية", unique: "فريق احترافي معتمد" },
        { name: "حي منفوحة", response: "45 دقيقة", unique: "خبرة في المباني القديمة" },
        { name: "حي الدرعية", response: "خدمة فورية", unique: "ضمان شامل 10 سنوات" },
        { name: "حي البديعة", response: "30 دقيقة", unique: "أحدث تقنيات العزل" },
        { name: "حي الديرة", response: "خدمة فورية", unique: "خبرة في المباني التراثية" },
        { name: "حي الوسطى", response: "40 دقيقة", unique: "خدمة سريعة ومضمونة" },
        { name: "حي الفيصلية", response: "خدمة فورية", unique: "متخصصون في العزل الحراري" },
        { name: "حي الشفاء", response: "35 دقيقة", unique: "فريق خبرة 15+ سنة" },
        { name: "حي الموسى", response: "خدمة فورية", unique: "أسعار منافسة وجودة عالية" },
        { name: "حي الجنادرية", response: "45 دقيقة", unique: "خبرة في جميع أنواع الأسطح" },
        { name: "حي العريجاء", response: "خدمة فورية", unique: "ضمان مكتوب وموثق" },
        { name: "حي الحائر", response: "30 دقيقة", unique: "متخصصون في عزل المصانع" },
        { name: "حي الفاخرية", response: "خدمة فورية", unique: "خدمات صيانة دورية" },
        { name: "حي جبرة", response: "40 دقيقة", unique: "فريق مدرب ومعتمد" },
        { name: "حي الخالدية", response: "خدمة فورية", unique: "خبرة في المباني الحديثة" },
        { name: "حي الدوبية", response: "35 دقيقة", unique: "استشارة فنية مجانية" },
        { name: "حي المربع", response: "خدمة فورية", unique: "تقنيات عزل متطورة" },
        { name: "حي المصانع", response: "45 دقيقة", unique: "خبرة في العزل الصناعي" },
        { name: "حي الصناعية", response: "خدمة فورية", unique: "حلول عزل شاملة" },
        { name: "حي السلي", response: "30 دقيقة", unique: "خدمة احترافية سريعة" },
        { name: "حي الوشام", response: "خدمة فورية", unique: "فريق متخصص في الفلل" },
        { name: "حي اليمامة", response: "40 دقيقة", unique: "ضمان الجودة والأداء" },
        { name: "حي الهدا", response: "خدمة فورية", unique: "خبرة في العزل المائي" },
        { name: "حي الشرق", response: "35 دقيقة", unique: "خدمات طوارئ 24/7" },
      ],
    },
    east: {
      name: "شرق الرياض",
      cities: [
        { name: "حي الروابي", response: "خدمة فورية", unique: "متخصصون في المجمعات الحديثة" },
        { name: "حي الريحان", response: "30 دقيقة", unique: "خبرة في الفلل الفاخرة" },
        { name: "حي الواحة", response: "خدمة فورية", unique: "فريق مخصص للعمائر" },
        { name: "حي المونسية", response: "40 دقيقة", unique: "خدمات شاملة متكاملة" },
        { name: "حي الخزامى", response: "خدمة فورية", unique: "خبرة في العزل الحراري" },
        { name: "حي الروضة", response: "35 دقيقة", unique: "متخصصون في كشف التسربات" },
        { name: "حي النزهة", response: "خدمة فورية", unique: "ضمان 10 سنوات مكتوب" },
        { name: "حي المرسلات", response: "45 دقيقة", unique: "فريق احترافي معتمد" },
        { name: "حي الفاروق", response: "خدمة فورية", unique: "خبرة في المباني التجارية" },
        { name: "حي الواحة", response: "30 دقيقة", unique: "أسعار تنافسية" },
        { name: "حي الحمراء", response: "خدمة فورية", unique: "تقنيات عزل حديثة" },
        { name: "حي الروابي", response: "40 دقيقة", unique: "خدمة سريعة مضمونة" },
        { name: "حي الخليج", response: "خدمة فورية", unique: "متخصصون في العزل المائي" },
        { name: "حي الفيحاء", response: "35 دقيقة", unique: "فريق خبرة واسعة" },
        { name: "حي الناصرية", response: "خدمة فورية", unique: "ضمان شامل لجميع الخدمات" },
        { name: "حي الإسكان", response: "45 دقيقة", unique: "خبرة في المشاريع الكبرى" },
        { name: "حي المنار", response: "خدمة فورية", unique: "استشارة فنية مجانية" },
        { name: "حي النور", response: "30 دقيقة", unique: "خدمات صيانة دورية" },
        { name: "حي السعادة", response: "خدمة فورية", unique: "فريق مدرب ومؤهل" },
        { name: "حي الأمل", response: "40 دقيقة", unique: "تقنيات متطورة" },
        { name: "حي الفردوس", response: "خدمة فورية", unique: "خبرة في جميع أنواع العزل" },
        { name: "حي الجنة", response: "35 دقيقة", unique: "ضمان الجودة والأمان" },
        { name: "حي البستان", response: "خدمة فورية", unique: "خدمة احترافية متميزة" },
        { name: "حي الربيع", response: "45 دقيقة", unique: "متخصصون في الفلل" },
        { name: "حي الأمير فيصل", response: "خدمة فورية", unique: "حلول عزل شاملة" },
        { name: "حي السفارات", response: "30 دقيقة", unique: "خبرة في المباني الراقية" },
        { name: "حي المطار", response: "خدمة فورية", unique: "خدمة سريعة للطوارئ" },
        { name: "حي الصالحية", response: "40 دقيقة", unique: "فريق متخصص معتمد" },
        { name: "حي المصيف", response: "خدمة فورية", unique: "أحدث تقنيات العزل" },
        { name: "حي الأندلس", response: "35 دقيقة", unique: "ضمان مكتوب 10 سنوات" },
      ],
    },
    west: {
      name: "غرب الرياض",
      cities: [
        { name: "حي الشفا", response: "خدمة فورية", unique: "متخصصون في المجمعات السكنية" },
        { name: "حي المنصورة", response: "30 دقيقة", unique: "خبرة في الفلل الحديثة" },
        { name: "حي الصفا", response: "خدمة فورية", unique: "فريق احترافي معتمد" },
        { name: "حي الربيع", response: "40 دقيقة", unique: "خدمات طوارئ متاحة" },
        { name: "حي العليا", response: "خدمة فورية", unique: "خبرة في المباني التجارية" },
        { name: "حي السليمانية", response: "35 دقيقة", unique: "متخصصون في العزل الحراري" },
        { name: "حي العود", response: "خدمة فورية", unique: "ضمان شامل 10 سنوات" },
        { name: "حي الفيصلية", response: "45 دقيقة", unique: "فريق خبرة واسعة" },
        { name: "حي المربع", response: "خدمة فورية", unique: "تقنيات عزل متطورة" },
        { name: "حي الوزارات", response: "30 دقيقة", unique: "خدمة سريعة مضمونة" },
        { name: "حي الملز", response: "خدمة فورية", unique: "خبرة في المباني القديمة" },
        { name: "حي البطحاء", response: "40 دقيقة", unique: "أسعار تنافسية" },
        { name: "حي الديرة", response: "خدمة فورية", unique: "متخصصون في كشف التسربات" },
        { name: "حي منفوحة الجديدة", response: "35 دقيقة", unique: "استشارة فنية مجانية" },
        { name: "حي الشميسي", response: "خدمة فورية", unique: "خدمات صيانة دورية" },
        { name: "حي المنصورية", response: "45 دقيقة", unique: "فريق مدرب ومعتمد" },
        { name: "حي النموذجية", response: "خدمة فورية", unique: "ضمان الجودة والأداء" },
        { name: "حي غرناطة", response: "30 دقيقة", unique: "خبرة في الفلل الفاخرة" },
        { name: "حي الرفيعة", response: "خدمة فورية", unique: "حلول عزل متكاملة" },
        { name: "حي الزهراء", response: "40 دقيقة", unique: "تقنيات حديثة ومتطورة" },
        { name: "حي طيبة", response: "خدمة فورية", unique: "خدمة احترافية متميزة" },
        { name: "حي الجرادية", response: "35 دقيقة", unique: "متخصصون في العزل المائي" },
        { name: "حي جرير", response: "خدمة فورية", unique: "فريق خبرة 15+ سنة" },
        { name: "حي الفوطة", response: "45 دقيقة", unique: "خبرة في جميع أنواع الأسطح" },
        { name: "حي القدس", response: "خدمة فورية", unique: "ضمان مكتوب موثق" },
        { name: "حي الصحافة", response: "30 دقيقة", unique: "خدمة سريعة للطوارئ" },
        { name: "حي الإزدهار", response: "خدمة فورية", unique: "أحدث تقنيات العزل" },
        { name: "حي النهضة", response: "40 دقيقة", unique: "متخصصون في المجمعات" },
        { name: "حي التعاون", response: "خدمة فورية", unique: "فريق متخصص محترف" },
        { name: "حي الروابي", response: "35 دقيقة", unique: "خبرة واسعة مضمونة" },
      ],
    },
    central: {
      name: "وسط الرياض",
      cities: [
        { name: "حي العليا", response: "خدمة فورية", unique: "متخصصون في الأبراج التجارية" },
        { name: "حي السليمانية", response: "30 دقيقة", unique: "خبرة في المباني الإدارية" },
        { name: "حي المربع", response: "خدمة فورية", unique: "فريق معتمد للمشاريع الحكومية" },
        { name: "حي الملز", response: "40 دقيقة", unique: "خدمات طوارئ 24/7" },
        { name: "حي الفيصلية", response: "خدمة فورية", unique: "خبرة في الفنادق والمنتجعات" },
        { name: "حي العود", response: "35 دقيقة", unique: "متخصصون في المباني التراثية" },
        { name: "حي البطحاء", response: "خدمة فورية", unique: "ضمان شامل 10 سنوات" },
        { name: "حي الديرة", response: "45 دقيقة", unique: "فريق خبرة واسعة" },
        { name: "حي الفوطة", response: "خدمة فورية", unique: "تقنيات عزل متطورة" },
        { name: "حي جرير", response: "30 دقيقة", unique: "خدمة سريعة مضمونة" },
        { name: "حي الشميسي", response: "خدمة فورية", unique: "أسعار تنافسية" },
        { name: "حي منفوحة", response: "40 دقيقة", unique: "خبرة في المراكز التجارية" },
        { name: "حي الوزارات", response: "خدمة فورية", unique: "متخصصون في المباني الحكومية" },
        { name: "حي المنصورة", response: "35 دقيقة", unique: "استشارة فنية مجانية" },
        { name: "حي النموذجية", response: "خدمة فورية", unique: "خدمات صيانة دورية" },
        { name: "حي الصالحية", response: "45 دقيقة", unique: "فريق مدرب ومعتمد" },
        { name: "حي المطار", response: "خدمة فورية", unique: "ضمان الجودة والأداء" },
        { name: "حي الصفا", response: "30 دقيقة", unique: "خبرة في المباني الراقية" },
        { name: "حي الربيع", response: "خدمة فورية", unique: "حلول عزل شاملة" },
        { name: "حي العزيزية", response: "40 دقيقة", unique: "تقنيات حديثة متطورة" },
        { name: "حي النسيم", response: "خدمة فورية", unique: "خدمة احترافية متميزة" },
        { name: "حي السلام", response: "35 دقيقة", unique: "متخصصون في العزل الحراري" },
        { name: "حي الفلاح", response: "خدمة فورية", unique: "فريق خبرة 15+ سنة" },
        { name: "حي الجرادية", response: "45 دقيقة", unique: "خبرة في جميع أنواع العزل" },
        { name: "حي المنصورية", response: "خدمة فورية", unique: "ضمان مكتوب موثق" },
        { name: "حي الخالدية", response: "30 دقيقة", unique: "خدمة سريعة للطوارئ" },
        { name: "حي القدس", response: "خدمة فورية", unique: "أحدث تقنيات العزل" },
        { name: "حي النزهة", response: "40 دقيقة", unique: "متخصصون في المجمعات" },
        { name: "حي المروج", response: "خدمة فورية", unique: "فريق متخصص محترف" },
        { name: "حي الفاخرية", response: "35 دقيقة", unique: "خبرة واسعة ومضمونة" },
      ],
    },
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            نخدم أكثر من 150 حي في الرياض
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            تغطية شاملة لجميع أحياء الرياض
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            خدماتنا متاحة في كل أنحاء الرياض مع فرق متخصصة لكل منطقة - استجابة سريعة وخدمة احترافية مضمونة
          </p>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(regions).map(([key, region]) => (
            <button
              key={key}
              onClick={() => setActiveRegion(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeRegion === key
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background border-2 border-border hover:border-primary/50"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {regions[activeRegion as keyof typeof regions].cities.map((city, index) => (
            <div
              key={index}
              className="group p-4 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-2 flex-1">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{city.name}</h3>
                    <p className="text-sm text-muted-foreground">{city.unique}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                <Clock className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">{city.response}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">لم تجد حيك في القائمة؟</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            نخدم جميع أحياء الرياض والمناطق المحيطة - اتصل بنا الآن للتأكد من توفر الخدمة في منطقتك
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              اتصل للاستفسار
            </Button>
            <Button size="lg" variant="outline">
              استشارة مجانية
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
