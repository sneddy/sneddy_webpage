"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Play } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function MediaSection() {
  // State to track which videos are playing
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({})

  // Toggle video play state
  const toggleVideo = (videoId: string) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }))
  }

  // Featured talks data
  const featuredTalks = [
    {
      title: "C-MIMI 2019 (Austin, Texas)",
      description: "Winning solution of the Pneumothorax Segmentation Challenge",
      videoId: "Wuf0wE3Mrxg",
    },
    {
      title: "ML for the Youngest",
      description: "Beginners talk about different directions of machine learning",
      videoId: "uKjJENmhoSw",
    },
  ]

  return (
    <section id="media" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Public Speaking</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Talks, podcasts, and presentations about AI, ML, and technology
              </p>
            </div>
          </div>
          <div className="grid gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <Youtube className="w-8 h-8 text-primary" />
                <CardTitle>Conference Talks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {featuredTalks.map((talk) => (
                  <div key={talk.videoId} className="space-y-2">
                    <h4 className="font-medium">{talk.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{talk.description}</p>

                    <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
                      {playingVideos[talk.videoId] ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1`}
                          title={talk.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                        ></iframe>
                      ) : (
                        <>
                          <Image
                            src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`}
                            alt={talk.title}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => toggleVideo(talk.videoId)}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                          >
                            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                              <Play className="h-6 w-6 text-white fill-white ml-1" />
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Podcasts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Kitchen Podcast</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mathematics, "Smekalochka," and Artificial Intelligence
                  </p>
                  <iframe
                    src="https://www.listennotes.com/podcasts/kitchen-podcast/2-ануар-аймолдин-поможет-ли-RJvobQ6wVFZ/embed/"
                    height="180px"
                    width="100%"
                    style={{ width: "1px", minWidth: "100%" }}
                    frameBorder="0"
                    scrolling="no"
                  />
                </div>
                <div>
                  <h4 className="font-medium">RCG Podcast</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A casual conversation about data science and machine learning
                  </p>
                  <iframe
                    src="https://zvuk.com/embed/episode?id=85052036"
                    height="450"
                    width="100%"
                    style={{ border: "none" }}
                    frameBorder="0"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
