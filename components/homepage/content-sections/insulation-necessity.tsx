"use client"

import { Sun, Thermometer, Zap, Settings, Shield, Award, Clock } from "lucide-react"

export function InsulationNecessitySection() {
    return (
        <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Hero Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-6 leading-tight">
                        شركة عزل اسطح بالرياض والخرج:
                        <span className="block text-secondary mt-2">الحل الهندسي المتكامل لحماية مبناك وضمان 15 سنة</span>
                    </h2>
                </div>

                {/* Main Content Block */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-secondary">
                        الدليل الشامل للعزل: لماذا يُعد العزل الحراري والمائي ضرورة قصوى في الرياض والخرج؟
                    </h3>
                    <p className="text-lg leading-relaxed text-white/90 mb-8">
                        إن المناخ القاسي في المملكة العربية السعودية، الذي يتميز بدرجات حرارة صيفية تتجاوز الـ 50 درجة مئوية وأمطار شتوية قد تؤدي إلى تسربات مدمرة، يجعل من <strong className="text-secondary">العزل الحراري والمائي</strong> استثماراً حتمياً وليس مجرد خيار. نحن في <strong className="text-secondary">شركة العزل المتقدم</strong> نؤمن بأن العزل الفعّال هو خط الدفاع الأول عن سلامة المبنى واستدامة موارده.
                    </p>
                    <p className="text-lg leading-relaxed text-white/90">
                        تهدف شركتنا إلى تقديم خدمات <strong className="text-secondary">الأهمية القصوى لخدمات عزل الأسطح بالرياض والخرج</strong> وكيف يمكنها أن تُحدث فرقاً جذرياً في جودة حياتكم وكفاءة استهلاك الطاقة.
                    </p>
                </div>

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl text-white font-bold">
                        1. المقدمة الموسعة: العزل كاستثمار استراتيجي في مواجهة مناخ المملكة
                    </h3>
                </div>

                {/* Expanded Introduction */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
                    <p className="text-lg leading-loose text-white/90 mb-6">
                        إن قرار عزل المبنى في المملكة العربية السعودية، وتحديداً في مدن ذات مناخ قاسٍ مثل <strong className="text-secondary">الرياض والخرج</strong>، يتجاوز كونه مجرد إجراء صيانة ليصبح <strong className="text-secondary">استثماراً استراتيجياً</strong> في استدامة العقار وكفاءة الطاقة. نحن في <strong className="text-secondary">شركة العزل المتقدم</strong> بخبرة تزيد عن 15 عاماً، ندرك تماماً التحديات المناخية التي تواجه الهياكل الإنشائية: من درجات الحرارة التي تتجاوز الـ 50 درجة مئوية صيفاً إلى التقلبات الجوية التي تسبب تسربات مياه مدمرة. لذا، نقدم حلول <strong className="text-secondary">عزل فوم بالرياض وعزل مائي</strong> متكاملة، مصممة خصيصاً لتحمل هذه الظروف القاسية.
                    </p>
                </div>

                {/* Three Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Sun className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">تحديات المناخ السعودي</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                            تفصيل تأثير الحرارة والرطوبة على المباني الخرسانية وقدرة عوازلنا على التصدي لها بكفاءة عالية.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">الالتزام بالمعايير</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                            التأكيد على الاعتماد من الهيئة السعودية للمهندسين وشهادات الجودة (SASO) في جميع المواد المستخدمة.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Award className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">وعد الشركة</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                            خبرة تتجاوز 15 عاماً وضمان شامل يصل إلى 15 سنة على جميع أعمال العزل المائي والحراري.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
