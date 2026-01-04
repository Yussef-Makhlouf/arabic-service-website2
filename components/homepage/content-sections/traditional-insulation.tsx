"use client"

import { Layers, CheckCircle, XCircle, Leaf, Thermometer, Building } from "lucide-react"

export function TraditionalInsulationSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <Layers className="w-4 h-4" />
                        البدائل المتاحة
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        أنظمة العزل الحراري المتنوعة
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        نظرة شاملة على الخيارات المتوفرة في السوق المحلي مع تحليل مقارن للأداء
                    </p>
                </div>

                {/* Main Materials Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Rockwool & Glasswool */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Thermometer className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">الألياف المعدنية والبازلتية</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <strong className="text-foreground">الألياف البازلتية</strong> تُنتج من صهر الصخور البركانية عند حرارة فائقة ثم تشكيلها كخيوط رفيعة. تتميز بصمودها أمام درجات الحرارة المرتفعة جداً.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <strong className="text-foreground">الألياف الزجاجية</strong> مصدرها الزجاج المعاد معالجته، تتفوق بخفة وزنها وانخفاض تكلفتها لكنها أقل تحملاً للحرارة القصوى.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> نقاط القوة
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• صمود أمام اللهب</li>
                                    <li>• كفاءة في حجب الضوضاء</li>
                                    <li>• تكلفة معقولة</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> نقاط الضعف
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• تتشرب الرطوبة</li>
                                    <li>• تستوجب تركيب متقن</li>
                                    <li>• قد تهيج البشرة</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Polystyrene */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">رغوة البوليستيرين</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            <strong className="text-foreground">البوليستيرين الممدد (EPS)</strong> هو النمط الأبيض الشائع، يتسم بالخفة والاقتصادية، ويُستخدم بكثرة في عزل المحيط الخارجي للمباني.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <strong className="text-foreground">البوليستيرين المبثوق (XPS)</strong> أعلى كثافة مع مقاومة أفضل للرطوبة، يُميز بألوانه المتعددة، ويُفضل للبيئات الرطبة رغم ارتفاع سعره.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> نقاط القوة
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• خفة ملحوظة</li>
                                    <li>• سهولة التقطيع والتثبيت</li>
                                    <li>• طرد الرطوبة (XPS)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> نقاط الضعف
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• حساس للنار</li>
                                    <li>• يتلف بالأشعة</li>
                                    <li>• عمر أقصر نسبياً</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Natural & Sustainable Options */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 p-8 mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Leaf className="w-6 h-6 text-green-600" />
                        <h3 className="text-xl font-bold text-green-900">الحلول الطبيعية والصديقة للبيئة</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">عزل الورق المعالج</h4>
                            <p className="text-sm text-green-800 leading-relaxed mb-4">
                                ينتج من الورق المعاد تدويره بعد معالجته، يوفر عزلاً حرارياً وصوتياً جيداً مع كون مصدره مستداماً ومعالجاً لمقاومة الآفات.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">مستدام</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">اقتصادي</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">عزل صوتي</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">عزل الفلين الشجري</h4>
                            <p className="text-sm text-green-800 leading-relaxed mb-4">
                                مستخلص من قشور أشجار البلوط الفليني، مادة متجددة طبيعياً بالكامل تتميز بأداء ممتاز في العزل ومقاومة الرطوبة.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">عضوي 100%</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">مقاوم للماء</span>
                                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">باهظ الثمن</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">الألياف النباتية والحيوانية</h4>
                            <p className="text-sm text-green-800 leading-relaxed mb-4">
                                تشمل صوف الأغنام والقطن والكتان، خيارات بيئية ممتازة توفر عزلاً صحياً وآمناً مع قدرة تنفس طبيعية.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">قابل للتجدد</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">صحي وآمن</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">أداء جيد</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Comparison in Saudi Climate */}
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                        <Building className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold">تقييم الأداء في البيئة المحلية</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        تفرض الظروف المناخية السعودية اعتبارات خاصة عند اختيار نظام العزل. الحرارة الشديدة والأشعة القوية والتقلبات الرطوبية كلها عوامل مؤثرة في الأداء.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border bg-muted/50">
                                    <th className="text-right p-4 font-bold">نوع العزل</th>
                                    <th className="text-center p-4 font-bold">صمود الحرارة</th>
                                    <th className="text-center p-4 font-bold">طرد الرطوبة</th>
                                    <th className="text-center p-4 font-bold">مقاومة الأشعة</th>
                                    <th className="text-center p-4 font-bold">الاستخدام الأمثل</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="p-4 font-medium">الألياف البازلتية</td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-amber-500">محدود</span></td>
                                    <td className="text-center p-4"><span className="text-green-600">جيد</span></td>
                                    <td className="text-center p-4 text-muted-foreground">المناطق الجافة</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4 font-medium">البوليستيرين EPS</td>
                                    <td className="text-center p-4"><span className="text-green-600">جيد</span></td>
                                    <td className="text-center p-4"><span className="text-green-600">متوسط</span></td>
                                    <td className="text-center p-4"><span className="text-amber-500">محدود</span></td>
                                    <td className="text-center p-4 text-muted-foreground">الجدران الداخلية</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4 font-medium">البوليستيرين XPS</td>
                                    <td className="text-center p-4"><span className="text-green-600">جيد</span></td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-green-600">متوسط</span></td>
                                    <td className="text-center p-4 text-muted-foreground">القواعد الرطبة</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">الفوم الرغوي</td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-amber-500">يحتاج طلاء</span></td>
                                    <td className="text-center p-4 text-muted-foreground">الأسطح (مع طبقة حماية)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
