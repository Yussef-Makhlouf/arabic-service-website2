"use client"

import { Zap, Shield, Thermometer, Droplets, CheckCircle, Flame, Scale, Clock, ArrowDown } from "lucide-react"

export function FoamTechnologySection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        تقنية البولي يوريثان
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        عزل الفوم (البولي يوريثان) - التقنية الحديثة
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        الحل الأمثل للعزل الحراري والمائي في المباني السعودية - توفير يصل إلى 50% من فاتورة الكهرباء
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Foam Technology Explanation */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <ArrowDown className="w-6 h-6 text-cyan-600" />
                            <h3 className="text-xl font-bold text-cyan-900">شرح تقنية البولي يوريثان الرغوي</h3>
                        </div>
                        <div className="space-y-4 text-cyan-800 leading-relaxed">
                            <p>
                                <strong className="text-cyan-900">عزل الفوم بولي يوريثان</strong> هو تقنية عزل حديثة تعتمد على رش خليط كيميائي سائل يتفاعل فوراً عند ملامسته السطح ليتحول إلى رغوة كثيفة تتمدد وتلتصق بالسطح. هذه الرغوة تملأ جميع الفراغات والشقوق مكوّنة طبقة عازلة متماسكة بدون أي فواصل أو ثغرات.
                            </p>
                            <p>
                                يتكون الفوم من مركبين أساسيين: <strong className="text-cyan-900">الأيزوسيانات والبوليول</strong>. يتم خلطهما بنسبة دقيقة عند الرش. التفاعل الكيميائي ينتج رغوة ذات خلايا مغلقة تمنع انتقال الحرارة والماء والهواء.
                            </p>
                            <p>
                                يتميز الفوم بكثافته العالية التي تتراوح بين 30-40 كجم/م³ للفوم عالي الكثافة، مما يوفر عزلاً حرارياً ممتازاً بسماكة أقل مقارنة بالمواد التقليدية.
                            </p>
                        </div>
                    </div>

                    {/* Application Steps */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-6">مراحل تطبيق الفوم</h3>
                        <div className="space-y-6">
                            {[
                                { step: "1", title: "التحضير", desc: "تنظيف السطح وإزالة العيوب والشوائب" },
                                { step: "2", title: "الرش", desc: "رش الفوم بسماكة 3-5 سم حسب المتطلبات" },
                                { step: "3", title: "التمدد", desc: "الفوم يتمدد خلال 30 ثانية ويجف في دقائق" },
                                { step: "4", title: "الحماية", desc: "تطبيق طبقة حماية من الأشعة فوق البنفسجية" },
                                { step: "5", title: "الفحص", desc: "اختبار الجودة والتسليم مع شهادة الضمان" },
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
                    <h3 className="text-2xl font-bold text-center mb-8">المميزات التقنية لعزل الفوم</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Zap, title: "عزل حراري ومائي معاً", desc: "طبقة واحدة توفر حماية مزدوجة من الحرارة والماء", color: "bg-amber-100 text-amber-700" },
                            { icon: Clock, title: "عمر افتراضي طويل", desc: "يستمر 25-30 سنة مع الحد الأدنى من الصيانة", color: "bg-green-100 text-green-700" },
                            { icon: Scale, title: "خفة الوزن", desc: "لا يُشكل حملاً إضافياً على هيكل المبنى", color: "bg-blue-100 text-blue-700" },
                            { icon: Flame, title: "مقاوم للحريق", desc: "مُعالج بمواد مثبطة للاشتعال وآمن", color: "bg-red-100 text-red-700" },
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
                        <h3 className="text-2xl font-bold">توفير الطاقة: أرقام وإحصائيات واقعية</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-white/90 mb-8">
                        أثبتت الدراسات أن عزل الفوم يحقق أعلى نسب توفير في استهلاك الكهرباء مقارنة بجميع أنواع العزل الأخرى. في المناخ السعودي الحار يمكن تحقيق توفير يصل إلى <strong className="text-yellow-300">50%</strong> من فاتورة الكهرباء الصيفية.
                    </p>
                    <p className="text-white/80 mb-8">
                        وفقاً لدراسة أجريت <strong>مدينة الملك عبدالعزيز للعلوم والتقنية</strong>، فإن المباني المعزولة بالفوم في الرياض تستهلك طاقة أقل بنسبة 45-55% للتبريد مقارنة بالمباني غير المعزولة.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">50%</div>
                            <div className="text-sm text-white/80">توفير في الكهرباء</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">70%</div>
                            <div className="text-sm text-white/80">تقليل الحرارة المنقولة</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">3-4</div>
                            <div className="text-sm text-white/80">سنوات لاسترداد التكلفة</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-yellow-300 mb-1">+25</div>
                            <div className="text-sm text-white/80">سنة عمر افتراضي</div>
                        </div>
                    </div>
                </div>

                {/* Comparison with Traditional */}
                <div className="bg-muted/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-center mb-8">مقارنة الفوم مع المواد التقليدية</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-right p-4 font-bold">المعيار</th>
                                    <th className="text-center p-4 font-bold bg-primary/10 text-primary">عزل الفوم</th>
                                    <th className="text-center p-4 font-bold">الصوف الصخري</th>
                                    <th className="text-center p-4 font-bold">البوليسترين</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">العزل الحراري</td>
                                    <td className="text-center p-4 bg-primary/5 text-green-600 font-bold">ممتاز</td>
                                    <td className="text-center p-4">جيد</td>
                                    <td className="text-center p-4">جيد</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">العزل المائي</td>
                                    <td className="text-center p-4 bg-primary/5 text-green-600 font-bold">ممتاز</td>
                                    <td className="text-center p-4 text-red-500">ضعيف</td>
                                    <td className="text-center p-4">متوسط</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">العمر الافتراضي</td>
                                    <td className="text-center p-4 bg-primary/5 font-bold">25-30 سنة</td>
                                    <td className="text-center p-4">15-20 سنة</td>
                                    <td className="text-center p-4">15-20 سنة</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4">سهولة التركيب</td>
                                    <td className="text-center p-4 bg-primary/5">يحتاج متخصص</td>
                                    <td className="text-center p-4">سهل</td>
                                    <td className="text-center p-4">سهل</td>
                                </tr>
                                <tr>
                                    <td className="p-4">التكلفة/م²</td>
                                    <td className="text-center p-4 bg-primary/5">50-80 ريال</td>
                                    <td className="text-center p-4">25-40 ريال</td>
                                    <td className="text-center p-4">20-35 ريال</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
