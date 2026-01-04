import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { ServicePageLayout, type SectionType, type ServicePageData, type ServiceSection } from "@/components/services/service-page-layout"
import { TestimonialsSection, type Testimonial } from "@/components/services/testimonials-section"
import { NeighborhoodsCompact } from "@/components/neighborhoods"
import { getServiceBySlug, getServices } from "@/lib/api-client"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Wind, Droplets, Search, Database, Warehouse, Waves, type LucideIcon } from "lucide-react"

interface ServicePageProps {
    params: Promise<{ slug: string }>
}

// Icon mapping for API data
const iconMap: Record<string, LucideIcon> = {
    Wind,
    Droplets,
    Search,
    Database,
    Warehouse,
    Waves,
}

// Static fallback data for popular services
const staticServicesData: Record<string, {
    pageData: ServicePageData
    testimonials: Testimonial[]
    seo: { title: string; description: string; keywords: string[]; ogImage: string }
    schemaOrg?: any
}> = {
    'foam-insulation': {
        pageData: {
            icon: Wind,
            title: "شركة عزل فوم بالرياض",
            subtitle: "عزل حراري ومائي متطور بتقنية البولي يوريثان - وفّر حتى 40% من فاتورة الكهرباء",
            breadcrumb: "خدماتنا / عزل فوم",
            heroImage: "/images/closed-cell-spray-foam-on-house-garage-walls.webp",
            heroContent: {
                description: "عزل الفوم (البولي يوريثان) بالرياض هو أحدث تقنيات العزل في المملكة. يجمع بين العزل الحراري والمائي في طبقة واحدة، يعكس أشعة الشمس، يقلل استهلاك الطاقة بنسبة تصل إلى 40%، ويدوم لأكثر من 20 عاماً.",
                features: ["عزل حراري ومائي في نفس الوقت", "توفير 30-40% من فاتورة الكهرباء", "عمر افتراضي يتجاوز 20 عاماً", "خفيف الوزن ولا يثقل السقف"],
            },
            sections: [
                {
                    title: "ما هو عزل الفوم وكيف يعمل؟",
                    image: "/images/close-up-of-polyurethane-spray-foam-expansion.webp",
                    content: "عزل الفوم أو البولي يوريثان هو عبارة عن مادة عازلة متطورة يتم رشها مباشرة على الأسطح حيث تتمدد وتتصلب لتشكل طبقة عازلة متجانسة بدون أي فواصل أو وصلات."
                }
            ],
            ctaSection: {
                title: "وفّر حتى 40% من فاتورة الكهرباء",
                description: "احصل على استشارة مجانية وحساب دقيق للتوفير المتوقع",
                benefits: ["حساب التوفير المتوقع مجاناً", "معاينة وتقييم فني", "عرض سعر تفصيلي", "ضمان 15 عام"]
            }
        },
        testimonials: [
            { name: "أبو راكان العنزي", location: "الرياض", rating: 5, comment: "شركة العزل المتقدم قامت بعزل فيلتي بالفوم، والفرق في برودة البيت كان واضحاً جداً.", service: "عزل فوم" }
        ],
        seo: {
            title: "شركة عزل فوم بالرياض والخرج 0507067378 ضمان 15 سنة ",
            description: "أفضل خدمة عزل فوم بولي يوريثان في الرياض والخرج. عزل حراري ومائي معاً ✓ توفير 40% من فاتورة الكهرباء ✓ ضمان 15 عام",
            keywords: ["عزل فوم", "عزل فوم بالرياض", "عزل حراري", "توفير الكهرباء"],
            ogImage: "/images/closed-cell-spray-foam-on-house-garage-walls.webp"
        }
    },
    'waterproofing': {
        pageData: {
            icon: Droplets,
            title: "شركة عزل مائي بالرياض",
            subtitle: "حماية شاملة من تسرب المياه والرطوبة بأفضل المواد العالمية",
            breadcrumb: "خدماتنا / عزل مائي",
            heroImage: "/images/best-practices-spray-foam-installation-on-roof.webp",
            heroContent: {
                description: "العزل المائي ضروري لحماية مبناك من أضرار تسرب مياه الأمطار والرطوبة. نستخدم مواد بيتومينية وأغشية معتمدة.",
                features: ["حماية 100% من التسرب", "مواد معتمدة عالمياً", "مقاومة للحرارة والبرودة", "ضمان 15 سنة"],
            },
            sections: [],
            ctaSection: {
                title: "احمِ منزلك من التسربات",
                description: "فريقنا جاهز لتقديم أفضل حلول العزل المائي",
                benefits: ["معاينة مجانية", "عزل مائي معتمد", "ضمان شامل", "تنفيذ سريع"]
            }
        },
        testimonials: [],
        seo: {
            title: "شركة عزل مائي بالرياض | حماية من التسربات | ضمان 15 سنة | 0507067378",
            description: "أفضل خدمة عزل مائي في الرياض - حماية شاملة من التسربات والرطوبة بمواد معتمدة وضمان 15 سنة",
            keywords: ["عزل مائي", "عزل مائي بالرياض", "حماية من التسربات"],
            ogImage: "/images/best-practices-spray-foam-installation-on-roof.webp"
        }
    },
    'leak-detection': {
        pageData: {
            icon: Search,
            title: "كشف تسربات المياه بالرياض",
            subtitle: "تقنيات حديثة لكشف التسربات بدقة عالية وبدون تكسير",
            breadcrumb: "خدماتنا / كشف تسربات",
            heroImage: "/images/exposed-spray-foam-insulation-in-roof-structure.webp",
            heroContent: {
                description: "خدمة كشف التسربات بأجهزة إلكترونية وكاميرات حرارية متطورة. نحدد موقع التسرب بدقة عالية دون تكسير.",
                features: ["بدون تكسير", "دقة 99%", "تقرير مفصل بالصور", "إصلاح فوري"],
            },
            sections: [],
            ctaSection: {
                title: "اكتشف التسربات قبل فوات الأوان",
                description: "فحص شامل بأحدث التقنيات",
                benefits: ["كشف بدون تكسير", "تقرير مفصل", "إصلاح فوري", "ضمان على العمل"]
            }
        },
        testimonials: [],
        seo: {
            title: "كشف تسربات المياه بالرياض | بدون تكسير | أجهزة حديثة | 0507067378",
            description: "كشف تسربات المياه بالرياض بأحدث الأجهزة الإلكترونية والكاميرات الحرارية - بدون تكسير",
            keywords: ["كشف تسربات", "تسرب مياه", "كشف بدون تكسير"],
            ogImage: "/images/exposed-spray-foam-insulation-in-roof-structure.webp"
        }
    },
    // 'tank-insulation': {
    //     pageData: {
    //         icon: Database,
    //         title: "عزل خزانات المياه بالرياض",
    //         subtitle: "نظافة وأمان لعائلتك - عزل وتعقيم بأحدث التقنيات",
    //         breadcrumb: "خدماتنا / عزل خزانات",
    //         heroImage: "/images/technician-spraying-foam-in-protective-gear.webp",
    //         heroContent: {
    //             description: "الخزان النظيف يعني صحة أفضل. نقدم خدمة عزل خزانات المياه (الأرضية والعلوية) باستخدام مواد آمنة ومعتمدة تمنع نمو البكتيريا والطحالب وتوقف التسربات نهائياً.",
    //             features: ["مواد صحية", "تعقيم شامل", "ضمان التسرب", "عزل حراري للخزان"],
    //         },
    //         sections: [
    //             {
    //                 title: "لماذا عزل الخزان ضروري؟",
    //                 type: "features-grid",
    //                 content: "إهمال الخزان قد يسبب تلوث المياه ونمو البكتيريا، بالإضافة إلى تسرب المياه الذي يضر بأساسات المبنى. العزل يحمي المبنى ويحافظ على نقاء المياه.",
    //                 items: [
    //                     { title: "حماية صحية", description: "منع الطحالب والبكتيريا من النمو داخل الخزان." },
    //                     { title: "توفير المياه", description: "منع تسرب المياه الغالية وحماية الفاتورة." },
    //                     { title: "حماية المبنى", description: "منع تسرب المياه إلى القواعد والأساسات." }
    //                 ]
    //             },
    //             {
    //                 title: "مراحل عزل الخزان",
    //                 type: "process-timeline",
    //                 content: "نتبع خطوات دقيقة لضمان أفضل نتيجة:",
    //                 items: [
    //                     { title: "سحب المياه وتنظيف الرواسب", description: "تفريغ الخزان وإزالة الطين والشوائب بالكامل." },
    //                     { title: "معالجة التشققات", description: "استخدام مواد إسمنتية خاصة لسد الشروخ." },
    //                     { title: "العزل المائي (الإيبوكسي)", description: "دهان الخزان بمادة الإيبوكسي الأزرق الآمنة صحياً." },
    //                     { title: "التعقيم والاختبار", description: "تعقيم الخزان وملؤه للتأكد من سلامة العزل." }
    //                 ]
    //             }
    //         ],
    //         ctaSection: {
    //             title: "مياه نظيفة وآمنة لعائلتك",
    //             description: "عزل خزانات بمواد معتمدة من وزارة الصحة",
    //             benefits: ["مواد Food Grade", "تنظيف وتعقيم", "ضمان شامل", "صيانة دورية"]
    //         }
    //     },
    //     testimonials: [
    //         { name: "عبدالله العتيبي", location: "الرياض - حي الياسمين", rating: 5, comment: "شغل نظيف ومرتب، نظفوا الخزان وعزلوه ورجعت الموية نظيفة جداً.", service: "عزل خزانات" }
    //     ],
    //     seo: {
    //         title: "شركة عزل خزانات بالرياض | تنظيف وتعقيم | 0507067378",
    //         description: "عزل خزانات المياه بالرياض بمواد إيبوكسي آمنة ومعتمدة - تنظيف وتعقيم شامل مع ضمان 10 سنوات",
    //         keywords: ["عزل خزانات", "تنظيف خزانات", "إيبوكسي", "تعقيم خزانات بالرياض"],
    //         ogImage: "/images/technician-spraying-foam-in-protective-gear.webp"
    //     }
    // },
    // 'shinko-insulation': {
    //     pageData: {
    //         icon: Warehouse,
    //         title: "عزل الأسطح الشينكو والمستودعات",
    //         subtitle: "حماية الهناجر والمستودعات من الحرارة والصدأ والخرير",
    //         breadcrumb: "خدماتنا / عزل شينكو",
    //         heroImage: "/images/spray-foam-roofing-01.webp",
    //         heroContent: {
    //             description: "الحل الأمثل لأسطح الهناجر والمستودعات والمصانع. عزل الفوم للشينكو يوفر عزل حراري قوي، يمنع تسرب المياه من الفواصل والمسامير، ويقلل صوت المطر والضجيج.",
    //             features: ["منع الصدأ", "عزل صوتي", "حماية الهناجر", "توفير طاقة التكييف"],
    //         },
    //         sections: [
    //             {
    //                 title: "مشاكل أسطح الشينكو وحلها",
    //                 type: "features-grid",
    //                 content: "تعاني أسطح الشينكو من الحرارة العالية وصدأ المسامير وتسرب المياه عند الأمطار. عزل الفوم يحل كل هذه المشاكل في خطوة واحدة.",
    //                 items: [
    //                     { title: "عزل حراري ممتاز", description: "يعكس الحرارة ويجعل جو المستودع بارداً." },
    //                     { title: "منع تسرب المياه", description: "يغلق جميع الفتحات وأماكن المسامير تماماً." },
    //                     { title: "حماية من الصدأ", description: "يمنع وصول الرطوبة للمعدن فيطيل عمره." }
    //                 ]
    //             }
    //         ],
    //         ctaSection: {
    //             title: "احمِ مستودعك وبضائعك",
    //             description: "عزل شينكو يضمن سلامة المخزون وتوفير في الكهرباء",
    //             benefits: ["سرعة في التنفيذ", "مواد خفيفة الوزن", "ضمان ضد التسرب", "سعر للمتر منافس"]
    //         }
    //     },
    //     testimonials: [
    //         { name: "مصنع الرواد", location: "المدينة الصناعية الثانية", rating: 5, comment: "عزلنا سقف المصنع بالفوم، فرق كبير في الحرارة واختفى خرير المطر.", service: "عزل شينكو" }
    //     ],
    //     seo: {
    //         title: "عزل اسطح شينكو بالرياض | عزل هناجر ومستودعات | 0507067378",
    //         description: "أفضل عزل لأسطح الشينكو والمستودعات بالرياض. رغوة فوم تمنع الحرارة والصدأ وتسرب المياه. ضمان حقيقي وتنفيذ سريع.",
    //         keywords: ["عزل شينكو", "عزل هناجر", "عزل مستودعات", "عزل اسطح معدنية"],
    //         ogImage: "/images/spray-foam-roofing-01.webp"
    //     }
    // },
    // 'pool-insulation': {
    //     pageData: {
    //         icon: Waves,
    //         title: "عزل المسابح والبحيرات",
    //         subtitle: "استمتع بمسبح نظيف وآمن خالي من التسربات",
    //         breadcrumb: "خدماتنا / عزل مسابح",
    //         heroImage: "/images/best-practices-spray-foam-installation-on-roof.webp",
    //         heroContent: {
    //             description: "تسرب المسبح ليس مجرد نقص في المياه، بل خطر يهدد البنية التحتية للمنزل. نقدم عزل مسابح متخصص يحمي الخرسانة والحديد ويحافظ على جودة المياه.",
    //             features: ["حماية الخرسانة", "مواد مرنة", "ضمان طويل", "مقاومة للكيماويات"],
    //         },
    //         sections: [
    //             {
    //                 title: "أهمية عزل المسبح",
    //                 type: "features-grid",
    //                 content: "العزل الجيد للمسبح يحميه من ضغط المياه الداخلي والمياه الجوفية الخارجية، مما يمنع تآكل الحديد وتصدع البلاط.",
    //                 items: [
    //                     { title: "حماية الهيكل", description: "منع وصول المياه لحديد التسليح وصدأه." },
    //                     { title: "توفير المياه والكيمياويات", description: "الحفاظ على منسوب المياه وتركيز الكلور." },
    //                     { title: "منع الطحالب", description: "الأسطح المعزولة جيداً أسهل في التنظيف وتقاوم الطحالب." }
    //                 ]
    //             }
    //         ],
    //         ctaSection: {
    //             title: "مسبحك في أيد أمينة",
    //             description: "حلول عزل وإنشاء وصيانة المسابح",
    //             benefits: ["فحص مجاني للتسرب", "مواد عزل ألمانية", "اختبار وعمان", "صيانة فلاتر ومضخات"]
    //         }
    //     },
    //     testimonials: [
    //         { name: "منتجع الخزامى", location: "الرياض", rating: 5, comment: "تم عزل المسابح الأولمبية لديكم، شغل احترافي والتزام بالوقت.", service: "عزل مسابح" }
    //     ],
    //     seo: {
    //         title: "شركة عزل مسابح بالرياض | كشف تسربات المسابح | 0507067378",
    //         description: "عزل وصيانة مسابح بالرياض. مواد عزل مائي خاصة للمسابح تمنع التسرب وتحمي البلاط والخرسانة. اتصل الآن.",
    //         keywords: ["عزل مسابح", "عزل برك سباحة", "تسرب مسابح", "ترميم مسابح"],
    //         ogImage: "/images/best-practices-spray-foam-installation-on-roof.webp"
    //     }
    // }
}

