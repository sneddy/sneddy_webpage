"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Newspaper, Briefcase, Code, Youtube, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Simplified card component with consistent styling
const FeatureCard = ({ icon: Icon, title, description, stats, linkText, linkUrl }) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="h-full">
      <div className="relative h-full rounded-lg p-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#00b2b2]"></div>
        <Card className="flex flex-col h-full relative bg-card">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <p className="mb-4 text-muted-foreground">{description}</p>
            {stats && (
              <Badge variant="secondary" className="self-start mb-4 px-3 py-1 text-xs font-medium">
                {stats}
              </Badge>
            )}
            <div className="mt-auto pt-4">
              <Button asChild size="lg" className="w-full">
                <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
                  {linkText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export function CommunitySection() {
  return (
    <section id="community" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,174,199,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,243,42,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,199,0.05),transparent_70%)]"></div>
      </div>

      <div className="container px-4 md:px-6">
        {/* Combined introduction text */}
        <div className="mb-16">
          <div className="w-full">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 md:p-8 rounded-xl shadow-sm">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Outside of careers, competitions, and research, an important chapter of my life is{" "}
                  <span className="font-semibold text-primary">DSMLKZ</span>, Kazakhstan's data science community.
                </p>

                <div>
                  <p className="text-lg leading-relaxed mb-3">
                    I started DSMLKZ in <span className="font-semibold">October 2017</span>, when data science was
                    almost unknown in our region:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-lg leading-relaxed">
                    <li>no communities</li>
                    <li>no career opportunities</li>
                    <li>no events</li>
                    <li>
                      no even a general understanding from the business of how it can be applicable in the real world
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  At the moment I already have 2 years of unique experience in applying machine learning in the
                  industry.
                </p>

                <p className="text-lg leading-relaxed">
                  My goal was to create a space for sharing ideas, collectively working through online courses,
                  supporting each other, and providing career insights—so others wouldn't face the same challenges I
                  did.
                </p>

                <p className="text-lg leading-relaxed">
                  Over time, DSMLKZ grew from a small Telegram channel into a{" "}
                  <span className="font-semibold">thriving network of thousands</span> of learners and professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          <motion.div
            className="relative aspect-video md:aspect-square bg-muted rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c5alih8u92pl9KV0em8EbYjdrhxd1.png"
              alt="DSML KZ community event with attendees gathered for a presentation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            className="relative aspect-video md:aspect-square bg-muted rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZYLOd72dZd0jE7b41FtRu8N6XcJ3N2.png"
              alt="DSML KZ community members collaborating during a workshop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div
            className="relative aspect-video md:aspect-square bg-muted rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZdhcYtibK6gcSxgE4NmJ9xWGw8oCVj.png"
              alt="DSML KZ workshop with participants engaged in learning activities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Today text and hero image */}
        <div className="mb-16">
          <div className="w-full mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-10 blur rounded-lg"></div>
              <div className="relative bg-background/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-primary/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Today
                </h2>
                <p className="text-xl leading-relaxed">
                  We are the central hub for Data Science and Machine Learning enthusiasts in Kazakhstan, connecting
                  professionals, sharing knowledge, and building the future of AI in Central Asia.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[21/9] bg-muted rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tjLx0MFtVc68MEdcVMfxDzQLZ29Ntm.png"
              alt="DSML Kazakhstan hero image showing 'Deeper Is Better' text with geometric patterns and AI-inspired artwork"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start text-left mb-16"
        >
          {/* Current State */}
          <Card className="w-full overflow-hidden border border-border shadow-md mb-10">
            <div className="md:grid md:grid-cols-[1fr_1fr] gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">DSML KZ Community Founder</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Founded and leading Kazakhstan's largest AI community, fostering knowledge sharing and professional
                  growth in AI/ML.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Established in October 2017, DSML KZ actively shapes the AI ecosystem in Central Asia through a
                  thriving network of community channels, media platforms, and career resources.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  The heart and entrance point to the community is our Web Portal!
                </p>
                <div className="flex flex-wrap gap-3 my-4">
                  <Badge variant="outline" className="px-3 py-1.5 text-sm">
                    10,000+ Members
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1.5 text-sm">
                    200+ Events
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1.5 text-sm">
                    5+ Channels
                  </Badge>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link
                      href="https://dsml.kz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsml_logo-iqk3NANdn7EIg34HpqcWwVMqbTiR0B.png"
                        alt="DSML KZ Logo"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[400px] bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-c5alih8u92pl9KV0em8EbYjdrhxd1.png"
                  alt="DSML KZ community event showing a packed audience attending a technical presentation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Card>

          {/* Channel Cards - Completely rebuilt */}
          <div className="w-full space-y-12">
            {/* Second row - Discussion Hub, News Feed, DS Jobs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Discussion Hub */}
              <FeatureCard
                icon={MessageCircle}
                title="Discussion Hub"
                description="Join our active Telegram community with specialized topics and AI-generated business cards for members."
                stats="1,500+ active members"
                linkText="Register to Join"
                linkUrl="https://dsml.kz"
              />

              {/* News Feed */}
              <FeatureCard
                icon={Newspaper}
                title="News Feed"
                description="Stay updated with curated content on Data Science, AI research, and industry developments."
                stats="3,363 subscribers"
                linkText="Subscribe"
                linkUrl="https://t.me/main_ds_kz"
              />

              {/* DS Jobs */}
              <FeatureCard
                icon={Briefcase}
                title="DS Jobs"
                description="Discover ML and Data Science opportunities with AI-enhanced job descriptions and visuals."
                stats="7,450 subscribers"
                linkText="View Opportunities"
                linkUrl="https://t.me/ml_jobs_kz"
              />
            </div>

            {/* Third row - IT Jobs, YouTube Channel, LinkedIn Page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* IT Jobs */}
              <FeatureCard
                icon={Code}
                title="IT Jobs"
                description="Find software and IT positions with structured descriptions generated by our custom AI."
                stats="5,000+ subscribers"
                linkText="Browse Jobs"
                linkUrl="https://t.me/it_jobs_kz"
              />

              {/* YouTube Channel */}
              <FeatureCard
                icon={Youtube}
                title="YouTube Channel"
                description="Watch tutorials, talks, and interviews about Data Science in Russian and Kazakh languages."
                stats="Educational content"
                linkText="Subscribe"
                linkUrl="https://www.youtube.com/c/DataScienceKazakhstan"
              />

              {/* LinkedIn Page */}
              <FeatureCard
                icon={Linkedin}
                title="LinkedIn Page"
                description="Connect with industry professionals and follow the latest updates from our community."
                stats="1,200 followers"
                linkText="Follow Us"
                linkUrl="https://linkedin.com/company/dsmlkz"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
