"use client"

import { AlertTriangle, CheckCircle, Lightbulb, Phone, MessageCircle, Award, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MarketChallengesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        تحديات السوق
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        التحديات والحلول في السوق السعودي
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        معرفة المشاكل الشائعة تساعدك على اتخاذ قرارات أفضل وتجنب الأخطاء المكلفة
                    </p>
                </div>

                {/* Challenges Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Problem 1 */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">مشاكل الجودة والمواد المقلدة</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            انتشار مواد عزل رخيصة ومقلدة لا تستوفي المعايير السعودية، مما يؤدي إلى فشل العزل خلال سنوات قليلة وخسائر مالية كبيرة للمستهلك.
                        </p>
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" /> الحل
                            </h4>
                            <p className="text-sm text-green-800">
                                تأكد من شهادات SASO للمواد المستخدمة واطلب رؤية عينات وشهادات الجودة قبل التعاقد.
                            </p>
                        </div>
                    </div>

                    {/* Problem 2 */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">نقص الخبراء المؤهلين</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            كثير من العمالة غير مدربة بشكل كافٍ على تقنيات العزل الحديثة، مما يؤدي إلى أخطاء في التطبيق تُقلل من فعالية العزل.
                        </p>
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" /> الحل
                            </h4>
                            <p className="text-sm text-green-800">
                                اختر شركات لديها فريق مدرب ومعتمد، واسأل عن شهادات التدريب والخبرة العملية.
                            </p>
                        </div>
                    </div>

                    {/* Problem 3 */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">غياب الرقابة والمتابعة</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            بعض المقاولين لا يلتزمون بالمواصفات المتفق عليها أو يستخدمون سماكات أقل من المطلوب لتوفير التكاليف.
                        </p>
                        <div className="bg-green-50 rounded-xl p-4 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" /> الحل
                            </h4>
                            <p className="text-sm text-green-800">
                                اشترط الحصول على تقرير فني مع صور قبل وبعد، وتأكد من وجود ضمان مكتوب وموثق.
                            </p>
                        </div>
                    </div>

                    {/* Solution: Innovation */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                                <Lightbulb className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-900">حلول الابتكار والتقنيات الجديدة</h3>
                        </div>
                        <p className="text-blue-800 leading-relaxed mb-6">
                            تشهد صناعة العزل تطوراً مستمراً مع ظهور تقنيات جديدة مثل العزل النانوي والطلاءات العاكسة للحرارة والمواد الذكية.
                        </p>
                        <ul className="space-y-3 text-sm text-blue-800">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                <span>طلاءات عاكسة للحرارة (Cool Roof Coatings)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                <span>عزل نانوي بسماكة أقل وأداء أعلى</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                <span>مواد صديقة للبيئة قابلة لإعادة التدوير</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Conclusion Section */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-primary-foreground">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
                            الخاتمة: الاستثمار الذكي للمستقبل
                        </h2>
                        <p className="text-xl leading-relaxed text-white mb-8">
                            العزل ليس تكلفة إضافية، بل هو <strong className="text-secondary">استثمار ذكي</strong> يعود عليك بالتوفير والراحة والحماية لسنوات طويلة. في ظل ارتفاع أسعار الطاقة والتغيرات المناخية، أصبح العزل الجيد ضرورة لا غنى عنها.
                        </p>

                        {/* Benefits Summary */}
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <Shield className="w-8 h-8 text-secondary mx-auto mb-4" />
                                <h4 className="font-bold mb-2 text-white">حماية المبنى</h4>
                                <p className="text-sm text-white">إطالة عمر المبنى وتقليل تكاليف الصيانة</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <Award className="w-8 h-8 text-secondary mx-auto mb-4" />
                                <h4 className="font-bold mb-2 text-white">راحة وصحة</h4>
                                <p className="text-sm text-white">بيئة معيشية مريحة وصحية لعائلتك</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
                                <h4 className="font-bold mb-2 text-white">توفير مستمر</h4>
                                <p className="text-sm text-white">تقليل فواتير الكهرباء شهرياً</p>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">ابدأ الآن - استشارة مجانية</h3>
                            <p className="text-white max-w-2xl mx-auto">
                                فريق خبراء شركة العزل المتقدم جاهز لمساعدتك في اختيار الحل الأمثل لمبناك
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Button size="lg" variant="secondary" asChild className="font-bold text-lg px-8 py-6 h-auto">
                                    <a href="tel:+966507067378" className="flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        اتصل الآن: 0507067378
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="font-bold text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                                    <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5" />
                                        واتساب
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
