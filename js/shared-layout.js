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
    const targetUrl = categories[key].url || `category.html?type=${key}`;
    categoriesDropdownHtml += `
      <a class="dropdown-item" href="${targetUrl}"><span class="item-text">${categories[key].title}</span></a>
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
                    
                    <!-- Products Link -->
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="index.html#categories-section">PRODUCTS</a>
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
                    <a class="btn-outline-sm page-scroll" href="tel:+918589907591">Call Now</a>
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
    <!-- Footer -->
    <footer class="footer" id="about-us" style="padding-top: 3.5rem; padding-bottom: 1rem; background-color: #1a1a2e; border: none; margin: 0; overflow: hidden; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;">
        <div class="container-fluid px-4 px-md-5">
            <div class="row">
                <!-- Company About -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <img src="images/made_products_logo.png" alt="Made Products Custom Paper Bag Manufacturer Kerala" style="height: 2.25rem; margin-bottom: 1.25rem; filter: brightness(10);">
                    <p style="color: #aaa; font-size: 0.875rem; line-height: 1.75;">Kerala's trusted custom paper bag manufacturer since 2020. We craft eco-friendly, premium-quality carry bags for retail, bakeries, jewellery, events &amp; more.</p>
                    <div class="mt-3">
                        <span class="badge" style="background-color: #bfa46d; color: #fff; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; margin-right: 5px;">✓ 1000+ Clients</span>
                        <span class="badge" style="background-color: #2d8a4e; color: #fff; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem;">🌿 Eco-Friendly</span>
                    </div>
                </div>

                <!-- Products Links -->
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 style="color: #fff; margin-bottom: 1.25rem; font-size: 1rem; letter-spacing: 1px; text-transform: uppercase;">Our Products</h5>
                    <ul class="list-unstyled" style="column-count: 2; column-gap: 1rem;">
                        <li style="margin-bottom: 0.5rem;"><a href="customized-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Customized Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="kraft-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Kraft Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="textile-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Textile Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="jewellery-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Jewellery Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="cake-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Cake Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="event-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Event Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="fancy-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Fancy Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="kidswear-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Kidswear Bags</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="mobile-shop-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Mobile Shop</a></li>
                        <li style="margin-bottom: 0.5rem;"><a href="gents-shop-paper-bags.html" style="color: #aaa; font-size: 0.85rem; text-decoration: none;">Gents Shop</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-lg-4 col-md-12 mb-4">
                    <h5 style="color: #fff; margin-bottom: 1.25rem; font-size: 1rem; letter-spacing: 1px; text-transform: uppercase;">Get In Touch</h5>
                    <ul class="list-unstyled" style="color: #aaa; font-size: 0.875rem; line-height: 1.9;">
                        <li class="mb-2"><i class="fas fa-map-marker-alt" style="color: #bfa46d; width: 16px; margin-right: 8px;"></i><a href="https://g.page/made-products?share" target="_blank" rel="noopener noreferrer" style="color: #aaa; text-decoration: none;">Chelari, Malappuram, Kerala 676317</a></li>
                        <li class="mb-2"><i class="fas fa-phone-alt" style="color: #bfa46d; width: 16px; margin-right: 8px;"></i><a href="tel:+918589907591" style="color: #aaa; text-decoration: none;">+91 85899 07591</a></li>
                        <li class="mb-2"><i class="fas fa-envelope" style="color: #bfa46d; width: 16px; margin-right: 8px;"></i><a href="mailto:madeproducts17@gmail.com" style="color: #aaa; text-decoration: none;">madeproducts17@gmail.com</a></li>
                        <li class="mb-2"><i class="fab fa-whatsapp" style="color: #25d366; width: 16px; margin-right: 8px;"></i><a href="https://wa.me/message/IVDHZJXLXRRMH1" target="_blank" rel="noopener noreferrer" style="color: #aaa; text-decoration: none;">WhatsApp Quote</a></li>
                    </ul>
                    <div class="mt-3">
                        <a href="https://www.facebook.com/madeproducts17/" target="_blank" rel="noopener noreferrer" style="color: #aaa; margin-right: 12px; font-size: 1.25rem;"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/made_products/" target="_blank" rel="noopener noreferrer" style="color: #aaa; margin-right: 12px; font-size: 1.25rem;"><i class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com/channel/UCG9oa6BKQj6LmZ_gXdWn_cQ" target="_blank" rel="noopener noreferrer" style="color: #aaa; font-size: 1.25rem;"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            <hr style="border-color: #333; margin-top: 1rem; margin-bottom: 1rem;">

            <div class="row">
                <div class="col-lg-12 text-center">
                    <p style="color: #666; font-size: 0.8rem; margin-bottom: 0;">
                        Copyright &copy; 2026 <strong style="color: #bfa46d;">Made Products</strong> &mdash; Custom Paper Bag Manufacturer, Chelari, Malappuram, Kerala. All rights reserved.
                        &nbsp;|&nbsp; <a href="index.html" style="color: #888; text-decoration: none;">Home</a>
                        &nbsp;|&nbsp; <a href="contact.html" style="color: #888; text-decoration: none;">Contact</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/message/IVDHZJXLXRRMH1" target="_blank" rel="noopener noreferrer" id="whatsapp-float" aria-label="Chat with Made Products on WhatsApp"
       style="position: fixed; bottom: 1.25rem; right: 1.25rem; z-index: 9999; width: 58px; height: 58px; background-color: #25d366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(37,211,102,0.45); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;">
        <i class="fab fa-whatsapp" style="color: #fff; font-size: 2rem; line-height: 1;"></i>
    </a>
  `;
}

// Auto run on load
document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
});
