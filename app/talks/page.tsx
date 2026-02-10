"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, Search, Filter, Users, Mic, Video, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import talksData from "@/locals/en/talks/index.json"

// Enhanced video card component with modern design
const VideoCard = ({ talk, index, onPlay, isPlaying }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-xl p-[2px] overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/40 hover:to-secondary/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0 overflow-hidden">
          <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1&rel=0`}
                title={talk.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <>
                <Image
                  src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`}
                  alt={talk.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPlay(talk.videoId)}
                  className="absolute inset-0 flex items-center justify-center group/play"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover/play:bg-primary transition-colors duration-300">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </div>
                </motion.button>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-0">
                    <Video className="w-3 h-3 mr-1" />
                    Video
                  </Badge>
                </div>
              </>
            )}
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
              {talk.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{talk.event}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>Conference Talk</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

// Enhanced podcast card component
const PodcastCard = ({ podcast, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <div className="relative h-full rounded-xl p-[2px] overflow-hidden bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Card className="relative h-full bg-card/95 backdrop-blur-sm border-0">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors duration-300">
                <Mic className="w-5 h-5 text-purple-600" />
              </div>
              <Badge variant="outline" className="text-xs">
                Podcast
              </Badge>
            </div>
            <CardTitle className="text-lg group-hover:text-purple-600 transition-colors duration-300">
              {podcast.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 flex-grow">
            <p className="text-sm text-muted-foreground">{podcast.description}</p>
            <div className="w-full">
              {podcast.embedUrl.includes("listennotes.com") ? (
                <iframe
                  src={podcast.embedUrl}
                  height="180"
                  width="100%"
                  style={{ width: "1px", minWidth: "100%" }}
                  frameBorder="0"
                  scrolling="no"
                  className="rounded-lg"
                />
              ) : podcast.embedUrl.includes("zvuk.com") ? (
                <iframe
                  src={podcast.embedUrl}
                  height="200"
                  width="100%"
                  style={{ border: "none" }}
                  frameBorder="0"
                  className="rounded-lg"
                />
              ) : (
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href={podcast.embedUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Listen to Podcast
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export default function TalksPage() {
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<"all" | "talks" | "podcasts">("all")

  // Filter and search functionality
  const filteredTalks = useMemo(() => {
    return talksData.talks.filter(
      (talk) =>
        talk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talk.event.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  const filteredPodcasts = useMemo(() => {
    return talksData.podcasts.filter(
      (podcast) =>
        podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        podcast.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  const toggleVideo = (videoId: string) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }))
  }

  const showTalks = activeFilter === "all" || activeFilter === "talks"
  const showPodcasts = activeFilter === "all" || activeFilter === "podcasts"

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {talksData.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing knowledge through conference presentations, workshops, and podcast discussions about AI, machine
              learning, and data science.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search talks and podcasts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary/40"
                />
              </div>
              <div className="flex gap-2">
                {["all", "talks", "podcasts"].map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter as typeof activeFilter)}
                    className="capitalize"
                  >
                    <Filter className="w-3 h-3 mr-1" />
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-16">
            {/* Conference Talks Section */}
            <AnimatePresence>
              {showTalks && filteredTalks.length > 0 && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Conference Talks</h2>
                    <Badge variant="secondary" className="ml-auto">
                      {filteredTalks.length} talks
                    </Badge>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredTalks.map((talk, index) => (
                      <VideoCard
                        key={talk.videoId}
                        talk={talk}
                        index={index}
                        onPlay={toggleVideo}
                        isPlaying={playingVideos[talk.videoId]}
                      />
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Podcast Appearances Section */}
            <AnimatePresence>
              {showPodcasts && filteredPodcasts.length > 0 && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                      <Mic className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold">Podcast Appearances</h2>
                    <Badge variant="secondary" className="ml-auto">
                      {filteredPodcasts.length} episodes
                    </Badge>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    {filteredPodcasts.map((podcast, index) => (
                      <PodcastCard key={index} podcast={podcast} index={index} />
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* No Results State */}
            {((showTalks && filteredTalks.length === 0) || (showPodcasts && filteredPodcasts.length === 0)) &&
              searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters</p>
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear search
                  </Button>
                </motion.div>
              )}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="relative rounded-2xl p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Interested in having me speak?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to share knowledge about AI, machine learning, and data science. Feel free to reach
                out for speaking opportunities.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:aimoldin@gmail.com">Get in touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
