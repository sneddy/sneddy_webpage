import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              AI innovator & leader with 10+ years of expertise in AI, ML, and Computer Vision. Built top-tier R&D teams
              and launched AI/ML solutions globally across industries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Brain className="w-12 h-12 text-primary" />
              <CardTitle>ML Expertise</CardTitle>
              <CardDescription>
                Specialized in Deep Learning, Computer Vision, and NLP with proven results in global competitions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Kaggle Competitions Master (#14 out of 200,000 users)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-12 h-12 text-primary" />
              <CardTitle>Community Leader</CardTitle>
              <CardDescription>Founded and growing Kazakhstan's largest AI community - DSML KZ</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Organizing workshops, meetups, and fostering knowledge sharing in AI/ML</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code className="w-12 h-12 text-primary" />
              <CardTitle>Tech Stack</CardTitle>
              <CardDescription>Proficient in modern ML frameworks and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Python, PyTorch, TensorFlow, FastAPI, OpenCV</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
