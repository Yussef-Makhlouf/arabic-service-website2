"use client"

import { BookOpen, Thermometer, FileText, Building2, CheckCircle } from "lucide-react"

export function InsulationBasicsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        معلومات أساسية
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        المبادئ الأساسية لعزل المباني
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        تعرف على مفهوم العزل وأنواعه المختلفة وأهميته في الحفاظ على المباني في البيئة السعودية
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Definition Card */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                            <h3 className="text-xl font-bold">ماهية العزل وتصنيفاته الرئيسية</h3>
                        </div>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                يشير مصطلح <strong className="text-foreground">العزل في قطاع البناء</strong> إلى منظومة الحماية التي تفصل بين البيئة الداخلية للمبنى والعوامل الخارجية. تتنوع أنظمة العزل لتشمل: <strong className="text-primary">العزل الحراري</strong> الذي يحد من تبادل الحرارة، و<strong className="text-primary">العزل المائي</strong> الذي يصد تسرب الرطوبة والمياه، إضافة إلى <strong className="text-primary">العزل الصوتي</strong> الذي يخفف من انتقال الأصوات.
                            </p>
                            <p>
                                تكتسب أنظمة العزل أهمية بالغة في المناطق ذات المناخ الحار كالمملكة العربية السعودية، حيث تساهم في خلق بيئة معيشية مريحة وتقلل من الاعتماد المفرط على أنظمة التبريد.
                            </p>
                        </div>
                    </div>

                    {/* Importance Card */}
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl border border-cyan-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Thermometer className="w-6 h-6 text-cyan-600" />
                            <h3 className="text-xl font-bold text-cyan-900">الحاجة الماسة للعزل في الأجواء الحارة</h3>
                        </div>
                        <div className="space-y-4 text-cyan-800 leading-relaxed">
                            <p>
                                تخلق البيئة الصحراوية تحديات خاصة تجعل من العزل الفعال ضرورة ملحة. التباين الحراري اليومي الكبير يُحدث إجهاداً متواصلاً على مكونات المبنى، مما يستدعي حماية فورية.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>موجات حر صيفية تتخطى الـ 48 درجة مئوية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>تعرض مستمر للإشعاع الشمسي القوي</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>هطول أمطار مفاجئة وغزيرة في مواسم محددة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>رياح محملة بالأتربة والرمال الناعمة</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Standards and Impact Row */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Saudi Standards Card */}
                    <div className="bg-blue-50 rounded-2xl border border-blue-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl font-bold text-blue-900">الإطار التنظيمي للعزل في المملكة</h3>
                        </div>
                        <p className="text-blue-800 leading-relaxed mb-6">
                            وضعت الجهات المختصة في المملكة منظومة متكاملة من اللوائح والمواصفات التي تحكم تطبيق العزل في المنشآت، تتضمن:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <span className="text-blue-600 font-bold text-sm">اشتراطات البناء</span>
                                <span className="text-blue-800 text-sm">إلزامية العزل الحراري للمباني الجديدة</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <span className="text-blue-600 font-bold text-sm">معايير المواد</span>
                                <span className="text-blue-800 text-sm">مواصفات فنية للمنتجات العازلة</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <span className="text-blue-600 font-bold text-sm">ضوابط التنفيذ</span>
                                <span className="text-blue-800 text-sm">آليات التطبيق والرقابة الميدانية</span>
                            </div>
                        </div>
                    </div>

                    {/* Impact Card */}
                    <div className="bg-green-50 rounded-2xl border border-green-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl font-bold text-green-900">الأثر الإيجابي للعزل على المبنى</h3>
                        </div>
                        <p className="text-green-800 leading-relaxed mb-6">
                            لا تقتصر فوائد العزل على ترشيد الطاقة، بل تمتد لتشمل حماية البنية التحتية للمبنى وتحسين البيئة الداخلية:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">45%</div>
                                <div className="text-sm text-green-800">خفض تكلفة التبريد</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">30%</div>
                                <div className="text-sm text-green-800">إطالة العمر الإنشائي</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">35%</div>
                                <div className="text-sm text-green-800">تحسين الراحة الحرارية</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">90%</div>
                                <div className="text-sm text-green-800">وقاية من تسرب المياه</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mt-12 bg-primary rounded-2xl p-8 text-center text-primary-foreground">
                    <h3 className="text-xl font-bold mb-3 text-white">هل تحتاج مساعدة في تحديد نوع العزل الملائم؟</h3>
                    <p className="text-primary-foreground/80 mb-6">نوفر استشارات فنية مجانية لتقييم احتياجات مبناك</p>
                    <a
                        href="tel:+966507067378"
                        className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors"
                    >
                        تواصل معنا الآن
                    </a>
                </div>
            </div>
        </section>
    )
}
