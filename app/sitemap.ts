import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anuar.best"
  const routes = [
    "",
    "/careers",
    "/research",
    "/competitions",
    "/community",
    "/media",
    "/media/kazpravda",
    "/media/limon",
    "/media/steppe",
    "/media/data-science-job-market",
    "/media/from-math-olympiads-to-ml",
    "/talks",
  ]

  const now = new Date().toISOString()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.6,
  })) satisfies MetadataRoute.Sitemap
}
