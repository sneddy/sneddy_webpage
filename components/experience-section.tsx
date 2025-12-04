import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A track record of success in AI/ML across various industries
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Careem</CardTitle>
              <CardDescription>2023 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Optimized food delivery operations with priority-based dispatching</li>
                <li>Improved ETA accuracy by 10%</li>
                <li>Developed courier scheduling system ($1.5M savings)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Checklens</CardTitle>
              <CardDescription>2021 - 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Built real-time product recognition for 15K+ items</li>
                <li>Automated ML pipeline including video ingestion and annotation</li>
                <li>Worked with major retailers like IKEA, Netto, and Lidl</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Harrison.ai</CardTitle>
              <CardDescription>2020 - 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Trained AI models for Annalise CXR, detecting 120+ pathologies</li>
                <li>Improved diagnostic accuracy by 45%</li>
                <li>Deployed in 250+ clinics</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>BTS Digital</CardTitle>
              <CardDescription>2018 - 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Established ML/AI function</li>
                <li>Built leading AI team in the region</li>
                <li>Launched facial recognition with 2M+ verifications/month</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
