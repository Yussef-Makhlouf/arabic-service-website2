import { NeighborhoodsShowcase } from "@/components/neighborhoods/neighborhoods-showcase"

export default function TestPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container py-10">
                <h1 className="text-2xl font-bold mb-8 text-center text-muted-foreground">
                    Neighborhoods Component Preview
                </h1>
            </div>
            <NeighborhoodsShowcase />
        </main>
    )
}
