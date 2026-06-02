document.addEventListener("DOMContentLoaded", async () => {
    const galleryContainer = document.getElementById("instagram-gallery-grid");
    if (!galleryContainer) return;

    try {
        // Fetch the gallery data from the Vercel serverless function
        const response = await fetch("/api/gallery");

        if (!response.ok) {
            throw new Error(`Failed to fetch gallery: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.length === 0) {
            galleryContainer.innerHTML = '<p class="text-center w-100">No recent posts available.</p>';
            return;
        }

        let html = "";
        data.forEach(item => {
            const mediaUrl = item.gallery_public_url || item.thumbnail_url || item.media_url;
            const permalink = item.permalink || "https://www.instagram.com/made_products/";
            
            html += `
                <div class="col-xl-3 col-lg-3 col-md-4 col-6 mb-4 text-center">
                    <a href="${permalink}" target="_blank" rel="noopener noreferrer">
                        <img class="rounded bg-white img-fluid shadow-sm" style="object-fit: cover; height: 250px; width: 100%;" src="${mediaUrl}" alt="Instagram Post">
                    </a>
                </div>
            `;
        });

        galleryContainer.innerHTML = html;

    } catch (error) {
        console.error("Error fetching Instagram gallery:", error);
        galleryContainer.innerHTML = '<p class="text-center w-100 text-danger">Failed to load gallery.</p>';
    }
});
