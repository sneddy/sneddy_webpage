// This script will run on the client side to add the Zerttey article to the page
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the article data
    const response = await fetch("/zerttey-article.json")
    const data = await response.json()

    // Find the container where we want to add the article
    const mediaContainer = document.querySelector(".container .space-y-12")
    const publicationsContainer = document.querySelector("#publications .mx-auto.grid")

    if (mediaContainer) {
      // Create the article element for the media page
      const articleElement = document.createElement("div")
      articleElement.className = "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
      articleElement.innerHTML = `
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="text-2xl font-semibold">${data.title}</h3>
          <p class="text-lg text-muted-foreground">${data.subtitle}</p>
        </div>
        <div class="p-6 pt-0 space-y-6">
          <div class="flex justify-center">
            <div class="relative w-full max-w-md aspect-video bg-muted rounded-md overflow-hidden">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5PxnGy7lO2v5x14ZQBX2IPszGdaJH9.png" alt="Portrait of Anuar Aimoldin" class="object-cover absolute inset-0 w-full h-full" />
            </div>
          </div>
          <p class="text-lg">${data.preview}</p>
          <div class="border-t pt-6 mt-8">
            <div class="bg-muted p-4 rounded-lg">
              <h4 class="font-medium mb-2">About the source:</h4>
              <p class="text-sm text-muted-foreground mb-4">
                <strong>${data.source.name}</strong> is the ${data.source.description}
              </p>
              <a href="${data.source.url}" target="_blank" class="inline-flex items-center text-primary hover:underline">
                Read the original article
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-4 w-4">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `

      // Add the article to the media page
      mediaContainer.appendChild(articleElement)
    }

    if (publicationsContainer) {
      // Create the preview element for the publications section
      const previewElement = document.createElement("div")
      previewElement.className = "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
      previewElement.innerHTML = `
        <div class="flex flex-col">
          <div class="p-6">
            <div class="flex flex-col space-y-1.5 p-0">
              <h3 class="text-2xl font-semibold mb-2">${data.title}</h3>
              <p class="text-lg text-muted-foreground">${data.subtitle}</p>
            </div>
            <div class="p-0 mt-4">
              <div class="text-sm text-muted-foreground mb-4">
                <strong>${data.source.name}</strong> — ${data.source.description.split(",")[0]}
              </div>
              <p class="mb-4">${data.preview}</p>
              <a href="/media" class="inline-block mb-8">
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  ${data.readMoreText}
                </button>
              </a>
            </div>
          </div>
          <div class="flex justify-center pb-6">
            <div class="relative w-full max-w-md aspect-video bg-muted">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5PxnGy7lO2v5x14ZQBX2IPszGdaJH9.png" alt="Portrait of Anuar Aimoldin" class="object-cover absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      `

      // Add the preview to the publications section
      publicationsContainer.appendChild(previewElement)
    }
  } catch (error) {
    console.error("Error adding Zerttey article:", error)
  }
})
