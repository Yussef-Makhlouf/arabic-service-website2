"use client"

import { HelpCircle, Building2, Thermometer, Wallet, CheckCircle, ArrowLeft } from "lucide-react"

export function SelectionGuideSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4" />
                        إرشادات الاختيار
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        منهجية اختيار نظام العزل المناسب
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        دليل تطبيقي يساعدك على اتخاذ القرار الصائب بناءً على ظروفك ومتطلباتك
                    </p>
                </div>

                {/* Decision Steps */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Step 1: Building Analysis */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-bold">تقييم خصائص المبنى</h3>
                                <p className="text-sm text-muted-foreground">الحجم، الوظيفة، الحالة الراهنة</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">طبيعة الاستخدام:</strong>
                                    <span className="text-muted-foreground"> منزل، مكتب، مصنع - لكل نمط احتياجاته</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">المساحة الكلية:</strong>
                                    <span className="text-muted-foreground"> حساب دقيق لمساحة السطح والجدران</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">حالة البنية:</strong>
                                    <span className="text-muted-foreground"> المنشآت القائمة قد تستلزم تحضيراً مسبقاً</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Climate Study */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-bold">تحليل العوامل المناخية</h3>
                                <p className="text-sm text-muted-foreground">الحرارة، الهطول، الرطوبة</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Thermometer className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">معدل الحرارة:</strong>
                                    <span className="text-muted-foreground"> المناطق شديدة الحرارة تستوجب عزلاً متميزاً</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Thermometer className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">كمية الأمطار:</strong>
                                    <span className="text-muted-foreground"> المناطق الممطرة تتطلب حماية مائية قوية</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                                <Thermometer className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-foreground">نسبة الرطوبة:</strong>
                                    <span className="text-muted-foreground"> السواحل تحتاج عوازل طاردة للبلل</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Budget Analysis */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-bold">تخطيط الموازنة المالية</h3>
                                <p className="text-sm text-muted-foreground">الإنفاق الآني مقابل الوفر المستقبلي</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4 border border-green-200/50">
                                <Wallet className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-green-900">موازنة محدودة:</strong>
                                    <span className="text-green-800"> ألواح البوليستيرين أو القار البسيط</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-200/50">
                                <Wallet className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-blue-900">موازنة متوازنة:</strong>
                                    <span className="text-blue-800"> الألياف البازلتية أو القار المعزز</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-amber-50 rounded-lg p-4 border border-amber-200/50">
                                <Wallet className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-amber-900">استثمار بعيد المدى:</strong>
                                    <span className="text-amber-800"> الفوم الرغوي (الأعلى جودة وعائداً)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Expert Consultation */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl">4</div>
                            <div>
                                <h3 className="text-xl font-bold">التشاور مع المتخصصين</h3>
                                <p className="text-sm text-muted-foreground">الاستفادة من الخبرة الفنية</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">استفد من خدمة الكشف الميداني المجاني</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">اجمع عروضاً من أكثر من مزود للمقارنة</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">راجع التراخيص وصكوك الضمان</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">استعلم عن مشاريع سابقة وآراء العملاء</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">تحقق من الوضع النظامي للمنشأة</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Decision Flowchart */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
                    <h3 className="text-2xl font-bold text-center mb-8">مسار اتخاذ القرار السليم</h3>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {[
                            "رصد المشكلة الأساسية",
                            "تحديد الموازنة المتوفرة",
                            "جمع عروض متعددة",
                            "موازنة الجودة والضمان",
                            "انتقاء المنفذ المناسب",
                            "متابعة سير العمل"
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
