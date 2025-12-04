document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the HTML content
    const response = await fetch("/zerttey-content.html")
    const html = await response.text()

    // Create a temporary container to parse the HTML
    const tempContainer = document.createElement("div")
    tempContainer.innerHTML = html

    // Find the article and preview elements
    const articleElement = tempContainer.querySelector(".zerttey-article")
    const previewElement = tempContainer.querySelector(".zerttey-preview")

    // Find the containers where we want to add the content
    const mediaContainer = document.querySelector(".container .space-y-12")
    const publicationsContainer = document.querySelector("#publications .mx-auto.grid")

    // Add the article to the media page if we're on that page
    if (mediaContainer && articleElement) {
      mediaContainer.appendChild(articleElement)

      // Add event listener for the read more button
      const readMoreButton = document.getElementById("zerttey-read-more")
      const fullText = document.getElementById("zerttey-full-text")

      if (readMoreButton && fullText) {
        readMoreButton.addEventListener("click", () => {
          if (fullText.style.display === "none") {
            fullText.style.display = "block"
            readMoreButton.textContent = "Hide Full Text"
          } else {
            fullText.style.display = "none"
            readMoreButton.textContent = "Read Full Interview"
          }
        })
      }
    }

    // Add the preview to the publications section if we're on the home page
    if (publicationsContainer && previewElement) {
      publicationsContainer.appendChild(previewElement)
    }
  } catch (error) {
    console.error("Error injecting Zerttey content:", error)
  }
})
