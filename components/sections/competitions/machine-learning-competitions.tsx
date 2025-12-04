import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Youtube, FileText } from "lucide-react"
import Link from "next/link"
import mlData from "@/locals/en/competitions/ml.json"
import Image from "next/image"

// Helper function to get the correct icon component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "ExternalLink":
      return <ExternalLink className="mr-2 h-4 w-4" />
    case "Youtube":
      return <Youtube className="mr-2 h-4 w-4" />
    case "GitHub":
      return <Github className="mr-2 h-4 w-4" />
    case "FileText":
      return <FileText className="mr-2 h-4 w-4" />
    default:
      return <ExternalLink className="mr-2 h-4 w-4" />
  }
}

// Helper function to get medal emoji
const getMedalEmoji = (medal: string) => {
  switch (medal) {
    case "gold":
      return "🥇"
    case "silver":
      return "🥈"
    case "bronze":
      return "🥉"
    default:
      return "🏆"
  }
}

export function MachineLearningCompetitions() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground mb-8">{mlData.intro}</p>
      </div>

      {mlData.competitions.map((competition, index) => (
        <div key={index} className="relative h-full rounded-lg p-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"></div>
          <Card className="relative bg-card overflow-hidden">
            <div className="md:grid md:grid-cols-[1fr_300px] gap-6">
              <div>
                <CardHeader>
                  <CardTitle className="text-2xl">{competition.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {competition.place === "1"
                      ? `1st Place (${competition.year})`
                      : `${competition.place}${competition.place.endsWith("1") ? "st" : competition.place.endsWith("2") ? "nd" : competition.place.endsWith("3") ? "rd" : "th"} Place (${competition.year})`}{" "}
                    - Out of {competition.totalTeams} Teams
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{competition.description}</p>
                  {competition.additionalInfo && <p>{competition.additionalInfo}</p>}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {competition.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        {getIconComponent(link.icon)}
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </div>
              <div className="relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">{getMedalEmoji(competition.medal)}</div>
                    <div className="text-xl font-semibold">
                      {competition.medal === "gold"
                        ? competition.place === "1"
                          ? "1st Place"
                          : "Gold Medal"
                        : competition.medal === "silver"
                          ? "Silver Medal"
                          : "Bronze Medal"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {competition.place === "1"
                        ? `Out of ${competition.totalTeams} Teams`
                        : `${competition.place}${competition.place.endsWith("1") ? "st" : competition.place.endsWith("2") ? "nd" : competition.place.endsWith("3") ? "rd" : "th"} Place out of ${competition.totalTeams} Teams`}
                    </div>
                    {competition.specialAchievement && (
                      <div className="mt-4 px-4 py-2 bg-primary/10 rounded-md text-sm">
                        {competition.specialAchievement}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}

      <div className="relative h-full rounded-lg p-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"></div>
        <Card className="relative bg-card overflow-hidden">
          <div className="md:grid md:grid-cols-[1fr_400px] gap-6">
            <div className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">ODS Community Recognition</CardTitle>
                <CardDescription>ODS Community Award</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Awarded the ML Competition Progress Award at the annual Open Data Science conference in Moscow,
                  recognizing consistent achievements and contributions to the machine learning competition community.
                </p>
              </CardContent>
            </div>
            <div className="relative bg-muted aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J0y3cf4moLeYEPWjrdThXYHc7b9Ncc.png"
                alt="Anuar Aimoldin holding the ML Competition Progress Award at ODS conference"
                fill
                className="object-cover object-center"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
