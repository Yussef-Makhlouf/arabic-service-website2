import { Wind, Droplets, Search, Database, Warehouse, Waves } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
    id: string
    slug?: string
    title: string
    subtitle: string
    description: string
    longDescription?: string
    href: string
    image: string
    icon: LucideIcon | string
    features: string[]
    keywords?: string[]
}

export const staticServices: Service[] = [
    {
        id: "foam-insulation",
        title: "عزل فوم للأسطح",
        subtitle: "العزل الحراري والمائي المتكامل",
        description: "أحدث تقنيات العزل التي تجمع بين العزل المائي والحراري في طبقة واحدة.",
        longDescription: "عزل الفوم (البولي يوريثان) هو الحل الأمثل لمناخ الرياض الحار. يوفر حتى 40% من فاتورة الكهرباء ويحمي من تسرب المياه في آن واحد. مثالي للفلل والمباني التجارية والمستودعات.",
        href: "/services/foam-insulation",
        image: "/images/closed-cell-spray-foam-on-house-garage-walls.webp",
        icon: Wind,
        features: ["توفير 40% من الكهرباء", "عزل مائي وحراري معاً", "بدون فواصل أو نقاط ضعف", "ضمان 15 سنة"],
        keywords: ["عزل فوم", "عزل حراري", "توفير الكهرباء", "بولي يوريثان"]
    },
    {
        id: "waterproofing",
        title: "عزل مائي للأسطح",
        subtitle: "الحماية الشاملة من تسرب المياه",
        description: "نظام عزل مائي متكامل باستخدام أفضل المواد العالمية.",
        longDescription: "العزل المائي ضروري لحماية مبناك من أضرار تسرب مياه الأمطار والرطوبة. نستخدم مواد بيتومينية وأغشية بلاستيكية معتمدة توفر حماية تدوم عقوداً طويلة.",
        href: "/services/waterproofing",
        image: "/images/best-practices-spray-foam-installation-on-roof.webp",
        icon: Droplets,
        features: ["حماية 100% من التسرب", "مواد معتمدة عالمياً", "مقاومة للحرارة والبرودة", "ضمان 15 سنة"],
        keywords: ["عزل مائي", "منع التسرب", "بيتومين", "حماية من الأمطار"]
    },
    {
        id: "leak-detection",
        title: "كشف تسربات المياه",
        subtitle: "تقنيات حديثة بدون تكسير",
        description: "نستخدم أحدث التقنيات لكشف التسربات بدقة سنتيمترات دون الحاجة للتكسير.",
        longDescription: "خدمة كشف التسربات بأجهزة إلكترونية وكاميرات حرارية متطورة. نحدد موقع التسرب بدقة عالية دون تكسير، مع تقرير مفصل وإصلاح فوري. خدمة 24 ساعة للطوارئ.",
        href: "/services/leak-detection",
        image: "/images/exposed-spray-foam-insulation-in-roof-structure.webp",
        icon: Search,
        features: ["بدون تكسير", "دقة 99%", "تقرير مفصل بالصور", "إصلاح فوري"],
        keywords: ["كشف تسربات", "تسرب مياه", "فاتورة مياه مرتفعة", "أجهزة كشف"]
    },
    {
        id: "tank-insulation",
        title: "عزل خزانات المياه",
        subtitle: "حماية صحية ومياه نقية 100%",
        description: "عزل وتنظيف وتعقيم شامل للخزانات الأرضية والعلوية بمواد آمنة.",
        longDescription: "نقدم حلولاً متكاملة لعزل الخزانات تضمن سلامة المياه وصحة عائلتك. نستخدم مواد إيبوكسي معتمدة لا تتفاعل مع المياه، مع خدمة التنظيف والتعقيم الشامل.",
        href: "/services/tank-insulation",
        image: "/images/technician-spraying-foam-in-protective-gear.webp",
        icon: Database,
        features: ["مواد آمنة صحياً", "تعقيم شامل", "ضمان التسرب", "صيانة دورية"],
        keywords: ["عزل خزانات", "تنظيف خزانات", "عزل ايبوكسي", "تعقيم مياه"]
    },
    {
        id: "shinko-insulation",
        title: "عزل الأسطح الشينكو",
        subtitle: "حماية متكاملة للهناجر والمستودعات",
        description: "عزل مائي وحراري وعكس لأشعة الشمس للأسطح المعدنية والشينكو.",
        longDescription: "حلول متخصصة لعزل الأسطح المعدنية (الشينكو) باستخدام الفوم (بولي يوريثان) الذي يلتصق بقوة بالمعدن، ويمنع الصدأ، ويخفض الحرارة بشكل كبير، ويمنع صوت المطر.",
        href: "/services/shinko-insulation",
        image: "/images/spray-foam-roofing-01.webp",
        icon: Warehouse,
        features: ["منع الصدأ", "عزل صوتي", "حماية الهناجر", "توفير التكييف"],
        keywords: ["عزل شينكو", "عزل هناجر", "عزل مستودعات", "عزل اسطح معدنية"]
    },
    {
        id: "pool-insulation",
        title: "عزل المسابح",
        subtitle: "حماية الهيكل الخرساني وجودة المياه",
        description: "عزل مائي متخصص يمنع تسرب المياه ويحافظ على البنية الخرسانية.",
        longDescription: "خدمة عزل المسابح بأحدث المواد التي تتحمل ضغط المياه المستمر والمواد الكيميائية. نضمن عدم نقص المياه وحماية الحديد من الصدأ والهيكل من التآكل.",
        href: "/services/pool-insulation",
        image: "/images/best-practices-spray-foam-installation-on-roof.webp",
        icon: Waves,
        features: ["حماية الخرسانة", "مواد مرنة", "ضمان طويل", "مقاومة للكيماويات"],
        keywords: ["عزل مسابح", "عزل برك سباحة", "تسرب مسابح", "حماية مسابح"]
    },
]
