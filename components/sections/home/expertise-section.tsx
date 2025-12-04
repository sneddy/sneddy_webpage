import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Trophy, Users } from "lucide-react"
import expertiseData from "@/locals/en/home/expertise.json"

export function ExpertiseSection() {
  const icons = [
    <Brain key="brain" className="w-12 h-12 text-primary mb-4" />,
    <Trophy key="trophy" className="w-12 h-12 text-primary mb-4" />,
    <Users key="users" className="w-12 h-12 text-primary mb-4" />,
  ]

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Expertise</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized skills and experience in AI, machine learning, and leadership
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {expertiseData.cards.map((card, index) => (
            <div key={index} className="relative h-full rounded-lg p-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"></div>
              <Card className="relative h-full bg-card">
                <CardHeader>
                  {icons[index]}
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {index === 0 ? (
                    <p className="text-muted-foreground">
                      10+ years of expertise in AI, ML, and Computer Vision. Published in The Lancet Digital Health
                      (Impact Factor 98.4).
                    </p>
                  ) : (
                    <p className="text-muted-foreground">{card.description}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
