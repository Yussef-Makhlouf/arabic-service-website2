import { Thermometer, Droplets, Timer, Coins, ShieldCheck, Sun, Umbrella, Wrench, AlertTriangle, HelpCircle, CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FoamInsulationSection() {
    return (
        <section className="w-full" dir="rtl">
            {/* 1. Hero Introduction */}
            <div className="relative bg-primary/5 py-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
                <div className="container mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        الخيار الأول في المملكة للعزل المعتمد
                    </div>

                    <h2 className="text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        عزل الفوم (البولي يوريثان) <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-600">
                            الدرع الأول لحماية منزلك
                        </span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg md:text-2xl text-muted-foreground leading-relaxed mb-10">
                        الحل الأمثل في السعودية لعزل حراري ومائي في طبقة واحدة. معتمد من شركة الكهرباء، يقلل فاتورتك حتى 40%، ويحميك من التسربات مدى الحياة.
                    </p>


                    {/* Trust Indicators Strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-border/50 pt-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-foreground">ضمان 15 سنة</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-foreground">معتمد من شركة الكهرباء</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-2.5 rounded-xl bg-green-500/10 text-green-500">
                                <Timer className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-foreground">سرعة تنفيذ فائقة</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                                <Coins className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-foreground">أفضل توفير للطاقة</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Definition & Core Concept */}
            <div className="container mx-auto py-16 px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-primary">ما هو عزل الفوم؟</h3>
                        <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                            <p>
                                عزل الفوم، أو ما يعرف علمياً بـ "رغوة البولي يوريثان" (Polyurethane Foam)، هو مادة عزل متطورة يتم تشكيلها من تفاعل كيميائي بين مادتين سائلتين. عند رش هاتين المادتين، تتفاعلان وتنتفخان لتشكل رغوة صلبة تلتصق بقوة بأي سطح يتم تطبيقها عليه.
                            </p>
                            <p>
                                ما يميز عزل الفوم هو قدرته الفريدة على الوصول إلى أدق الشقوق والفراغات، مما يخلق "غلافاً" محكماً تماماً يمنع تسرب الحرارة والمياه بشكل لا يضاهى بالمواد التقليدية الأخرى. إنه ليس مجرد عازل، بل هو درع واقٍ متكامل يحمي الهيكل الخرساني للمبنى.
                            </p>
                            <ul className="space-y-2 mt-4">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>كثافة عالية وقوة تحمل فائقة.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>وزن خفيف لا يشكل عبئاً على السطح.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    <span>صديق للبيئة وآمن للاستخدام السكني.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-muted rounded-2xl p-8 border shadow-sm">
                        <h4 className="text-xl font-bold mb-4">الخصائص الفيزيائية</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="font-medium">التوصيل الحراري</span>
                                <span className="text-primary font-bold">منخفض جداً</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="font-medium">مقاومة الماء</span>
                                <span className="text-primary font-bold">عالية (خلايا مغلقة)</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="font-medium">الكثافة</span>
                                <span className="text-primary font-bold">40 - 45 كجم/م3</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <span className="font-medium">سمك التطبيق</span>
                                <span className="text-primary font-bold">3 سم - 5 سم (حسب الحاجة)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Detailed Benefits (Tabs) */}
            <div className="bg-transparent py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4 text-primary relative inline-block">
                            لماذا عزل الفوم هو الخيار الأذكى؟
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></span>
                        </h3>
                        <p className=" max-w-2xl mx-auto text-muted-foreground">
                            يجمع عزل الفوم بين مزايا متعددة تجعل منه استثماراً رابحاً على المدى الطويل، متفوقاً على أنظمة العزل التقليدية في الكفاءة والسرعة والتكلفة.
                        </p>
                    </div>

                    <Tabs defaultValue="thermal" className="w-full max-w-4xl mx-auto" dir="rtl">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1">
                            <TabsTrigger value="thermal" className="py-3 text-base">العزل الحراري</TabsTrigger>
                            <TabsTrigger value="water" className="py-3 text-base">العزل المائي</TabsTrigger>
                            <TabsTrigger value="energy" className="py-3 text-base">توفير المال</TabsTrigger>
                            <TabsTrigger value="durability" className="py-3 text-base">المتانة والسرعة</TabsTrigger>
                        </TabsList>

                        <TabsContent value="thermal" className="mt-8" dir="rtl">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
                                            <Thermometer className="h-8 w-8 text-red-600" />
                                        </div>
                                        <CardTitle className="text-2xl">عزل حراري لا مثيل له</CardTitle>
                                    </div>
                                    <CardDescription className="text-lg">
                                        الحاجز الأول ضد شمس الصيف الحارقة
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        تعد المملكة العربية السعودية من أكثر المناطق حرارة في العالم، حيث تتجاوز درجات الحرارة في الصيف 45 درجة مئوية. الخرسانة مادة تمتص الحرارة وتخزنها، مما يحول منزلك إلى فرن حقيقي.
                                    </p>
                                    <p>
                                        يعمل عزل الفوم كحاجز حراري شديد المقاومة، حيث يمتلك معامل توصيل حراري منخفض للغاية. هذا يعني أنه يمنع انتقال الحرارة من السطح الخارجي إلى داخل المبنى.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <li className="bg-secondary/50 p-4 rounded-lg">يقلل الفارق في درجات الحرارة داخل المبنى.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">يحمي المكيفات من العمل المستمر والمجهد.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">يخلق بيئة داخلية مريحة ومستقرة حرارياً.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">يقلل من ظاهرة "الجزر الحرارية" الحضرية.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="water" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                                            <Droplets className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <CardTitle className="text-2xl">حماية مائية متكاملة</CardTitle>
                                    </div>
                                    <CardDescription className="text-lg">
                                        درعك الواقي ضد الأمطار والتسربات
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        بينما يشتهر الفوم بقدرته الحرارية، إلا أنه بفضل تركيبته ذات "الخلايا المغلقة" (Closed Cell)، يعمل كعازل مائي بنسبة 100%. عند تطبيقه، يشكل طبقة واحدة متصلة خالية من الفواصل (Seamless).
                                    </p>
                                    <p>
                                        أغلب مشاكل تسرب المياه في الأنظمة التقليدية (مثل الرولات) تأتي من نقاط التقاء الشرائح أو الفواصل. الفوم يلغي هذه المشكلة تماماً لأنه قطعة واحدة تغطي السطح بالكامل بما في ذلك الأركان والأنابيب.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <li className="bg-secondary/50 p-4 rounded-lg">يمنع وصول الرطوبة إلى حديد التسليح ويحميه من الصدأ.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">يمنع تكون الفطريات والعفن والروائح الكريهة.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">يعالج التشققات الدقيقة في الخرسانة ويغلقها.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">مقاوم لامتصاص الماء ولا يتأثر بالسيول.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="energy" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                                            <Coins className="h-8 w-8 text-yellow-600" />
                                        </div>
                                        <CardTitle className="text-2xl">توفير هائل في الطاقة</CardTitle>
                                    </div>
                                    <CardDescription className="text-lg">
                                        استثمار يعيد قيمته من خلال فواتير الكهرباء
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        تستهلك أجهزة التكييف حوالي 70% من فاتورة الكهرباء في المنازل السعودية. عندما يكون العزل ضعيفاً، يضطر المكيف للعمل بطاقة قصوى لتعويض الحرارة المتسربة.
                                    </p>
                                    <p>
                                        أثبتت الدراسات الميدانية أن تطبيق عزل الفوم بشكل صحيح يمكن أن يوفر ما يصل إلى 40% من استهلاك الطاقة الكهربائية. هذا يعني أن تكلفة العزل سيتم استردادها في غضون سنوات قليلة من خلال الوفر في الفواتير.
                                    </p>
                                    <div className="bg-primary/10 p-6 rounded-xl mt-4 border border-primary/20">
                                        <h5 className="font-bold text-primary mb-2">معادلة التوفير:</h5>
                                        <p className="text-sm">
                                            عزل فوم جيد = تسرب حراري أقل = عمل أقل للمكيف = استهلاك كهرباء أقل = **فاتورة أقل**.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="durability" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                                            <Timer className="h-8 w-8 text-purple-600" />
                                        </div>
                                        <CardTitle className="text-2xl">المتانة وسرعة التنفيذ</CardTitle>
                                    </div>
                                    <CardDescription className="text-lg">
                                        إنجاز سريع وعمر افتراضي طويل
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        الوقت ثمين. أنظمة العزل التقليدية قد تستغرق أياماً أو أسابيع للتثبيت، مع فوضى ومخلفات كثيرة. عزل الفوم يتميز بالسرعة الفائقة في التنفيذ.
                                    </p>
                                    <p>
                                        يمكن لفريقنا المحترف إنجاز عزل سطح فيلا كاملة (حراري ومائي) في يوم واحد فقط في كثير من الحالات. بمجرد جفاف الفوم (الذي يستغرق دقائق)، يصبح السطح جاهزاً.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <li className="bg-secondary/50 p-4 rounded-lg">عمر افتراضي يتجاوز 20 عاماً مع الصيانة البسيطة.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">خفيف الوزن جداً ولا يمثل أي حمل على أساسات المبنى.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">مقاوم للحشرات والقوارض ولا يشكل بيئة صالحة لها.</li>
                                        <li className="bg-secondary/50 p-4 rounded-lg">سهولة الصيانة في حال حدوث أي تلف مستقبلاً.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* 4. Execution Steps */}
            <div className="container mx-auto py-20 px-4 md:px-6">
                <h3 className="text-3xl font-bold text-center mb-16">كيف نقوم بتنفيذ العزل؟ (خطوات العمل)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-muted -z-10 translate-y-4"></div>

                    <div className="bg-background relative p-6 border rounded-xl shadow-sm hover:border-primary transition-colors">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">1</div>
                        <h4 className="text-xl font-bold mb-3 text-center lg:text-right">التنظيف والتحضير</h4>
                        <p className="text-muted-foreground text-center lg:text-right">
                            الخطوة الأهم. نقوم بتنظيف السطح تماماً من الأتربة والشوائب والزيوت. يتم إزالة أي بقايا خرسانية وتسوية السطح لضمان التصاق الفوم المثالي.
                        </p>
                    </div>

                    <div className="bg-background relative p-6 border rounded-xl shadow-sm hover:border-primary transition-colors">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">2</div>
                        <h4 className="text-xl font-bold mb-3 text-center lg:text-right">ضبط الماكينات</h4>
                        <p className="text-muted-foreground text-center lg:text-right">
                            يتم ضبط ماكينات الرش الخاصة لخلط مكونات الفوم بالنسب الدقيقة وبالحرارة والضغط المناسبين لضمان جودة الرغوة وكثافتها (40-45 كجم).
                        </p>
                    </div>

                    <div className="bg-background relative p-6 border rounded-xl shadow-sm hover:border-primary transition-colors">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">3</div>
                        <h4 className="text-xl font-bold mb-3 text-center lg:text-right">رش الفوم</h4>
                        <p className="text-muted-foreground text-center lg:text-right">
                            يتم رش طبقات الفوم على السطح بسماكة محددة (عادة 3-5 سم). يراعى تغطية جميع الزوايا، الأركان، وحول أنابيب التكييف والسباكة لضمان عدم وجود فجوات.
                        </p>
                    </div>

                    <div className="bg-background relative p-6 border rounded-xl shadow-sm hover:border-primary transition-colors">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">4</div>
                        <h4 className="text-xl font-bold mb-3 text-center lg:text-right">طبقة الحماية (الاكريليك)</h4>
                        <p className="text-muted-foreground text-center lg:text-right">
                            بعد جفاف الفوم، يتم دهان طبقة حماية من مادة "الاكريليك" المقاومة للأشعة فوق البنفسجية (UV) لحماية الفوم من التآكل بفعل الشمس ولزيادة عمره الافتراضي.
                        </p>
                    </div>
                </div>
            </div>

            {/* 5. Common Mistakes & Warnings */}
            <div className="py-20 border-y border-red-900/20 bg-gradient-to-b from-background to-red-950/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="md:w-1/3">
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-red-500">
                                <AlertTriangle className="h-10 w-10" />
                                أخطاء شائعة يجب تجنبها
                            </h3>
                            <p className="text-muted-foreground text-lg ">
                                ليس كل عزل فوم هو عزل جيد. جودة التنفيذ هي العامل الحاسم. احذر من الشركات التي ترتكب هذه الأخطاء القاتلة التي قد تكلفك الكثير لاحقاً.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-background p-5 rounded-lg shadow-sm border-r-4 border-red-500">
                                <h5 className="font-bold flex items-center gap-2 mb-2 text-red-700 dark:text-red-400">
                                    <XCircle className="h-5 w-5" />
                                    عدم تنظيف السطح
                                </h5>
                                <p className="text-sm text-muted-foreground">رش الفوم على الغبار يؤدي لعدم الالتصاق وتقشر الطبقة لاحقاً.</p>
                            </div>
                            <div className="bg-background p-5 rounded-lg shadow-sm border-r-4 border-red-500">
                                <h5 className="font-bold flex items-center gap-2 mb-2 text-red-700 dark:text-red-400">
                                    <XCircle className="h-5 w-5" />
                                    السماكة غير المتساوية
                                </h5>
                                <p className="text-sm text-muted-foreground">تفاوت السماكة يضعف العزل ويخلق نقاط ضعف للتسرب الحراري والمائي.</p>
                            </div>
                            <div className="bg-background p-5 rounded-lg shadow-sm border-r-4 border-red-500">
                                <h5 className="font-bold flex items-center gap-2 mb-2 text-red-700 dark:text-red-400">
                                    <XCircle className="h-5 w-5" />
                                    تجاهل طبقة الحماية
                                </h5>
                                <p className="text-sm text-muted-foreground">ترك الفوم مكشوفاً للشمس بدون اكريليك يؤدي لتحلله وتلفه خلال أشهر.</p>
                            </div>
                            <div className="bg-background p-5 rounded-lg shadow-sm border-r-4 border-red-500">
                                <h5 className="font-bold flex items-center gap-2 mb-2 text-red-700 dark:text-red-400">
                                    <XCircle className="h-5 w-5" />
                                    التوقيت الخاطئ
                                </h5>
                                <p className="text-sm text-muted-foreground">الرش أثناء المطر أو الرياح الشديدة يؤدي لنتائج كارثية وسطح غير مستوٍ.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Why in Saudi Arabia? */}
            <div className="container mx-auto py-20 px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                        <Card className="bg-card border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Sun className="h-8 w-8 text-orange-500 mb-2" />
                                <CardTitle className="text-lg">صيف حارق</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">يقاوم درجات حرارة تصل للغليان ويحفظ برودة المنزل.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Umbrella className="h-8 w-8 text-blue-500 mb-2" />
                                <CardTitle className="text-lg">أمطار مفاجئة</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">يحمي من تسربات السيول والأمطار الغزيرة المفاجئة.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <ShieldCheck className="h-8 w-8 text-green-500 mb-2" />
                                <CardTitle className="text-lg">لوائح البناء</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">مطابق لكود البناء السعودي وشرط أساسي لشركة الكهرباء.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Wrench className="h-8 w-8 text-slate-500 mb-2" />
                                <CardTitle className="text-lg">صيانة قليلة</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">تحمل الظروف الصحراوية القاسية والغبار لسنوات طويلة.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="order-1 lg:order-2 self-center">
                        <h3 className="text-3xl font-bold mb-6">لماذا عزل الفوم ضرورة في السعودية؟</h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            المناخ في المملكة العربية السعودية يتسم بالقسوة، من حرارة شديدة وجفاف في الصيف إلى أمطار وبرودة في الشتاء. المباني تتعرض لإجهاد حراري مستمر (تمدد وانكماش) يؤدي لتصدع الخرسانة.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            عزل الفوم ليس مجرد رفاهية، بل هو ضرورة إنشائية واقتصادية. إنه النظام الوحيد الذي يقدم حلاً مزدوجاً فعالاً يتناسب مع طبيعة أسطحنا (سواء كانت مبلطة، خرسانية، أو شينكو) ويصمد أمام تقلباتنا الجوية.
                        </p>
                        <Button size="lg" className="w-full sm:w-auto">
                            اطلب معاينة مجانية الآن
                        </Button>
                    </div>
                </div>
            </div>

            {/* 7. FAQ */}
            {/* <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h3 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
                        <HelpCircle className="h-8 w-8 text-primary" />
                        الأسئلة الشائعة حول عزل الفوم
                    </h3>
                    <Accordion type="single" collapsible className="w-full bg-background rounded-lg border px-4 shadow-sm">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium">كم سعر متر عزل الفوم؟</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                يختلف السعر بناءً على المساحة، السماكة المطلوبة (3 سم، 4 سم، 5 سم)، ونوع السطح. لكن بشكل عام، يعتبر عزل الفوم اقتصادياً جداً مقارنة بتركيب عزل مائي وحراري منفصلين. اتصل بنا للحصول على عرض سعر دقيق ومجاني.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium">هل يصلح عزل الفوم للأسطح المبلطة والقديمة؟</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                نعم، وبكفاءة عالية. يمكن رش الفوم مباشرة فوق البلاط القديم أو الخرسانة أو حتى الأسطح المعدنية (الشينكو) بعد تنظيفها وتجهيزها جيداً، دون الحاجة لتكسير البلاط، مما يوفر الكثير من التكاليف والجهد.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium">ما هو العمر الافتراضي لعزل الفوم؟</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                عند تنفيذه بشكل صحيح وحمايته بطبقة الاكريليك، يمكن لعزل الفوم أن يدوم لأكثر من 20 عاماً. الصيانة الدورية (تجديد طبقة الدهان الحامي كل 5-7 سنوات) تضمن استمراره لمدى الحياة.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-medium">هل عزل الفوم آمن صحياً؟</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                نعم، بعد جفافه (الذي يستغرق ثواني)، يصبح الفوم مادة خاملة تماماً وغير سامة، ولا تنبعث منه أي روائح أو غازات. كما أنه مقاوم لنمو البكتيريا والحشرات، مما يجعله آمناً تماماً للمنازل.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg font-medium">هل يحتاج الفوم إلى طبقة حماية؟</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                نعم، هذا ضروري جداً. الفوم مادة تتأثر بالأشعة فوق البنفسجية (الشمس). لذلك، بعد الرش، نقوم بدهانه بطبقة "أكريليك" أو "مطاط" لحمايته من الشمس وضمان عدم تفتته مع الزمن.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div> */}
        </section>
    )
}
