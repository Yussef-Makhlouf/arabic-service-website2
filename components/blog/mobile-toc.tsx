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
        <div className="lg:hidden">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="toc" className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
                    <AccordionTrigger className="text-foreground font-bold font-heading hover:no-underline px-5 py-4 data-[state=open]:bg-muted/50 transition-colors">
                        <span className="flex items-center gap-3 text-base">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                                <Menu className="w-4 h-4 text-white" />
                            </div>
                            <span>محتويات المقال</span>
                            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                                {sections.length}
                            </span>
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-0 pt-0 bg-muted/20">
                        <nav className="divide-y divide-border">
                            {sections.map((section, idx) => (
                                <a
                                    key={idx}
                                    href={`#${section.id}`}
                                    onClick={(e) => handleClick(e, section.id)}
                                    className="group flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary py-4 px-5 hover:bg-muted/50 transition-all text-right active:scale-[0.98]"
                                >
                                    <span className="line-clamp-1">{section.title}</span>
                                    <ChevronLeft className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all" />
                                </a>
                            ))}
                        </nav>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
