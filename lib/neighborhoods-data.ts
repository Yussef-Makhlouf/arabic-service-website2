export type NeighborhoodRegion = "north" | "south" | "east" | "west" | "center" | "suburbs"

export interface Neighborhood {
    id: string
    name: string
    description: string
    region: NeighborhoodRegion
    popular?: boolean
}

export const regionLabels: Record<NeighborhoodRegion, string> = {
    north: "الأحياء الشمالية",
    south: "الأحياء الجنوبية",
    east: "الأحياء الشرقية",
    west: "الأحياء الغربية",
    center: "الأحياء الوسطى",
    suburbs: "ضواحي الرياض",
}

export const neighborhoods: Neighborhood[] = [
    // ========== الأحياء الشمالية ==========
    { id: "al-nakheel", name: "حي النخيل", description: "نُنفّذ عزل فوم عالي الجودة في حي النخيل بأسعار تنافسية وضمان 15 سنة.", region: "north", popular: true },
    { id: "al-malqa", name: "حي الملقا", description: "خدمات عزل الأسطح والخزانات في حي الملقا بأفضل المواد المعتمدة.", region: "north", popular: true },
    { id: "al-yasmin", name: "حي الياسمين", description: "فريقنا المتخصص يقدم عزل فوم احترافي لفلل حي الياسمين.", region: "north", popular: true },
    { id: "al-qirawan", name: "حي القيروان", description: "عزل أسطح مبلطة وغير مبلطة في حي القيروان بضمان شامل.", region: "north", popular: true },
    { id: "al-sahafa", name: "حي الصحافة", description: "خدمات كشف التسربات وعزل الفوم في حي الصحافة.", region: "north", popular: true },
    { id: "al-narjis", name: "حي النرجس", description: "عزل حراري ومائي متكامل لمنازل حي النرجس الراقي.", region: "north", popular: true },
    { id: "al-aqiq", name: "حي العقيق", description: "نوفر حلول عزل متقدمة لفلل ومجمعات حي العقيق.", region: "north" },
    { id: "al-rahmaniya", name: "حي الرحمانية", description: "عزل خزانات وأسطح في حي الرحمانية بأعلى معايير الجودة.", region: "north" },
    { id: "al-wadi", name: "حي الوادي", description: "خدمات عزل فوم بولي يوريثان في حي الوادي.", region: "north" },
    { id: "al-ghadir", name: "حي الغدير", description: "عزل مائي وحراري لأسطح حي الغدير.", region: "north" },
    { id: "hittin", name: "حي حطين", description: "عزل فوم احترافي للفلل الفاخرة في حي حطين.", region: "north", popular: true },
    { id: "al-muruj", name: "حي المروج", description: "خدمات عزل شاملة في حي المروج بالرياض.", region: "north" },
    { id: "al-izdihar", name: "حي الازدهار", description: "عزل أسطح ومباني في حي الازدهار.", region: "north" },
    { id: "al-rawdah-north", name: "حي الروضة الشمالية", description: "عزل فوم وكشف تسربات في حي الروضة الشمالية.", region: "north" },
    { id: "al-suwaidi-north", name: "حي السويدي الشمالي", description: "خدمات عزل متكاملة في حي السويدي الشمالي.", region: "north" },
    { id: "al-nadhim", name: "حي النظيم", description: "عزل خزانات وأسطح في حي النظيم.", region: "north" },
    { id: "al-rimal", name: "حي الرمال", description: "عزل فوم عالي الكثافة في حي الرمال.", region: "north" },
    { id: "tuwaiq", name: "حي طويق", description: "خدمات عزل احترافية في حي طويق.", region: "north" },
    { id: "al-hamra", name: "حي الحمراء", description: "عزل مائي وحراري في حي الحمراء.", region: "north" },
    { id: "al-munsiyah", name: "حي المنصية", description: "عزل أسطح الفلل في حي المنصية.", region: "north" },
    { id: "al-khaleej", name: "حي الخليج", description: "عزل فوم بولي يوريثان في حي الخليج.", region: "north" },
    { id: "al-salam", name: "حي السلام", description: "خدمات عزل شاملة في حي السلام.", region: "north" },
    { id: "al-masif", name: "حي المصيف", description: "عزل أسطح مبلطة في حي المصيف.", region: "north" },
    { id: "al-arid", name: "حي العارض", description: "عزل فوم للمباني الجديدة في حي العارض.", region: "north" },
    { id: "al-bunayah", name: "حي بنية", description: "خدمات عزل متكاملة في حي بنية.", region: "north" },

    // ========== الأحياء الجنوبية ==========
    { id: "al-shifa", name: "حي الشفا", description: "عزل فوم وكشف تسربات في حي الشفا الراقي.", region: "south", popular: true },
    { id: "al-hazm", name: "حي الحزم", description: "خدمات عزل أسطح في حي الحزم بأسعار منافسة.", region: "south", popular: true },
    { id: "al-aziziyah", name: "حي العزيزية", description: "عزل حراري ومائي لمباني حي العزيزية.", region: "south", popular: true },
    { id: "al-suwaidi-south", name: "حي السويدي الجنوبي", description: "عزل فوم احترافي في حي السويدي الجنوبي.", region: "south" },
    { id: "al-dar-al-baida", name: "حي الدار البيضاء", description: "خدمات عزل شاملة في حي الدار البيضاء.", region: "south", popular: true },
    { id: "al-marwah", name: "حي المروة", description: "عزل خزانات وأسطح في حي المروة.", region: "south" },
    { id: "al-badr", name: "حي البدر", description: "عزل فوم بولي يوريثان في حي البدر.", region: "south" },
    { id: "al-manakh", name: "حي المناخ", description: "كشف تسربات وعزل في حي المناخ.", region: "south" },
    { id: "al-mansourah", name: "حي المنصورة", description: "عزل أسطح مبلطة في حي المنصورة.", region: "south" },
    { id: "al-yarmuk", name: "حي اليرموك", description: "خدمات عزل متكاملة في حي اليرموك.", region: "south" },
    { id: "al-faisaliyah-south", name: "حي الفيصلية الجنوبية", description: "عزل فوم للفلل في حي الفيصلية.", region: "south" },
    { id: "al-safa", name: "حي الصفا", description: "عزل مائي وحراري في حي الصفا.", region: "south" },
    { id: "al-nasriyah", name: "حي النصرية", description: "عزل أسطح ومباني في حي النصرية.", region: "south" },
    { id: "al-difa", name: "حي الديفاء", description: "خدمات عزل في حي الديفاء.", region: "south" },
    { id: "al-jubailah", name: "حي جبيلة", description: "عزل فوم عالي الجودة في حي جبيلة.", region: "south" },
    { id: "al-jazirah", name: "حي الجزيرة", description: "عزل خزانات في حي الجزيرة.", region: "south" },
    { id: "al-sulay", name: "حي السلي", description: "عزل أسطح في حي السلي.", region: "south" },
    { id: "al-iskan", name: "حي الإسكان", description: "خدمات عزل شاملة في حي الإسكان.", region: "south" },
    { id: "al-shimaisi", name: "حي الشميسي", description: "عزل فوم بولي يوريثان في حي الشميسي.", region: "south" },
    { id: "al-urayja", name: "حي العريجاء", description: "عزل مائي للأسطح في حي العريجاء.", region: "south" },
    { id: "al-urayja-west", name: "حي العريجاء الغربية", description: "عزل فوم في حي العريجاء الغربية.", region: "south" },
    { id: "al-urayja-east", name: "حي العريجاء الشرقية", description: "كشف تسربات في حي العريجاء الشرقية.", region: "south" },
    { id: "dhahrat-laban", name: "حي ظهرة لبن", description: "عزل أسطح احترافي في ظهرة لبن.", region: "south" },
    { id: "al-khaleej-south", name: "حي الخليج الجنوبي", description: "عزل فوم في حي الخليج الجنوبي.", region: "south" },
    { id: "al-misfat", name: "حي المصفاة", description: "خدمات عزل في حي المصفاة.", region: "south" },

    // ========== الأحياء الشرقية ==========
    { id: "al-rawdah", name: "حي الروضة", description: "عزل فوم وخزانات في حي الروضة الراقي.", region: "east", popular: true },
    { id: "al-malaz", name: "حي الملز", description: "خدمات عزل أسطح في حي الملز العريق.", region: "east", popular: true },
    { id: "al-naseem", name: "حي النسيم", description: "عزل مائي وحراري لمباني حي النسيم.", region: "east", popular: true },
    { id: "al-rabwah", name: "حي الربوة", description: "عزل فوم احترافي للفلل في حي الربوة.", region: "east", popular: true },
    { id: "al-nuzhah", name: "حي النزهة", description: "كشف تسربات وعزل في حي النزهة.", region: "east" },
    { id: "al-murooj", name: "حي المروج الشرقية", description: "عزل خزانات في حي المروج الشرقية.", region: "east" },
    { id: "al-khbar", name: "حي الخبر", description: "عزل أسطح مبلطة في حي الخبر.", region: "east" },
    { id: "al-rayyan", name: "حي الريان", description: "عزل فوم بولي يوريثان في حي الريان.", region: "east" },
    { id: "al-qadisiyah", name: "حي القادسية", description: "خدمات عزل شاملة في حي القادسية.", region: "east", popular: true },
    { id: "al-jaradiyah", name: "حي الجرادية", description: "عزل مائي في حي الجرادية.", region: "east" },
    { id: "al-andalus", name: "حي الأندلس", description: "عزل أسطح الفلل في حي الأندلس.", region: "east" },
    { id: "al-hamra-east", name: "حي الحمراء الشرقية", description: "عزل فوم في حي الحمراء الشرقية.", region: "east" },
    { id: "al-rabi", name: "حي الربيع", description: "عزل حراري ومائي في حي الربيع.", region: "east" },
    { id: "al-fayha", name: "حي الفيحاء", description: "كشف تسربات في حي الفيحاء.", region: "east" },
    { id: "al-muhammadiyah", name: "حي المحمدية", description: "عزل خزانات في حي المحمدية.", region: "east" },
    { id: "al-nahdah", name: "حي النهضة", description: "عزل أسطح في حي النهضة.", region: "east" },
    { id: "al-salam-east", name: "حي السلام الشرقي", description: "عزل فوم في حي السلام الشرقي.", region: "east" },
    { id: "al-quds", name: "حي القدس", description: "خدمات عزل احترافية في حي القدس.", region: "east" },
    { id: "ishbiliyah", name: "حي إشبيلية", description: "عزل مائي وحراري في حي إشبيلية.", region: "east" },
    { id: "ghirnatah", name: "حي غرناطة", description: "عزل أسطح غرناطة بأفضل المواد.", region: "east" },
    { id: "al-khaleej-east", name: "حي الخليج الشرقي", description: "عزل فوم بولي يوريثان في الخليج الشرقي.", region: "east" },
    { id: "al-manar", name: "حي المنار", description: "كشف تسربات وعزل في حي المنار.", region: "east" },
    { id: "al-jazirah-east", name: "حي الجزيرة الشرقية", description: "عزل خزانات في الجزيرة الشرقية.", region: "east" },
    { id: "al-nada", name: "حي الندى", description: "عزل أسطح مبلطة في حي الندى.", region: "east" },
    { id: "al-mughrizat", name: "حي المغرزات", description: "عزل فوم في حي المغرزات.", region: "east" },

    // ========== الأحياء الغربية ==========
    { id: "al-waha", name: "حي الواحة", description: "عزل فوم وأسطح في حي الواحة.", region: "west", popular: true },
    { id: "al-raid", name: "حي الرائد", description: "خدمات عزل احترافية في حي الرائد.", region: "west" },
    { id: "umm-al-hamam", name: "حي أم الحمام", description: "عزل مائي وحراري لمباني أم الحمام.", region: "west", popular: true },
    { id: "al-wurud", name: "حي الورود", description: "عزل فوم بولي يوريثان في حي الورود.", region: "west", popular: true },
    { id: "al-nafal", name: "حي النفل", description: "عزل خزانات وأسطح في حي النفل.", region: "west" },
    { id: "al-sulaimaniyah", name: "حي السليمانية", description: "عزل أسطح الفلل الفاخرة في السليمانية.", region: "west", popular: true },
    { id: "al-murabba", name: "حي المربع", description: "كشف تسربات في حي المربع.", region: "west" },
    { id: "al-futah", name: "حي الفوطة", description: "عزل مائي في حي الفوطة.", region: "west" },
    { id: "al-olaya", name: "حي العليا", description: "عزل فوم للمباني التجارية في العليا.", region: "west", popular: true },
    { id: "al-rahabi", name: "حي الرحابي", description: "عزل أسطح في حي الرحابي.", region: "west" },
    { id: "al-salama", name: "حي السلامة", description: "خدمات عزل شاملة في حي السلامة.", region: "west" },
    { id: "al-baraka", name: "حي البركة", description: "عزل فوم عالي الجودة في حي البركة.", region: "west" },
    { id: "al-faruq", name: "حي الفاروق", description: "عزل مائي وحراري في حي الفاروق.", region: "west" },
    { id: "al-nakhil-west", name: "حي النخيل الغربية", description: "عزل خزانات في حي النخيل الغربية.", region: "west" },
    { id: "al-rawabi", name: "حي الروابي", description: "عزل أسطح مبلطة في حي الروابي.", region: "west" },
    { id: "al-wizarat", name: "حي الوزارات", description: "عزل فوم بولي يوريثان للوزارات.", region: "west" },
    { id: "al-safarat", name: "حي السفارات", description: "عزل الأسطح المبلطة والفلل الفاخرة في السفارات.", region: "west", popular: true },
    { id: "al-mutamarat", name: "حي المؤتمرات", description: "عزل مائي في حي المؤتمرات.", region: "west" },
    { id: "al-sefarat-dist", name: "الحي الدبلوماسي", description: "عزل احترافي في الحي الدبلوماسي.", region: "west", popular: true },
    { id: "irqah", name: "حي عرقة", description: "عزل فوم للفلل في حي عرقة.", region: "west" },
    { id: "al-dirab", name: "حي الديراب", description: "عزل أسطح في حي الديراب.", region: "west" },
    { id: "namar", name: "حي نمار", description: "خدمات عزل في حي نمار.", region: "west" },
    { id: "al-hazim-west", name: "حي الحزم الغربي", description: "عزل مائي وحراري في الحزم الغربي.", region: "west" },
    { id: "laban", name: "حي لبن", description: "عزل فوم بولي يوريثان في حي لبن.", region: "west" },
    { id: "badr", name: "حي بدر", description: "عزل خزانات في حي بدر.", region: "west" },

    // ========== الأحياء الوسطى ==========
    { id: "al-dirah", name: "حي الديرة", description: "عزل مباني حي الديرة التاريخي.", region: "center" },
    { id: "al-batha", name: "حي البطحاء", description: "خدمات عزل في حي البطحاء.", region: "center" },
    { id: "al-manfuhah", name: "حي منفوحة", description: "عزل أسطح ومباني في منفوحة.", region: "center" },
    { id: "al-oud", name: "حي العود", description: "عزل فوم في حي العود.", region: "center" },
    { id: "al-maathar", name: "حي المعذر", description: "عزل مائي وحراري في حي المعذر.", region: "center" },
    { id: "al-maathar-north", name: "حي المعذر الشمالي", description: "عزل أسطح في المعذر الشمالي.", region: "center" },
    { id: "al-dakhil", name: "حي الدخل المحدود", description: "عزل بأسعار مناسبة في الدخل المحدود.", region: "center" },
    { id: "al-murqab", name: "حي المرقب", description: "عزل فوم بولي يوريثان في المرقب.", region: "center" },
    { id: "al-king-fahd", name: "حي الملك فهد", description: "عزل خزانات في حي الملك فهد.", region: "center" },
    { id: "al-king-faisal", name: "حي الملك فيصل", description: "عزل أسطح مبلطة في حي الملك فيصل.", region: "center" },
    { id: "al-ulaishah", name: "حي العليشة", description: "عزل مائي في حي العليشة.", region: "center" },
    { id: "al-thayyib", name: "حي ثليم", description: "عزل فوم في حي ثليم.", region: "center" },
    { id: "al-rabiah", name: "حي الرابية", description: "خدمات عزل احترافية في الرابية.", region: "center" },
    { id: "al-king-abdullah", name: "حي الملك عبدالله", description: "عزل مائي وحراري في حي الملك عبدالله.", region: "center" },
    { id: "al-sudan", name: "حي السودان", description: "عزل أسطح في حي السودان.", region: "center" },
    { id: "alyamamah", name: "حي اليمامة", description: "عزل فوم بولي يوريثان في حي اليمامة.", region: "center" },
    { id: "al-shumaisi", name: "حي الشماسي", description: "عزل خزانات في حي الشماسي.", region: "center" },
    { id: "al-dabab", name: "حي الدبَّاب", description: "عزل مائي في حي الدبَّاب.", region: "center" },
    { id: "al-ghanamiyah", name: "حي الغنامية", description: "عزل أسطح في حي الغنامية.", region: "center" },
    { id: "al-sharafiyah", name: "حي الشرفية", description: "عزل فوم في حي الشرفية.", region: "center" },

    // ========== ضواحي الرياض ==========
    { id: "diriyah", name: "الدرعية", description: "عزل فوم وأسطح في الدرعية التاريخية.", region: "suburbs", popular: true },
    { id: "al-kharj", name: "الخرج", description: "خدمات عزل شاملة في محافظة الخرج.", region: "suburbs", popular: true },
    { id: "al-muzahimiyah", name: "المزاحمية", description: "عزل مائي وحراري في المزاحمية.", region: "suburbs" },
    { id: "al-majmaah", name: "المجمعة", description: "عزل أسطح ومباني في المجمعة.", region: "suburbs" },
    { id: "hawtat-bani-tamim", name: "حوطة بني تميم", description: "عزل فوم في حوطة بني تميم.", region: "suburbs" },
    { id: "al-aflaj", name: "الأفلاج", description: "خدمات عزل في الأفلاج.", region: "suburbs" },
    { id: "al-quwaiiyah", name: "القويعية", description: "عزل أسطح في القويعية.", region: "suburbs" },
    { id: "wadi-dawasir", name: "وادي الدواسر", description: "عزل فوم بولي يوريثان في وادي الدواسر.", region: "suburbs" },
    { id: "shaqra", name: "شقراء", description: "عزل مائي وحراري في شقراء.", region: "suburbs" },
    { id: "thadiq", name: "ثادق", description: "خدمات عزل في ثادق.", region: "suburbs" },
    { id: "huraymila", name: "حريملاء", description: "عزل أسطح في حريملاء.", region: "suburbs" },
    { id: "darma", name: "ضرماء", description: "عزل فوم في ضرماء.", region: "suburbs" },
    { id: "ramah", name: "رماح", description: "عزل خزانات في رماح.", region: "suburbs" },
    { id: "al-hayer", name: "الحاير", description: "عزل مائي في الحاير.", region: "suburbs" },
    { id: "al-amariah", name: "العمارية", description: "عزل أسطح مبلطة في العمارية.", region: "suburbs" },
    { id: "sudair", name: "سدير", description: "عزل فوم بولي يوريثان في سدير.", region: "suburbs" },
    { id: "al-ghat", name: "الغاط", description: "خدمات عزل في الغاط.", region: "suburbs" },
    { id: "zulfi", name: "الزلفي", description: "عزل مائي وحراري في الزلفي.", region: "suburbs" },
    { id: "dawadmi", name: "الدوادمي", description: "عزل أسطح ومباني في الدوادمي.", region: "suburbs" },
    { id: "marat", name: "مرات", description: "عزل فوم في مرات.", region: "suburbs" },
]

// الأحياء الأكثر طلبًا (للعرض في الصفحات الداخلية)
export const popularNeighborhoods = neighborhoods.filter(n => n.popular)

// تجميع الأحياء حسب المنطقة
export function getNeighborhoodsByRegion(region: NeighborhoodRegion): Neighborhood[] {
    return neighborhoods.filter(n => n.region === region)
}

// البحث في الأحياء
export function searchNeighborhoods(query: string): Neighborhood[] {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return neighborhoods
    return neighborhoods.filter(n =>
        n.name.includes(query) ||
        n.description.includes(query)
    )
}
