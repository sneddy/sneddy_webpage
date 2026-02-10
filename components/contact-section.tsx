import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's connect and discuss AI, ML, or potential collaborations
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6" />
                <Link href="mailto:aimoldin@gmail.com" className="hover:text-primary">
                  aimoldin@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="h-6 w-6" />
                <Link href="https://www.linkedin.com/in/anuar-aimoldin/" target="_blank" className="hover:text-primary">
                  linkedin.com/in/anuar-aimoldin
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="h-6 w-6" />
                <Link href="https://github.com/sneddy" target="_blank" className="hover:text-primary">
                  github.com/sneddy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
