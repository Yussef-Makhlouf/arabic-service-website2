

export function EliteInsulationServicesTable() {
    return (
        <section className="w-full py-12 md:py-16 bg-background" dir="rtl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        أنواع عزل الفوم المعتمدة لدينا
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        نستخدم في <strong>العزل المتقدم</strong> أفضل أنواع الفوم العازل حسب طبيعة السطح ومتطلبات المشروع. نختار النوع الأمثل بعد المعاينة الدقيقة لضمان نتائج تدوم لسنوات طويلة وتوفر أقصى حماية ممكنة.
                    </p>
                </div>

                <div className="mb-6 flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full"></div>
                    <h3 className="text-xl font-bold text-foreground">مقارنة أنواع عزل الفوم واستخداماتها</h3>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
                    <table className="w-full min-w-[800px] border-collapse bg-card text-foreground">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="p-4 text-right font-bold text-primary w-1/4 border-l border-border">نوع الفوم</th>
                                <th className="p-4 text-right font-bold text-primary w-1/3 border-l border-border">الاستخدام الأمثل</th>
                                <th className="p-4 text-right font-bold text-primary w-1/3">المميزات والفوائد</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">
                                    <span className="text-primary">فوم البولي يوريثان الرذاذي</span>
                                    <br />
                                    <span className="text-xs text-muted-foreground">(Spray Foam)</span>
                                </td>
                                <td className="p-4 text-muted-foreground border-l border-border leading-relaxed">
                                    الأسطح ذات الأشكال غير المنتظمة والزوايا الكثيرة، الأسطح القديمة والمبلطة، المناطق التي يصعب الوصول إليها بالطرق التقليدية
                                </td>
                                <td className="p-4 text-muted-foreground leading-relaxed">
                                    تغطية كاملة بدون فواصل أو وصلات، عزل حراري ومائي في آن واحد، سرعة في التنفيذ (يوم واحد للأسطح المتوسطة)، التصاق قوي بأي سطح
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">
                                    <span className="text-primary">فوم الخلية المغلقة</span>
                                    <br />
                                    <span className="text-xs text-muted-foreground">(Closed Cell)</span>
                                </td>
                                <td className="p-4 text-muted-foreground border-l border-border leading-relaxed">
                                    الأسطح المعرضة للأمطار الغزيرة والسيول، المناطق الرطبة والساحلية، الأسطح التي تعاني من تسربات مائية متكررة
                                </td>
                                <td className="p-4 text-muted-foreground leading-relaxed">
                                    مقاومة 100% للماء والرطوبة، كثافة عالية وصلابة ممتازة، عمر افتراضي يتجاوز 25 سنة، لا يمتص الماء نهائياً
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">
                                    <span className="text-primary">فوم الخلية المفتوحة</span>
                                    <br />
                                    <span className="text-xs text-muted-foreground">(Open Cell)</span>
                                </td>
                                <td className="p-4 text-muted-foreground border-l border-border leading-relaxed">
                                    العزل الحراري الداخلي للجدران والأسقف، المباني التي تحتاج عزل صوتي، الميزانيات المحدودة مع الحفاظ على الكفاءة
                                </td>
                                <td className="p-4 text-muted-foreground leading-relaxed">
                                    تكلفة أقل مع أداء حراري ممتاز، عزل صوتي إضافي، مرونة عالية ولا يتشقق، صديق للبيئة
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">
                                    <span className="text-primary">ألواح الفوم المضغوط</span>
                                    <br />
                                    <span className="text-xs text-muted-foreground">(Foam Boards)</span>
                                </td>
                                <td className="p-4 text-muted-foreground border-l border-border leading-relaxed">
                                    الأسطح المستوية والمنتظمة، المشاريع الكبيرة التي تحتاج تغطية واسعة، العزل تحت البلاط أو الأرضيات
                                </td>
                                <td className="p-4 text-muted-foreground leading-relaxed">
                                    سهولة وسرعة التركيب، سماكات متعددة حسب الحاجة، مقاومة ممتازة للضغط، تكلفة اقتصادية للمساحات الكبيرة
                                </td>
                            </tr>
                            <tr className="hover:bg-muted/20 transition-colors">
                                <td className="p-4 font-semibold border-l border-border">
                                    <span className="text-primary">الفوم السائل التكميلي</span>
                                    <br />
                                    <span className="text-xs text-muted-foreground">(Liquid Foam)</span>
                                </td>
                                <td className="p-4 text-muted-foreground border-l border-border leading-relaxed">
                                    سد الشقوق والفواصل الدقيقة، معالجة نقاط الضعف حول الأنابيب، إصلاح العزل القديم المتضرر
                                </td>
                                <td className="p-4 text-muted-foreground leading-relaxed">
                                    يصل للأماكن الضيقة جداً، يسد أي فراغات بشكل كامل، مثالي للإصلاحات والصيانة، يمنع أي تسرب مستقبلي
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
