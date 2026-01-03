"use client"

import { BookOpen, Shield, Thermometer, Droplets, Building2, CheckCircle, FileText, Scale } from "lucide-react"

export function InsulationBasicsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        دليل شامل عن العزل
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        فهم أساسيات العزل في البناء
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        دليلك الشامل لفهم أنظمة العزل المختلفة وأهميتها في حماية المباني بالمملكة العربية السعودية
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Definition Card */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                            <h3 className="text-xl font-bold">تعريف العزل وأنواعه الأساسية</h3>
                        </div>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                <strong className="text-foreground">العزل في البناء</strong> هو عملية حماية المبنى من العوامل الخارجية باستخدام مواد متخصصة تمنع انتقال الحرارة والماء والصوت. وينقسم العزل إلى ثلاثة أنواع رئيسية: <strong className="text-primary">العزل الحراري</strong> الذي يمنع انتقال الحرارة بين داخل المبنى وخارجه، <strong className="text-primary">العزل المائي</strong> الذي يحمي المبنى من تسربات المياه والرطوبة، و<strong className="text-primary">العزل الصوتي</strong> الذي يقلل من انتقال الأصوات.
                            </p>
                            <p>
                                في المملكة العربية السعودية، يُعد العزل الحراري والمائي من أهم أولويات البناء نظراً للمناخ الصحراوي الجاف والحار الذي يتميز بدرجات حرارة قد تتجاوز 50 درجة مئوية صيفاً، إضافة إلى الأمطار الموسمية الغزيرة التي قد تسبب تسربات خطيرة.
                            </p>
                        </div>
                    </div>

                    {/* Importance Card */}
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl border border-cyan-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Thermometer className="w-6 h-6 text-cyan-600" />
                            <h3 className="text-xl font-bold text-cyan-900">أهمية العزل في المناخ الصحراوي</h3>
                        </div>
                        <div className="space-y-4 text-cyan-800 leading-relaxed">
                            <p>
                                يواجه المناخ الصحراوي في المملكة تحديات فريدة تجعل العزل ضرورة وليس رفاهية. فإن درجات الحرارة الكبير بين النهار والليل - الذي قد يصل إلى 20 درجة - يُعرّض المباني لإجهاد حراري متكرر يؤدي إلى تشققات وتلف في المواد الإنشائية.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>درجات حرارة صيفية تتجاوز 45-50 درجة مئوية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>أشعة شمس مباشرة وقوية على مدار العام</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>رطوبة عالية في المناطق الساحلية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>أمطار موسمية غزيرة في بعض المناطق</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                                    <span>غبار وعواصف رملية متكررة</span>
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
                            <h3 className="text-xl font-bold text-blue-900">المعايير السعودية لأنظمة العزل</h3>
                        </div>
                        <p className="text-blue-800 leading-relaxed mb-6">
                            أصدرت <strong>هيئة المواصفات والمقاييس السعودية (SASO)</strong> معايير صارمة لأنظمة العزل في المباني، وألزم نظام الشؤون البلدية والقروية جميع المباني الحديثة بتطبيق العزل الحراري منذ عام 2014. تشمل هذه المعايير:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <span className="text-blue-600 font-bold text-sm">SASO 2428</span>
                                <span className="text-blue-800 text-sm">مواصفات مواد العزل الحراري</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <span className="text-blue-600 font-bold text-sm">SASO 2530</span>
                                <span className="text-blue-800 text-sm">متطلبات العزل في المباني السكنية</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                <span className="text-blue-600 font-bold text-sm">كود البناء السعودي</span>
                                <span className="text-blue-800 text-sm">الفصل الخامس - العزل الحراري</span>
                            </div>
                        </div>
                    </div>

                    {/* Impact Card */}
                    <div className="bg-green-50 rounded-2xl border border-green-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl font-bold text-green-900">تأثير العزل على عمر المبنى والراحة</h3>
                        </div>
                        <p className="text-green-800 leading-relaxed mb-6">
                            العزل الجيد لا يقتصر تأثيره على توفير فواتير الطاقة فحسب، بل يمتد ليشمل حماية الهيكل الإنشائي للمبنى وزيادة عمره الافتراضي. المباني المعزولة جيداً تتمتع بمميزات عديدة:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">50%</div>
                                <div className="text-sm text-green-800">توفير في الكهرباء</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">25%</div>
                                <div className="text-sm text-green-800">زيادة في عمر المبنى</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">40%</div>
                                <div className="text-sm text-green-800">راحة حرارية أفضل</div>
                            </div>
                            <div className="bg-white/80 rounded-xl p-4 text-center">
                                <div className="text-3xl font-bold text-green-600 mb-1">80%</div>
                                <div className="text-sm text-green-800">حماية من التسربات</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mt-12 bg-primary rounded-2xl p-8 text-center text-primary-foreground">
                    <h3 className="text-xl font-bold mb-3 text-white">هل تريد معرفة النوع المناسب لمبناك؟</h3>
                    <p className="text-primary-foreground/80 mb-6">تواصل معنا للحصول على استشارة مجانية من خبراء العزل لدينا</p>
                    <a
                        href="tel:+966507067378"
                        className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-bold hover:bg-secondary/90 transition-colors"
                    >
                        اتصل الآن
                    </a>
                </div>
            </div>
        </section>
    )
}
