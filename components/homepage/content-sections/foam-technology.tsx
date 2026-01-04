"use client"

import { Zap, Shield, Scale, Clock, ArrowDown, Flame } from "lucide-react"

export function FoamTechnologySection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        حلول العزل الحديثة
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        تقنية الفوم الرغوي - عزل الجيل الجديد
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        الاختيار الأذكى لحماية مزدوجة من الحرارة والرطوبة بكفاءة استثنائية
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Foam Technology Explanation */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <ArrowDown className="w-6 h-6 text-cyan-600" />
                            <h3 className="text-xl font-bold text-cyan-900">آلية عمل الفوم العازل</h3>
                        </div>
                        <div className="space-y-4 text-cyan-800 leading-relaxed">
                            <p>
                                <strong className="text-cyan-900">عزل الفوم الرغوي</strong> يعتمد على تفاعل كيميائي لحظي بين مكونين سائلين عند رشهما على السطح. النتيجة رغوة متينة تتمدد وتلتصق بإحكام مكونة غلافاً عازلاً متجانساً يسد كل المنافذ.
                            </p>
                            <p>
                                تركيبة الفوم تتكون من <strong className="text-cyan-900">مركبات متخصصة</strong> تُمزج بدقة متناهية لإنتاج طبقة ذات خلايا مغلقة تشكل حاجزاً فعالاً ضد انتقال الحرارة والرطوبة والهواء.
                            </p>
                            <p>
                                يتفوق الفوم بكثافته المثالية التي توفر عزلاً حرارياً متفوقاً بسماكة أقل مقارنة بالبدائل، مما يجعله الخيار الاقتصادي على المدى البعيد.
                            </p>
                        </div>
                    </div>

                    {/* Application Steps */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-6">خطوات تنفيذ العزل الرغوي</h3>
                        <div className="space-y-6">
                            {[
                                { step: "1", title: "الإعداد الأولي", desc: "تنظيف وتجهيز السطح وإزالة العوالق" },
                                { step: "2", title: "عملية الرش", desc: "تطبيق الفوم بالسماكة المحددة فنياً" },
                                { step: "3", title: "التفاعل والتشكل", desc: "تمدد المادة وتصلبها خلال دقائق" },
                                { step: "4", title: "طبقة الحماية", desc: "إضافة طلاء واقٍ من العوامل الجوية" },
                                { step: "5", title: "الفحص والتسليم", desc: "اختبارات الجودة وتوثيق الضمان" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground">{item.title}</div>
                                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Features */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-8">السمات التقنية لعزل الفوم</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: "حماية شاملة", desc: "عزل مزدوج ضد الحرارة والماء بطبقة واحدة", color: "bg-amber-100 text-amber-700" },
                            { icon: Clock, title: "استدامة طويلة", desc: "أداء مستقر يمتد لأكثر من 25 عاماً", color: "bg-green-100 text-green-700" },
                            { icon: Scale, title: "وزن خفيف", desc: "لا يُرهق السقف بأحمال إضافية", color: "bg-blue-100 text-blue-700" },
                            { icon: Flame, title: "أمان محسّن", desc: "معالج بمثبطات لمقاومة الاشتعال", color: "bg-red-100 text-red-700" },
                        ].map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className={`${feature.color} rounded-2xl p-6 text-center`}>
                                    <Icon className="w-8 h-8 mx-auto mb-4" />
                                    <h4 className="font-bold mb-2">{feature.title}</h4>
                                    <p className="text-sm opacity-80">{feature.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Energy Savings Banner */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-8 h-8 text-yellow-300" />
                        <h3 className="text-2xl font-bold">العائد المالي: توفير ملموس ومستمر</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-white/90 mb-8">
                        تؤكد الدراسات الميدانية تفوق الفوم في خفض استهلاك الطاقة. في الأجواء الحارة كالمملكة، يمكن تحقيق خفض يتجاوز <strong className="text-yellow-300">45%</strong> من نفقات التبريد الشهرية.
                    </p>
                    <p className="text-white/80 mb-8">
                        أظهرت قياسات متعددة أن المباني المعزولة بالفوم تستهلك طاقة أقل بنسبة 40-50% للتبريد، مما يعني استرداد تكلفة العزل خلال فترة وجيزة.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">45%</div>
                            <div className="text-sm text-white/80">خفض فاتورة التبريد</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">65%</div>
                            <div className="text-sm text-white/80">حجب الحرارة الخارجية</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">3-5</div>
                            <div className="text-sm text-white/80">سنوات لتعويض التكلفة</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">+25</div>
                            <div className="text-sm text-white/80">سنة من الأداء المستقر</div>
                        </div>
                    </div>
                </div>

                {/* Comparison with Traditional */}
                <div className="bg-muted/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-center mb-8">مقارنة الفوم بالخيارات التقليدية</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-right p-4 font-bold">عنصر المقارنة</th>
                                    <th className="text-center p-4 font-bold bg-primary/10 text-primary">الفوم الرغوي</th>
                                    <th className="text-center p-4 font-bold">الألياف الصخرية</th>
                                    <th className="text-center p-4 font-bold">ألواح البوليستر</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">الكفاءة الحرارية</td>
                                    <td className="text-center p-4 bg-primary/5 text-green-600 font-bold">متفوق</td>
                                    <td className="text-center p-4">مقبول</td>
                                    <td className="text-center p-4">مقبول</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">منع تسرب المياه</td>
                                    <td className="text-center p-4 bg-primary/5 text-green-600 font-bold">متفوق</td>
                                    <td className="text-center p-4 text-red-500">محدود</td>
                                    <td className="text-center p-4">متوسط</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">فترة الصلاحية</td>
                                    <td className="text-center p-4 bg-primary/5 font-bold">25-30 سنة</td>
                                    <td className="text-center p-4">12-18 سنة</td>
                                    <td className="text-center p-4">12-18 سنة</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">طريقة التركيب</td>
                                    <td className="text-center p-4 bg-primary/5">يتطلب فني متخصص</td>
                                    <td className="text-center p-4">بسيط</td>
                                    <td className="text-center p-4">بسيط</td>
                                </tr>
                                <tr>
                                    <td className="p-4">التكلفة للمتر²</td>
                                    <td className="text-center p-4 bg-primary/5">55-85 ريال</td>
                                    <td className="text-center p-4">28-45 ريال</td>
                                    <td className="text-center p-4">22-38 ريال</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
