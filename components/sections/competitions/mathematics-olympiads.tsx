import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import mathData from "@/locals/en/competitions/math.json"

export function MathematicsOlympiads() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground mb-8">{mathData.intro}</p>
      </div>

      {mathData.olympiads.map((olympiad, index) => (
        <div key={index} className="relative h-full rounded-lg p-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
          <Card className="relative bg-card overflow-hidden">
            <div className="md:grid md:grid-cols-[1fr_300px] gap-6">
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl">{olympiad.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {olympiad.result} ({olympiad.year})
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{olympiad.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {olympiad.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </div>
              <div className="relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">{olympiad.medalEmoji}</div>
                    <div className="text-xl font-semibold">{olympiad.result}</div>
                    <div className="text-sm text-muted-foreground">
                      {olympiad.title.includes("APMO") ? "APMO" : "Silk Road"} {olympiad.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