// Transform API service data to frontend format
function transformApiService(apiService: any): {
    pageData: ServicePageData
    testimonials: Testimonial[]
    seo: { title: string; description: string; keywords: string[]; ogImage: string }
    schemaOrg?: any
} {
    const icon = iconMap[apiService.icon] || Wind

    // Transform sections
    const sections: ServiceSection[] = (apiService.sections || []).map((section: any) => ({
        title: section.title,
        type: section.type as SectionType,
        content: section.content,
        image: section.image,
        imageQuery: section.imageAlt,
        items: section.items
    }))

    // Transform testimonials
    const testimonials: Testimonial[] = (apiService.testimonials || []).map((t: any) => ({
        name: t.name,
        location: t.location || "الرياض",
        rating: t.rating || 5,
        comment: t.comment,
        service: apiService.title,
        date: t.date
    }))

    return {
        pageData: {
            icon,
            title: apiService.title,
            subtitle: apiService.subtitle,
            breadcrumb: apiService.breadcrumb || `خدماتنا / ${apiService.title}`,
            heroImage: apiService.hero?.image || '/cover.webp',
            heroContent: {
                description: apiService.hero?.description || apiService.subtitle,
                features: apiService.hero?.features || []
            },
            sections,
            ctaSection: {
                title: apiService.cta?.title || "احصل على الخدمة الآن",
                description: apiService.cta?.description || "فريقنا جاهز لخدمتك",
                benefits: apiService.cta?.benefits || ["معاينة مجانية", "ضمان شامل", "تنفيذ سريع", "أسعار منافسة"]
            }
        },
        testimonials,
        seo: {
            title: apiService.seo?.title || `${apiService.title} | 0507067378`,
            description: apiService.seo?.description || apiService.subtitle,
            keywords: apiService.seo?.keywords || [],
            ogImage: apiService.seo?.ogImage || apiService.hero?.image || '/cover.webp'
        },
        schemaOrg: apiService.schemaOrg
    }
}

