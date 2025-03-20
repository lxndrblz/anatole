document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    searchResults.className = "post animated fadeInDown";
    const query = new URLSearchParams(window.location.search).get("q");

    // Fetch the JSON index
    fetch("/index.json")
        .then(response => response.json())
        .then(data => {
            if (query) {
                searchInput.value = query; // Populate the search box with the query
                const results = data.filter(page =>
                    page.title.toLowerCase().includes(query.toLowerCase()) ||
                    page.description.toLowerCase().includes(query.toLowerCase()) ||
                    page.content.toLowerCase().includes(query.toLowerCase()) ||
                    (page.tags && page.tags.some(tag => tag.toLowerCase() === query.toLowerCase()))
                );

                // Clear previous results
                searchResults.innerHTML = "";

                // Display results
                if (results.length > 0) {
                    results.forEach(result => {
                        const post = document.createElement("div");
                        
                        // Thumbnail
                        if (result.thumbnail) {
                            const thumbnailWrapper = document.createElement("div");
                            thumbnailWrapper.className = "post__thumbnail-wrapper";

                            const thumbnailLink = document.createElement("a");
                            thumbnailLink.href = result.url;

                            const thumbnailImage = document.createElement("img");
                            thumbnailImage.className = "post__thumbnail";

                            // Handle both absolute and relative URLs for the thumbnail
                            if (result.thumbnail.startsWith("http://") || result.thumbnail.startsWith("https://")) {
                                thumbnailImage.src = result.thumbnail; // Absolute URL
                            } else {
                                const baseUrl = document.querySelector("base")?.href || "/";
                                thumbnailImage.src = new URL(result.thumbnail, baseUrl).href; // Relative URL
                            }

                            thumbnailImage.alt = "Thumbnail image";
                            thumbnailImage.loading = "lazy";

                            thumbnailLink.appendChild(thumbnailImage);
                            thumbnailWrapper.appendChild(thumbnailLink);
                            post.appendChild(thumbnailWrapper);
                        }

                        // Content
                        const content = document.createElement("div");
                        content.className = "post__content";

                        const title = document.createElement("h3");
                        const titleLink = document.createElement("a");
                        titleLink.href = result.url;
                        titleLink.textContent = result.title;
                        title.appendChild(titleLink);

                        const description = document.createElement("p");
                        description.textContent = result.description;

                        content.appendChild(title);
                        content.appendChild(description);
                        post.appendChild(content);

                        // Footer
                        const footer = document.createElement("div");
                        footer.className = "post__footer";

                        // Tags and Categories in the same row
                        const tagsCategoriesWrapper = document.createElement("div");
                        tagsCategoriesWrapper.className = "tags-categories";

                        // Tags
                        if (result.tags && result.tags.length > 0) {
                            result.tags.forEach(tag => {
                                const tagLink = document.createElement("a");
                                tagLink.href = `/tags/${tag}/`;
                                tagLink.className = "tag";
                                tagLink.textContent = tag;
                                tagsCategoriesWrapper.appendChild(tagLink);
                            });
                        }

                        // Categories
                        if (result.categories && result.categories.length > 0) {
                            result.categories.forEach(category => {
                                const categoryLink = document.createElement("a");
                                categoryLink.href = `/categories/${category}/`;
                                categoryLink.className = "category";
                                categoryLink.textContent = category;
                                tagsCategoriesWrapper.appendChild(categoryLink);
                            });
                        }

                        footer.appendChild(tagsCategoriesWrapper);
                        post.appendChild(footer);
                        searchResults.appendChild(post);
                    });
                } else {
                    searchResults.innerHTML = "<p>No results found.</p>";
                }
            }
        })
        .catch(error => {
            console.error("Error fetching search index:", error);
            searchResults.innerHTML = "<p>Unable to load search results. Please try again later.</p>";
        });
});