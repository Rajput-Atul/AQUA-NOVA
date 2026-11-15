// Navigation Toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("open");
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.remove("open");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============ SECTION: QUOTE CALCULATOR ============
function sendWhatsAppEnquiry() {
  const size = document.getElementById("bottle-size").value;
  const quantity = document.getElementById("quantity").value;
  const label = document.getElementById("label-type").value;
  const qr = document.getElementById("qr-type").value;
  const business = document.getElementById("business-type").value;
  
  const labelMap = {
    "standard": "Standard Brand Logo",
    "premium": "Premium Custom Design",
    "restaurant": "Restaurant Menu QR",
    "event": "Event/Conference Branding"
  };
  
  const qrMap = {
    "basic": "Basic QR (Contact Page)",
    "menu": "Digital Menu",
    "full": "Full Digital Experience"
  };
  
  const businessMap = {
    "restaurant": "Restaurant / Cafe",
    "hotel": "Hotel",
    "corporate": "Corporate Event",
    "wedding": "Wedding",
    "gym": "Gym / Fitness",
    "retail": "Retail",
    "other": "Other"
  };
  
  const message = encodeURIComponent(
    `AQUA NOVA QUOTATION ENQUIRY\n\n` +
    `Bottle Size: ${size}\n` +
    `Quantity: ${quantity}\n` +
    `Label Customization: ${labelMap[label]}\n` +
    `QR Experience: ${qrMap[qr]}\n` +
    `Business Type: ${businessMap[business]}\n` +
    `Ready to proceed with quotation.`
  );
  
  const phone = "18005551234"; // Replace with your WhatsApp business number
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function clearCalculator() {
  document.getElementById("quantity").value = "100";
  document.getElementById("bottle-size").value = "250ml";
  document.getElementById("label-type").value = "standard";
  document.getElementById("qr-type").value = "basic";
  document.getElementById("business-type").value = "restaurant";
  document.getElementById("summary-size").textContent = "250 ml";
  document.getElementById("summary-quantity").textContent = "100";
  document.getElementById("summary-label").textContent = "Standard Brand Logo";
  document.getElementById("summary-qr").textContent = "Basic QR";
  document.getElementById("summary-business").textContent = "Restaurant / Cafe";
  document.getElementById("summary-total").textContent = "Enquiry Sent via WhatsApp";
}

// ============ SECTION: MENU FILTER (for customer pages) ============
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".menu-filter-btn");
  if (filters.length) {
    // Navigation menu filter logic can be added here for dynamic customer pages
  }
});

// ============ SECTION: REVEAL ON SCROLL ============
function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight * 0.85) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", initReveal);

// ============ SECTION: LOADING STATE FOR BUTTONS ============
document.querySelectorAll("button, a.btn").forEach(el => {
  el.addEventListener("click", function() {
    if (this.classList.contains("loading")) return;
    if (this.querySelector(".spinner")) return;
    
    const spinner = document.createElement("span");
    spinner.className = "spinner";
    this.appendChild(spinner);
    this.classList.add("loading");
    
    setTimeout(() => {
      spinner.remove();
      this.classList.remove("loading");
    }, 2000);
  });
});
