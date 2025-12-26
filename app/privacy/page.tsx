import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Shield, Lock, Eye, FileText, Bell, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "سياسة الخصوصية | شركة العزل المتقدم",
    description: "نحن في شركة العزل المتقدم نلتزم بحماية خصوصية بياناتكم. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتكم الشخصية.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background dir-rtl">
            <Header />

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-muted/30 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 text-primary">
                        <Shield className="w-10 h-10" />
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        سياسة الخصوصية
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        نحن نهتم بخصوصيتك ونلتزم بحماية بياناتك الشخصية وفقاً لأعلى معايير الأمان والمعايير القانونية في المملكة العربية السعودية.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Introduction */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold">مقدمة</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                توضح سياسة الخصوصية هذه كيفية قيام "شركة العزل المتقدم" بجمع واستخدام ومشاركة وحماية معلوماتك الشخصية عند زيارة موقعنا الإلكتروني أو استخدام خدماتنا في عزل الأسطح وكشف التسربات. باستخدامك لموقعنا، فإنك توافق على الممارسات الموضحة في هذه السياسة.
                            </p>
                        </div>

                        {/* Information Collection */}
                        <div className="space-y-4 font-sans text-right">
                            <div className="flex items-center gap-3 text-primary">
                                <Eye className="w-6 h-6" />
                                <h2 className="text-2xl font-bold">المعلومات التي نجمعها</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                نقوم بجمع الأنواع التالية من المعلومات لتقديم وتحسين خدماتنا لك:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                                <li>المعلومات الشخصية التي تقدمها لنا (مثل الاسم، رقم الهاتف، الموقع الجغرافي).</li>
                                <li>معلومات التواصل عند طلب معاينة مجانية أو استشارة فنية.</li>
                                <li>بيانات الاستخدام التلقائية مثل عنوان IP، نوع المتصفح، والصفحات التي تمت زيارتها.</li>
                            </ul>
                        </div>

                        {/* How we use Information */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Lock className="w-6 h-6" />
                                <h2 className="text-2xl font-bold">كيفية استخدام معلوماتك</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                نستخدم المعلومات التي نجمعها للأغراض التالية:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                                <li>تقديم خدمات العزل وكشف التسربات وتنسيق المواعيد.</li>
                                <li>التواصل معك بخصوص طلباتك واستفساراتك.</li>
                                <li>تحسين جودة خدماتنا وتجربة المستخدم على الموقع.</li>
                                <li>إرسال تحديثات أو عروض ترويجية (يمكنك إلغاء الاشتراك في أي وقت).</li>
                            </ul>
                        </div>

                        {/* Data Protection */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Shield className="w-6 h-6" />
                                <h2 className="text-2xl font-bold">حماية البيانات</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                نحن نطبق إجراءات أمان تقنية وإدارية صارمة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. بياناتك مخزنة في بيئات آمنة ولا يتم مشاركتها مع أطراف ثالثة إلا لغرض تنفيذ الخدمة المطلوبة أو بموجب القانون.
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Globe className="w-6 h-6" />
                                <h2 className="text-2xl font-bold">ملفات تعريف الارتباط (Cookies)</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك ضبط متصفحك لرفض ملفات تعريف الارتباط، ولكن قد يؤثر ذلك على قدرتك على استخدام بعض أجزاء الموقع.
                            </p>
                        </div>

                        {/* Updates to Policy */}
                        <div className="space-y-4 bg-muted/50 p-6 rounded-2xl border border-border">
                            <div className="flex items-center gap-3 text-primary">
                                <Bell className="w-6 h-6" />
                                <h2 className="text-xl font-bold">تحديثات السياسة</h2>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                نحتفظ بالحق في تحديث سياسة الخصوصية هذه في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر مراجعة". ننصحك بمراجعة هذه الصفحة بشكل دوري.
                            </p>
                            <p className="text-foreground font-bold text-sm mt-4">
                                آخر تحديث: ديسمبر 2025
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </main>
    )
}
