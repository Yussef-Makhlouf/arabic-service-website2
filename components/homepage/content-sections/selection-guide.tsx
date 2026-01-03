"use client"

import { HelpCircle, Building2, Thermometer, Wallet, Users, CheckCircle, ArrowLeft } from "lucide-react"

export function SelectionGuideSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4" />
                        دليل الاختيار
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        كيفية الاختيار الأمثل - دليل عملي
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        خطوات منهجية لاختيار نوع العزل المناسب لمبناك بناءً على الاحتياجات والميزانية
                    </p>
                </div>

                {/* Decision Steps */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Step 1: Building Analysis */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold">تحليل احتياجات المبنى</h3>
                                <p className="text-sm text-muted-foreground">المساحة، الاستخدام، العمر</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">نوع المبنى:</strong>
                                    <span className="text-muted-foreground"> سكني، تجاري، صناعي - كل نوع له متطلبات مختلفة</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">مساحة السطح:</strong>
                                    <span className="text-muted-foreground"> تحديد المساحة الإجمالية بالمتر المربع</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">عمر المبنى:</strong>
                                    <span className="text-muted-foreground"> المباني القديمة قد تحتاج معالجة أولية</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Climate Study */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold">دراسة المناخ المحلي الدقيق</h3>
                                <p className="text-sm text-muted-foreground">الحرارة، الرطوبة، الأمطار</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Thermometer className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">درجات الحرارة:</strong>
                                    <span className="text-muted-foreground"> المناطق الحارة جداً تحتاج عزل حراري قوي</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Thermometer className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">معدل الأمطار:</strong>
                                    <span className="text-muted-foreground"> المناطق الممطرة تحتاج عزل مائي متميز</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Thermometer className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">الرطوبة:</strong>
                                    <span className="text-muted-foreground"> المناطق الساحلية تحتاج مواد مقاومة للرطوبة</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Budget Analysis */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold">تحليل الميزانية والمرونة المالية</h3>
                                <p className="text-sm text-muted-foreground">التكلفة الأولية مقابل التوفير</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4 border border-green-200/50">
                                <Wallet className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-green-900">ميزانية محدودة:</strong>
                                    <span className="text-green-800"> البوليسترين أو البيتومين التقليدي</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-200/50">
                                <Wallet className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-blue-900">ميزانية متوسطة:</strong>
                                    <span className="text-blue-800"> الصوف الصخري أو البيتومين المطاطي</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-amber-50 rounded-lg p-4 border border-amber-200/50">
                                <Wallet className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-amber-900">استثمار طويل المدى:</strong>
                                    <span className="text-amber-800"> عزل الفوم (أعلى جودة وتوفير)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Expert Consultation */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">4</div>
                            <div>
                                <h3 className="text-xl font-bold">استشارة الخبراء والمقاولين</h3>
                                <p className="text-sm text-muted-foreground">الحصول على رأي متخصص</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">اطلب معاينة مجانية من شركات متخصصة</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">قارن بين 2-3 عروض أسعار مختلفة</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">تأكد من شهادات الاعتماد والضمان</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">اسأل عن أعمال سابقة ومراجع العملاء</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">تحقق من تراخيص الشركة ونظاميتها</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Decision Flowchart */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
                    <h3 className="text-2xl font-bold text-center mb-8">الخطوات العملية لاتخاذ القرار</h3>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {[
                            "حدد المشكلة الرئيسية",
                            "حدد الميزانية المتاحة",
                            "اطلب 3 عروض أسعار",
                            "قارن الضمان والجودة",
                            "اختر المقاول المناسب",
                            "تابع التنفيذ"
                        ].map((step, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">{index + 1}</span>
                                    {step}
                                </div>
                                {index < 5 && <ArrowLeft className="w-5 h-5 text-primary hidden md:block" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
