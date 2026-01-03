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
                        العزل الحراري التقليدي
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        العزل الحراري التقليدي - الخيارات المتعددة
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        استعراض شامل لأنواع العزل الحراري التقليدية المتوفرة في السوق السعودي مع مقارنة الأداء
                    </p>
                </div>

                {/* Main Materials Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Rockwool & Glasswool */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Thermometer className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">الصوف الصخري والزجاجي</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <strong className="text-foreground">الصوف الصخري</strong> يُصنع من صهور الصخور البازلتية عند درجة حرارة عالية جداً (1500° م) ثم تحويلها إلى ألياف رفيعة. يتميز بمقاومته العالية للحريق، حيث يتحمل درجات حرارة تصل إلى 750 درجة مئوية.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <strong className="text-foreground">الصوف الزجاجي</strong> يُصنع من الزجاج المُعاد تدويره، وهو أخف وزناً وأقل تكلفة من الصوف الصخري لكنه أقل مقاومة للحرارة العالية.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> للمميزات
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• مقاومة عالية للحريق</li>
                                    <li>• عزل صوتي ممتاز</li>
                                    <li>• سعر اقتصادي</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> العيوب
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• يمتص الماء</li>
                                    <li>• يحتاج تركيب دقيق</li>
                                    <li>• قد يسبب انزعاج الجلد</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Polystyrene */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">ألواح البوليسترين</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            <strong className="text-foreground">البوليسترين الموسّع (EPS)</strong> هو النوع الأبيض المعروف، خفيف الوزن ورخيص الثمن، يُستخدم بكثرة في عزل الجدران والأسقف. كثافته تتراوح بين 15-30 كجم/م³.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            <strong className="text-foreground">البوليسترين المقذوف (XPS)</strong> أكثر كثافة ومقاومة للرطوبة من EPS، يتميز بلونه الأزرق أو الوردي، أداءه أفضل لكن تكلفته أعلى ويُفضل للأماكن المعرّضة للرطوبة.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> للمميزات
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• خفة الوزن</li>
                                    <li>• سهولة التركيب والقص</li>
                                    <li>• مقاومة الرطوبة (XPS)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> العيوب
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• قابل للاشتعال</li>
                                    <li>• يتأثر بأشعة الشمس</li>
                                    <li>• عمر افتراضي أقل</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Natural & Sustainable Options */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 p-8 mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Leaf className="w-6 h-6 text-green-600" />
                        <h3 className="text-xl font-bold text-green-900">العوازل الطبيعية والمستدامة</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">عزل السيليلوز</h4>
                            <p className="text-sm text-green-800 leading-relaxed mb-4">
                                مصنوع من الورق المُعاد تدويره، صديق للبيئة ويوفر عزلاً حرارياً وصوتياً جيداً. أيضاً معالَج كيميائياً لمقاومة الحريق والحشرات.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">صديق للبيئة</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">تكلفة معقولة</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">عزل صوتي ممتاز</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">عزل الفلين الطبيعي</h4>
                            <p className="text-sm text-green-800 leading-relaxed mb-4">
                                مُستخلص من لحاء شجر الفلين، مادة طبيعية 100% قابلة للتجديد. ممتاز للعزل الحراري والصوتي ومقاوم للرطوبة.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">طبيعي 100%</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">مقاوم للرطوبة</span>
                                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">مكلف جداً</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">عزل الصوف الحيواني</h4>
                            <p className="text-sm text-green-800 leading-relaxed mb-4">
                                صوف الخراف الطبيعي أو الألياف النباتية مثل القطن والقنب. خيار بيئي ممتاز يوفر عزلاً حرارياً وصوتياً جيداً، إيجابي للمقاومة.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">مستدام</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">صحي وآمن</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">أداء ممتاز</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Comparison in Saudi Climate */}
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                        <Building className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold">مقارنة الأداء في المناخ السعودي</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        المناخ السعودي يتميز بتحديات فريدة تؤثر على أداء مواد العزل المختلفة. درجات الحرارة العالية جداً، الأشعة فوق البنفسجية الشديدة، والرطوبة في المناطق الساحلية كلها عوامل يجب مراعاتها عند اختيار نوع العزل.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border bg-muted/50">
                                    <th className="text-right p-4 font-bold">نوع العزل</th>
                                    <th className="text-center p-4 font-bold">الأداء في الحرارة العالية</th>
                                    <th className="text-center p-4 font-bold">مقاومة الرطوبة</th>
                                    <th className="text-center p-4 font-bold">مقاومة UV</th>
                                    <th className="text-center p-4 font-bold">التوصية</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="p-4 font-medium">الصوف الصخري</td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-amber-500">ضعيف</span></td>
                                    <td className="text-center p-4"><span className="text-green-600">جيد</span></td>
                                    <td className="text-center p-4 text-muted-foreground">الأماكن الجافة</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4 font-medium">البوليسترين EPS</td>
                                    <td className="text-center p-4"><span className="text-green-600">جيد</span></td>
                                    <td className="text-center p-4"><span className="text-green-600">متوسط</span></td>
                                    <td className="text-center p-4"><span className="text-amber-500">ضعيف</span></td>
                                    <td className="text-center p-4 text-muted-foreground">الجدران الداخلية</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="p-4 font-medium">البوليسترين XPS</td>
                                    <td className="text-center p-4"><span className="text-green-600">جيد</span></td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-green-600">متوسط</span></td>
                                    <td className="text-center p-4 text-muted-foreground">الأساسات الرطبة</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">الفوم سبراي</td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-green-600 font-bold">ممتاز</span></td>
                                    <td className="text-center p-4"><span className="text-amber-500">يحتاج حماية</span></td>
                                    <td className="text-center p-4 text-muted-foreground">الأسطح (مع طلاء UV)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
