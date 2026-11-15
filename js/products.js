// Product Data
const products = [
  {
    id: 1,
    name: "250 ml Classic",
    size: "250ml",
    description: "Perfect for cafes, corporate pantry, and event sampling. Premium transparent PET with your customized label.",
    sizeTag: "250 ml",
    labelPreview: "Minimal Luxury",
    badge: "Popular",
    image: "assets/images/bottles/bottle-01.png"
  },
  {
    id: 2,
    name: "500 ml Corporate",
    size: "500ml",
    description: "Professional size for corporate events, conferences, and workplace branding.",
    sizeTag: "500 ml",
    labelPreview: "Corporate Branding",
    badge: "Best Seller",
    image: "assets/images/bottles/bottle-03.png"
  },
  {
    id: 3,
    name: "1 Litre Smart",
    size: "1litre",
    description: "Premium bulk size for hotels, weddings, and large corporate events with full QR experience.",
    sizeTag: "1 Litre",
    labelPreview: "QR Smart Label",
    badge: "Large Event",
    image: "assets/images/bottles/bottle-09.png"
  }
];

// Filter data by size
function filterProducts(filter) {
  const grid = document.getElementById("product-grid");
  const filtered = filter === "all" ? products : products.filter(p => p.size === filter);
  
  grid.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name} - AQUA NOVA">
        <span class="size-tag">${product.sizeTag}</span>
        <span class="badge-gold">${product.badge}</span>
      </div>
      <div class="product-card-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-details">
          <span>💧 Transparent PET</span>
          <span>🖨️ Custom Label</span>
          <span>📱 QR Code</span>
        </div>
        <a href="#contact" class="btn btn-primary">Get a Quote</a>
      </div>
    </div>
  `).join("");
}

// Filter button functionality
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter-btn");
  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      filterProducts(filter);
    });
  });
  
  // Initialize with all products
  filterProducts("all");
});
