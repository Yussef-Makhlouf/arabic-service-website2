

export function EliteInsulationServicesTable() {
    return (
        <section className="w-full py-12 md:py-16 bg-background" dir="rtl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        عزل فوم الأسطح بالرياض.. أنواع ومواد نستخدمها حسب طبيعة سطحك!
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        نوفر لك أكثر من نوع وأكثر من مادة من عزل فوم الأسطح بالرياض، ونحرص دائماً على اختيار النوع الأنسب حسب طبيعة السطح، درجة التعرض للحرارة أو المياه، وحالة المبنى، وذلك بعد المعاينة لضمان أفضل نتيجة ممكنة تدوم لسنوات.
                    </p>
                </div>

                <div className="mb-6 flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-bold text-foreground">أفضل أنواع عزل الفوم واستخداماته</h3>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
                    <table className="w-full min-w-[800px] border-collapse bg-card text-foreground">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="p-4 text-right font-bold text-primary w-1/4 border-l border-border">نوع عزل الفوم</th>
                                <th className="p-4 text-right font-bold text-primary w-1/3 border-l border-border">متى نستخدمه لك؟</th>
                                <th className="p-4 text-right font-bold text-primary w-1/3">ماذا يحقق لك؟</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">الفوم الرذاذي</td>
                                <td className="p-4 text-muted-foreground border-l border-border">
                                    إذا كان سطحك غير مستوٍ أو يحتوي على زوايا وتفاصيل متعددة
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    يوفر لك تغطية كاملة بدون فواصل، عزل قوي للحرارة والمياه، وسرعة في التنفيذ.
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">فوم الخلية المغلقة</td>
                                <td className="p-4 text-muted-foreground border-l border-border">
                                    إذا كان السطح معرضاً للأمطار أو تسربات المياه بشكل مباشر
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    يوفر حماية عالية من المياه والرطوبة، وكذلك يوفر مقاومة طويلة المدى
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">فوم الخلية المفتوحة</td>
                                <td className="p-4 text-muted-foreground border-l border-border">
                                    عند الحاجة إلى عزل حراري داخلي أو تقليل انتقال الحرارة
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    يحسن الراحة الحرارية داخل المبنى بتكلفة أقل
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">ألواح الفوم</td>
                                <td className="p-4 text-muted-foreground border-l border-border">
                                    إذا كان السطح مستوياً والمساحة منتظمة
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    عزل ثابت وسهل التركيب مع نتائج فعالة
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">الفوم السائل</td>
                                <td className="p-4 text-muted-foreground border-l border-border">
                                    لمعالجة الزوايا الدقيقة والفواصل والشقوق
                                </td>
                                <td className="p-4 text-muted-foreground">
                                    يسدّ أي نقاط ضعف ومنع أي تسرب مستقبلي
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
