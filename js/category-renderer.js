// Dynamically render the category page based on query parameter
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoryKey = params.get('type') || 'textiles';

  const category = CATEGORIES_DATA[categoryKey];
  if (!category) {
    // Show fallback title
    const titleEl = document.getElementById('category-title');
    const taglineEl = document.getElementById('category-tagline');
    if (titleEl) titleEl.textContent = "Category Not Found";
    if (taglineEl) taglineEl.textContent = "Please select a valid category.";
    return;
  }

  // Update document title for SEO
  document.title = `${category.title} - Made Products`;

  // Update page header details
  const titleEl = document.getElementById('category-title');
  const taglineEl = document.getElementById('category-tagline');
  if (titleEl) titleEl.textContent = category.title;
  if (taglineEl) taglineEl.textContent = `"${category.tagline || 'Made Something Different'}"`;

  // Build the product gallery
  const gridContainer = document.getElementById('category-gallery-grid');
  if (gridContainer) {
    if (category.count === 0) {
      gridContainer.innerHTML = '<p class="text-center w-100 py-5">No products currently available in this category.</p>';
      return;
    }

    let html = '';
    for (let i = 1; i <= category.count; i++) {
      const imgPath = `images/${category.folder}/${i}.jpg`;
      html += `
        <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center category-item-container">
          <a href="https://www.instagram.com/made_products/" target="_blank" rel="noopener noreferrer">
            <div class="category-image-wrapper shadow-sm">
              <img class="img-fluid rounded bg-white category-gallery-img" src="${imgPath}" alt="${category.title} Bag design ${i}" loading="lazy">
            </div>
          </a>
        </div>
      `;
    }
    gridContainer.innerHTML = html;
  }
});
