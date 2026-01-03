"use client"

import { Droplets, Shield, CheckCircle, AlertTriangle, Wrench, Calculator, FileText, Clock } from "lucide-react"

export function WaterproofingGuideSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        العزل المائي الاحترافي
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        العزل المائي - الحامي الأول من التلف
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        دليل شامل حول العزل المائي للأسطح والخزانات: المواد، التقنيات، ومتى تحتاجه
                    </p>
                </div>

                {/* Definition Block */}
                <div className="bg-card rounded-2xl border border-border p-8 mb-12 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Droplets className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold">التعريف والمواد المستخدمة في العزل المائي</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        <strong className="text-foreground">العزل المائي</strong> هو نظام حماية يُطبق على الأسطح والأساسات والخزانات لمنع تسرب المياه ووصول الرطوبة إلى الهيكل الإنشائي. يُعد العزل المائي خط الدفاع الأول ضد التلف الناجم عن المياه، والذي يُعتبر من أخطر العوامل المدمرة للمباني.
                    </p>

                    {/* Materials Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Bitumen */}
                        <div className="bg-muted/50 rounded-xl p-6 border border-border">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                            <h4 className="font-bold mb-3">البيتومين (القار)</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                مادة عزل تقليدية مُستخلصة من البترول، تتميز بمقاومتها العالية وملاءمتها للمناخ. تُستخدم بشكلين رئيسيين:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>البيتومين الساخن (المؤكسد)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>البيتومين المطاطي (بالبوليمر)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>رولات البيتومين الملحومة</span>
                                </li>
                            </ul>
                        </div>

                        {/* PVC Membranes */}
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200/50">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                            <h4 className="font-bold text-blue-900 mb-3">أغشية PVC والممبرين</h4>
                            <p className="text-sm text-blue-800 leading-relaxed mb-4">
                                أغشية بلاستيكية حديثة عالية المقاومة، تُلحم بالحرارة لتشكيل طبقة عازلة متكاملة بدون فواصل.
                            </p>
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <span>مقاومة ممتازة قوى البلاستيكية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <span>عمر افتراضي يصل 30 سنة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <span>مرونة عالية لتحمل الحركة</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cement-based */}
                        <div className="bg-muted/50 rounded-xl p-6 border border-border">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                            <h4 className="font-bold mb-3">المواد الأسمنتية</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                طلاءات أسمنتية خاصة تُضاف إليها بوليمرات تمنحها خصائص مائية للماء.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>مناسبة للخزانات وبيان الشرب</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>سهولة التطبيق والإصلاح</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>آمنة صحياً ومعتمدة</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Cost vs Lifespan */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Calculator className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">التكلفة مقابل العمر الافتراضي</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            عند اختيار نوع العزل المائي، يجب الموازنة بين التكلفة الأولية والعمر الافتراضي للحصول على أفضل قيمة:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">البيتومين التقليدي</div>
                                    <div className="text-sm text-muted-foreground">العمر: 10-15 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">20-30 ريال/م²</div>
                            </div>
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">البيتومين المطاطي</div>
                                    <div className="text-sm text-muted-foreground">العمر: 15-20 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">35-50 ريال/م²</div>
                            </div>
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">أغشية PVC</div>
                                    <div className="text-sm text-muted-foreground">العمر: 25-30 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">60-90 ريال/م²</div>
                            </div>
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">العزل الأسمنتي</div>
                                    <div className="text-sm text-muted-foreground">العمر: 15-20 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">25-40 ريال/م²</div>
                            </div>
                        </div>
                    </div>

                    {/* When Do You Need It? */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                            <h3 className="text-xl font-bold">متى تحتاج العزل المائي؟</h3>
                        </div>

                        {/* Warning Signs */}
                        <div className="bg-amber-50 rounded-xl p-5 mb-6 border border-amber-200/50">
                            <h4 className="font-bold text-amber-900 mb-3">العلامات التحذيرية</h4>
                            <ul className="space-y-2 text-sm text-amber-800">
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>بقع رطوبة على الأسقف أو الجدران</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>تقشر الطلاء وانتفاخه</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>ظهور العفن والروائح الكريهة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>تساقط قطرات ماء من السقف</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>ارتفاع فاتورة المياه غير المبرر</span>
                                </li>
                            </ul>
                        </div>

                        {/* Prevention */}
                        <div className="bg-green-50 rounded-xl p-5 mb-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">الوقاية قبل المشكلة</h4>
                            <p className="text-sm text-green-800 leading-relaxed">
                                الأفضل دائماً تطبيق العزل وقائياً على المباني الجديدة قبل ظهور أي مشاكل. تكلفة الوقاية أقل بكثير من تكلفة الإصلاح بعد حدوث التلف.
                            </p>
                        </div>

                        {/* Legal */}
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200/50">
                            <h4 className="font-bold text-blue-900 mb-3">المتطلبات القانونية</h4>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                يُلزم كود البناء السعودي جميع المباني الجديدة بتطبيق نظام عزل مائي معتمد للأسطح والأساسات، مع شهادة ضمان من المقاول.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Maintenance Tips */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Maintenance */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Wrench className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">الصيانة الدورية والنصائح العملية</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            للحفاظ على فعالية العزل المائي أطول فترة ممكنة، اتبع هذه النصائح:
                        </p>
                        <div className="space-y-4">
                            {[
                                "فحص السطح مرتين سنوياً (قبل وبعد موسم الأمطار)",
                                "إزالة المياه المتراكمة فور هطول الأمطار",
                                "معالجة الشقوق الصغيرة فوراً قبل توسعها",
                                "تجنب المشي على السطح إلا للضرورة",
                                "تنظيف مجاري تصريف المياه دورياً",
                                "الاستعانة بمختصين عند ملاحظة أي مشكلة"
                            ].map((tip, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary/10 text-black rounded-full flex items-center justify-center text-sm font-bold shrink-0">{index + 1}</span>
                                    <span className="text-muted-foreground">{tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-black">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-secondary" />
                            <h3 className="text-xl font-bold text-white">دراسات حالة من مشاريع سعودية</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                                <h4 className="font-bold text-secondary mb-2">مجمع سكني - حي النرجس، الرياض</h4>
                                <p className="text-sm text-white leading-relaxed">
                                    عزل 50 فيلا بنظام البيتومين المطاطي، وفّر 40% من تكاليف الصيانة خلال 5 سنوات مع صفر حالات تسرب.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                                <h4 className="font-bold text-secondary mb-2">مبنى تجاري - طريق الملك فهد</h4>
                                <p className="text-sm text-white leading-relaxed">
                                    تجديد عزل سطح بمساحة 8000م² باستخدام أغشية PVC، ضمان 15 سنة مع تقليل تكاليف التكييف بنسبة 30%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
