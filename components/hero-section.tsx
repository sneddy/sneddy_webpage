import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 min-h-[90vh] flex items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Anuar Aimoldin
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ML Engineer, Kaggle Master & Founder of DSML KZ Community
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://github.com/sneddy" target="_blank">
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/anuar-aimoldin/" target="_blank">
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:aimoldin@gmail.com">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_photo.png-pkjLRhHAiOTmMKrxYLATtKtoBn3BnI.jpeg"
              alt="Profile photo"
              width={500}
              height={500}
              className="aspect-square rounded-full object-cover border-8 border-primary"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
