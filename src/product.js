const portfolio = [
  {
    "name": "vic-ecommerce",
    "details": {
      banners: [
        "vic-ecom/vic-ecommerce.png",
        "vic-ecom/vic-ecom1.png",
        "vic-ecom/vic-ecom2.png",
        "vic-ecom/vic-ecom3.png"
      ],
      "punchline": "Your Ultimate Online Shopping Destination",
      "title": "NextGen E-Commerce Platform",
      "desc": "The NextGen E-Commerce Platform is a comprehensive and user-friendly online shopping solution, designed to rival the best in the industry. Packed with advanced features and intuitive designs, this platform delivers a seamless shopping experience for customers while offering robust tools for merchants. With features like dynamic product listings, secure payment gateways, personalized recommendations, advanced search, and real-time tracking, it’s the perfect combination of functionality and innovation.",
      "type": "filter-app",
      "projecturl": "https://victoria-prince00raj.netlify.app/",
      "client": "France",
      "Category": "Ecommerce website",
      "creationDate": "11 dec, 2023",
      "projectLinkTitle": "ecommerce.orbitLinker.co"
    }
  }
];
const renderPortfoliPage = () => {
  const renderProducts = document.getElementById('renderProducts');
  portfolio.forEach(item => {
    const htmlContent = `
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${item.details.type}">
        <div>
          <img src="assets/img/portfolio/${item.details.banners[0]}" class="img-fluid" alt="">
          </div>
          <div class="portfolio-info">
            <h4>${item.details.title}</h4>
            <p>${item.details.punchline}</p>
            <a href="assets/img/portfolio/${item.details.banners[0]}" title="${item.details.title}"
               data-gallery="portfolio-gallery-app" class="glightbox preview-link">
              <i class="bi bi-zoom-in"></i>
            </a>
            <a href="portfolio-details.html?${item.name}" title="More Details" class="details-link">
              <i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
      `;
    renderProducts.innerHTML += htmlContent;
  });
}

const renderProductDetails = (queryPrompt) => {
  // Find the product details based on queryPrompt (name)
  const product = portfolio.find(p => p.name === queryPrompt);
  if (product) {
    const { details } = product;
    const portfolioHTML = `
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper init-swiper">
              <script type="application/json" class="swiper-config">
                {
                  "loop": true,
                  "speed": 600,
                  "autoplay": {
                    "delay": 5000
                  },
                  "slidesPerView": "auto",
                  "pagination": {
                    "el": ".swiper-pagination",
                    "type": "bullets",
                    "clickable": true
                  }
                }
              </script>
              <div class="swiper-wrapper align-items-center">
                ${details.banners.map(banner => `
                  <div class="swiper-slide">
                    <img src="assets/img/portfolio/${banner}" alt="">
                  </div>
                `).join('')}
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="portfolio-info" data-aos="fade-up" data-aos-delay="200">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: ${details.Category}</li>
                <li><strong>Client</strong>: ${details.client}</li>
                <li><strong>Project date</strong>: ${details.creationDate || 'N/A'}</li>
                <li><strong>Project URL</strong>: <a href="${details.projecturl}" target="_blank"> https://${details.projectLinkTitle}</a></li>
              </ul>
            </div>
            <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
              <h2>${details.title}</h2>
              <p>
                ${details.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("portfolio-details").innerHTML = portfolioHTML;
  } else {
    console.error('Product not found');
  }
}


if (window.location.pathname == '/portfolio.html') {
  renderPortfoliPage()
} else {
  const fullUrl = window.location.href;
  const queryString = fullUrl.split('?')[1];
  renderProductDetails('vic-ecommerce');
}