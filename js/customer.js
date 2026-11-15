// Customer Page Interactive Functions

// WhatsApp Enquiry Sender (shared with homepage calculator)
function sendWhatsAppEnquiry() {
  const message = encodeURIComponent(
    `AQUA NOVA ENQUIRY - [Customer Name]\n\n` +
    `Name: [Your Name]\n` +
    `Email: [Your Email]\n` +
    `Phone: [Your Phone]\n` +
    `Message: [Your Message]`
  );
  window.open("https://wa.me/18005551234?text=" + message, "_blank");
}

// Download vCard
function downloadVCard() {
  const name = "[Business Name]";
  const phone = "[Phone number]";
  const email = "[email@domain.com]";
  const address = "[Full address]";
  const url = "[website URL]";
  
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;type=CELL;type=VOICE:${phone}
EMAIL:${email}
ADR:;;${address};;;;
URL:${url}
REV:20261116
END:VCARD`;
  
  const blob = new Blob([vcard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = name.replace(/\s+/g, "_") + ".vcf";
  link.click();
  URL.revokeObjectURL(link.href);
}

// Menu Filter Functionality
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".menu-filter-btn");
  if (filters.length) {
    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.category;
        // Menu filtering logic can be added here for dynamic content
      });
    });
  }
});

// Scroll to top button (optional)
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // Can add a scroll-to-top button here
  }
});