// Fetch service data with fallback
// Fetch service data with fallback
async function getServiceData(slug: string) {
    try {
        const apiService = await getServiceBySlug(slug)
        if (apiService) {
            return transformApiService(apiService)
        }
    } catch (error) {
        console.error(`API unavailable for service ${slug}:`, error)
    }

    // Fallback to static data
    if (staticServicesData[slug]) {
        return staticServicesData[slug]
    }

    return null
}

// Generate static params from API + static fallback
export async function generateStaticParams() {
    try {
        const apiServices = await getServices()
        if (apiServices && apiServices.length > 0) {
            return apiServices.map((service: any) => ({ slug: service.slug }))
        }
    } catch (error) {
        console.log('Using static service slugs for generateStaticParams')
    }

    // Fallback to static slugs
    return Object.keys(staticServicesData).map(slug => ({ slug }))
}

// Generate metadata dynamically
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params
    const serviceData = await getServiceData(slug)

    if (!serviceData) {
        return { title: "الخدمة غير موجودة" }
    }

    return {
        title: serviceData.seo.title,
        description: serviceData.seo.description,
        keywords: serviceData.seo.keywords.join(", "),
        openGraph: {
            title: serviceData.seo.title,
            description: serviceData.seo.description,
            type: "website",
            images: [serviceData.seo.ogImage],
        },
    }
}

