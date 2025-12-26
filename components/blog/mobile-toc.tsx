"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, ChevronLeft } from "lucide-react"

interface Section {
    id: string;
    title: string;
    type: "text" | "faq" | "pros_cons" | "cta" | "intro_cards" | "problems";
    content: string[];
}

export function MobileTableOfContents({ sections }: { sections: Section[] }) {
    if (sections.length === 0) return null;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        const target = document.getElementById(sectionId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="lg:hidden mb-12">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="toc" className="bg-muted border border-border rounded-[24px] overflow-hidden shadow-sm">
                    <AccordionTrigger className="text-foreground font-bold font-tajawal hover:no-underline px-6 py-5 data-[state=open]:bg-muted/50 transition-colors">
                        <span className="flex items-center gap-3 text-base">
                            <Menu className="w-5 h-5 text-primary" />
                            فهرس المحتوى
                            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full mr-1">
                                {sections.length}
                            </span>
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-4 pt-1 bg-card/50">
                        <nav className="flex flex-col space-y-1 max-h-[50vh] overflow-y-auto custom-scrollbar p-1">
                            {sections.map((section, idx) => (
                                <a
                                    key={idx}
                                    href={`#${section.id}`}
                                    onClick={(e) => handleClick(e, section.id)}
                                    className="group flex items-center justify-between text-sm md:text-base font-medium text-muted-foreground hover:text-primary py-3.5 px-4 rounded-xl hover:bg-muted transition-all font-tajawal text-right active:scale-[0.98]"
                                >
                                    <span className="line-clamp-1">{section.title}</span>
                                    <ChevronLeft className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </nav>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
