// Shared Layout Injections for Navigation Header and Footer
function injectHeader() {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  const path = window.location.pathname;
  const isContact = path.includes('contact.html');
  const isHome = path.includes('index.html') || path.endsWith('/') || (!isContact && !path.includes('category.html'));

  // Build dynamic dropdown menu items for categories
  let categoriesDropdownHtml = '';
  const categories = typeof CATEGORIES_DATA !== 'undefined' ? CATEGORIES_DATA : {};
  for (const key in categories) {
    categoriesDropdownHtml += `
      <a class="dropdown-item" href="category.html?type=${key}"><span class="item-text">${categories[key].title}</span></a>
    `;
  }

  headerRoot.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
            <!-- Image Logo -->
            <a class="navbar-brand logo-image" href="index.html">
                <img src="images/made_products_logo.png" alt="Made Products Logo" style="width: 6.6875rem; height: 2.25rem;">
            </a> 
            
            <!-- Mobile Menu Toggle Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-awesome fas fa-bars"></span>
                <span class="navbar-toggler-awesome fas fa-times"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll ${isHome ? 'active' : ''}" href="index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link page-scroll ${isContact ? 'active' : ''}" href="contact.html">Contact Us</a>
                    </li>
                    <!-- Dropdown Menu -->          
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle page-scroll" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MORE</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="https://www.instagram.com/made_products" target="_blank" rel="noopener noreferrer"><span class="item-text">Instagram</span></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="https://wa.me/message/IVDHZJXLXRRMH1" target="_blank" rel="noopener noreferrer"><span class="item-text">Whatsapp</span></a>
                        </div>
                    </li>
                </ul>
                <span class="nav-item">
                    <a class="btn-outline-sm page-scroll" href="tel:+91 8589907591">Call Now</a>
                </span>
            </div>
        </div>
    </nav>
  `;
}

function injectFooter() {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  const showDownload = footerRoot.getAttribute('data-show-download') !== 'false';

  let downloadBannerHtml = '';
  if (showDownload) {
    downloadBannerHtml = `
      <div id="download" class="basic-3">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <p class="p-large">"Your Bag Your Brand"</p>
                      <a class="btn-solid-lg" href="https://wa.me/message/IVDHZJXLXRRMH1" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i>For more info</a>
                  </div>
              </div>
          </div>
          <div class="deco-white-circle-1">
              <img src="images/decorative-white-circle.svg" alt="decorative circle">
          </div>
          <div class="deco-white-circle-2">
              <img src="images/decorative-white-circle.svg" alt="decorative circle">
          </div>
          <div class="deco-blue-circle">
              <img src="images/decorative-blue-circle.svg" alt="decorative circle">
          </div>
          <div class="deco-yellow-circle">
              <img src="images/decorative-yellow-circle.svg" alt="decorative circle">
          </div>
          <div class="deco-green-diamond">
              <img src="images/decorative-green-diamond.svg" alt="decorative diamond">
          </div>
      </div>
    `;
  }

  footerRoot.innerHTML = `
    ${downloadBannerHtml}
    
    <!-- Footer -->
    <div class="footer" id="about-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-col second">
                        <h5>Contact Info</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li class="media">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="media-body"><a href="https://g.page/made-products?share" target="_blank" rel="noopener noreferrer">Chelari, Malappuram, Kerala</a></div>
                            </li>
                            <li class="media">
                                <i class="fas fa-envelope"></i>
                                <div class="media-body"><a href="mailto:madeproducts17@gmail.com">madeproducts17@gmail.com</a></div>
                            </li>
                            <li class="media">
                                <i class="fas fa fa-phone-alt"></i>
                                <div class="media-body"><a href="tel:+918589907591">+91 8589907591</a></div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="footer-col fifth">
                        <span class="fa-stack">
                            <a href="https://www.facebook.com/madeproducts17/" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>

                        <span class="fa-stack">
                            <a href="https://youtube.com/channel/UCG9oa6BKQj6LmZ_gXdWn_cQ" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://www.instagram.com/made_products/" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © 2026 <a href="https://www.instagram.com/made_products/" target="_blank" rel="noopener noreferrer">Madeproducts</a> - All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  `;
}

// Auto run on load
document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
});