// Default schema for services
function generateDefaultSchema(slug: string, title: string, description: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `https://tebaservices.com/services/${slug}#service`,
        name: title,
        description: description,
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://tebaservices.com/#localbusiness",
            name: "شركة طيبة للخدمات",
        },
        areaServed: [
            { "@type": "City", name: "الرياض" },
            { "@type": "City", name: "الخرج" },
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2500",
            bestRating: "5",
            worstRating: "1",
        },
    }
}

function generateBreadcrumbSchema(slug: string, title: string) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tebaservices.com" },
            { "@type": "ListItem", position: 2, name: "خدماتنا", item: "https://tebaservices.com/services" },
            { "@type": "ListItem", position: 3, name: title, item: `https://tebaservices.com/services/${slug}` },
        ],
    }
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const serviceData = await getServiceData(slug)

    if (!serviceData) {
        notFound()
    }

    const { pageData, testimonials, seo, schemaOrg } = serviceData

    const serviceSchema = schemaOrg || generateDefaultSchema(slug, pageData.title, seo.description)
    const breadcrumbSchema = generateBreadcrumbSchema(slug, pageData.title)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <Header />
            <ServicePageLayout data={pageData} />
            {testimonials.length > 0 && (
                <TestimonialsSection testimonials={testimonials} />
            )}

            {/* Neighborhoods Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <NeighborhoodsCompact
                            title="الأحياء التي نُغطيها"
                            maxItems={16}
                            variant="grid"
                        />
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingActions />
        </>
    )
}
