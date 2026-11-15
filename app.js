const WHATSAPP_NUMBER = "919324596287";
const OWNER_NAME = "Atul Chauhan";
const OWNER_PHONE = "+91 93245 96287";
const OWNER_EMAIL = "atulchauhan223222@gmail.com";
const CUSTOMER_PATH = "/c/";

const photoAssets = [
  { file: "main-hero.jpg", alt: "Aqua Nova clear branded water bottle with a QR label beside a customer experience on a phone", note: "A bottle that connects", ratio: 1.23, labels: [] },
  { file: "main-qr-scene.jpg", alt: "Aqua Nova bottle with a printed QR label and water splash", note: "One scan, a digital welcome", ratio: 1.63, labels: [] },
  { file: "main-industry-cards.jpg", alt: "Industry experiences from the Aqua Nova visual reference", note: "Made for every kind of business", ratio: 3.7, labels: [] },
  { file: "main-customer-pages.jpg", alt: "Example customer pages from the Aqua Nova visual reference", note: "A page made for your brand", ratio: 3.27, labels: [] },
  { file: "main-cta-scene.jpg", alt: "A branded Aqua Nova bottle in a water-inspired setting", note: "Your brand, in every hand", ratio: 2.9, labels: [] },
  { file: "shrishti-hero.jpg", alt: "Shrishti Solutions furniture and aluminium business reference page", note: "Shrishti Solutions", ratio: 2.56, labels: [] }
];

const products = [
  { size: "250 ml", title: "The petite", detail: "A considered little refreshment for welcome desks, events and thoughtful guest touches.", label: "Blue / minimal", photo: 0, note: "Ideal for welcome moments" },
  { size: "500 ml", title: "The everyday", detail: "A versatile canvas for your brand, from the meeting table to the restaurant table.", label: "Custom / QR-ready", photo: 1, note: "A versatile favourite" },
  { size: "1 litre", title: "The generous", detail: "A larger clear bottle for longer gatherings, hospitality and sharing the good stuff.", label: "Premium / custom", photo: 4, note: "Made for longer moments" }
];

const concepts = [
  ["Quiet luxury", "Minimal luxury", "500 ml", "A confident mark with a little gold.", "gold"],
  ["The welcome", "Hotel & hospitality", "500 ml", "A considered first impression.", "hotel"],
  ["Table stories", "Restaurant", "500 ml", "Your restaurant, at every seat.", "restaurant"],
  ["Coffee break", "Cafe", "250 ml", "A fresh detail for your next cup.", "cafe"],
  ["The celebration", "Wedding", "250 ml", "A little keepsake for the day.", "wedding"],
  ["Together, better", "Corporate", "500 ml", "Your identity, clearly present.", "corporate"],
  ["In session", "Conference", "500 ml", "A useful detail between talks.", "event"],
  ["Move well", "Fitness & gym", "1 litre", "Keep your community in motion.", "fitness"],
  ["Modern classic", "Blue & white", "500 ml", "Fresh, clear and unmistakably yours.", "aqua"],
  ["The big moment", "Event branding", "1 litre", "Made for a moment worth sharing.", "launch"],
  ["Your next idea", "Made to order", "500 ml", "A starting point for your own story.", "custom"]
];

const industries = [
  ["Restaurants", "A memorable welcome, and a menu just one scan away.", "✳"],
  ["Cafes", "Carry your café identity from the counter to every table.", "◉"],
  ["Hotels", "A considered in-room detail for guests who notice.", "⌂"],
  ["Weddings", "Names, dates and little details guests can take home.", "♡"],
  ["Corporate events", "Put your company identity in every attendee’s hand.", "⌑"],
  ["Conferences", "Keep your brand present between sessions and speakers.", "▤"],
  ["Gyms & fitness", "A refreshing companion for members and fitness events.", "↗"],
  ["Retail businesses", "Turn a practical giveaway into a brand touchpoint.", "◇"],
  ["Promotional campaigns", "Make your campaign useful, shareable and easy to remember.", "✳"]
];

const customers = [
  {
    slug: "shrishti-solutions", name: "Shrishti Solutions", type: "Business spotlight",
    oneLiner: "Thoughtful solutions. A more personal connection.",
    intro: "Shrishti Solutions helps teams bring ideas into focus with practical, people-first support. This sample page shows how a branded bottle can lead to a useful digital introduction.",
    story: "A clear introduction, built around the people and ideas behind the business. Use this page to share the services you offer, tell your story and make the next step easy for a customer.",
    highlights: ["People-first approach", "Solutions shaped around you", "A direct line to the team"],
    style: "corporate", color: "#183f48", accent: "#b3e8d5", label: "A clearer way forward", photo: 5,
    services: [["Business consulting", "Practical thinking to help teams move forward."], ["Digital solutions", "Useful, considered tools built around real needs."], ["Team support", "A collaborative partner from first conversation to next step."]],
    address: "Business details can be added here", city: "Customer information"
  },
  {
    slug: "bluebird-cafe", name: "Bluebird Cafe", type: "Cafe & menu",
    oneLiner: "Good coffee. A seat for you. Something lovely to eat.",
    intro: "Take a seat at Bluebird Cafe. Browse a little menu of cafe favourites, find something that sounds good and say hello to the team.",
    story: "A neighbourhood cafe for slow mornings, coffee breaks and one more thing from the pastry case. This sample menu demonstrates how a QR label can open directly onto a mobile-friendly cafe experience.",
    highlights: ["Freshly made favourites", "Coffee for the moment", "A warm neighbourhood welcome"],
    style: "cafe", color: "#334c3f", accent: "#e6ce9f", label: "A little neighborhood pause", photo: 3,
    address: "Cafe address can be added here", city: "Customer information"
  },
  {
    slug: "summit-2027", name: "Summit 2027", type: "Conference & event",
    oneLiner: "Ideas in motion. People moving them forward.",
    intro: "Welcome to Summit 2027. Find the day’s programme, gather with people who see the world differently and take the next big idea with you.",
    story: "A meeting place for bright ideas and meaningful conversations. This sample event page puts essential information and a programme in one easy-to-find place.",
    highlights: ["Ideas worth sharing", "People who move things forward", "A day to look ahead"],
    style: "event", color: "#343d59", accent: "#d8d0ff", label: "Meet us at the summit", photo: 2,
    address: "Venue details can be added here", city: "Customer information"
  }
];

const menuItems = [
  ["Starters", "Crispy lotus stem", "Golden, crisp and served with a bright house dip.", "₹240", "veg"],
  ["Starters", "Paneer tikka", "Smoky charred cottage cheese with seasonal peppers.", "₹320", "veg"],
  ["Main Course", "Garden paneer curry", "Slow-simmered paneer, garden spices and a little cream.", "₹390", "veg"],
  ["Main Course", "Butter chicken", "Tender chicken in a gently spiced tomato butter sauce.", "₹460", "nonveg"],
  ["Noodles", "Wok-tossed hakka noodles", "Noodles with crisp vegetables and house seasoning.", "₹280", "veg"],
  ["Noodles", "Chilli garlic chicken noodles", "A savoury wok toss with chilli, garlic and chicken.", "₹360", "nonveg"],
  ["Rice", "Steamed basmati rice", "Fragrant long-grain rice, simply prepared.", "₹180", "veg"],
  ["Rice", "Vegetable dum biryani", "Basmati rice layered with vegetables and whole spices.", "₹340", "veg"],
  ["Breads", "Butter naan", "Soft tandoor-baked naan finished with butter.", "₹90", "veg"],
  ["Breads", "Tandoori roti", "Whole-wheat roti from the tandoor.", "₹65", "veg"],
  ["Soups", "Roasted tomato soup", "Slow-roasted tomatoes with fresh herbs.", "₹190", "veg"],
  ["Soups", "Lemon coriander soup", "A bright, warming broth with herbs and vegetables.", "₹190", "veg"],
  ["Desserts", "Chocolate brownie", "A warm chocolate brownie with a soft centre.", "₹220", "veg"],
  ["Desserts", "Saffron kulfi", "Traditional slow-set kulfi with fragrant saffron.", "₹180", "veg"],
  ["Beverages", "Cold brew coffee", "Slow-steeped coffee served chilled.", "₹210", "veg"],
  ["Beverages", "Fresh lime soda", "Fresh lime, sparkling soda and a pinch of salt.", "₹150", "veg"]
];

const menuCategories = ["All", "Starters", "Main Course", "Noodles", "Rice", "Breads", "Soups", "Desserts", "Beverages"];
const qrCache = new Map();

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function qrCodePath(text) {
  if (qrCache.has(text)) return qrCache.get(text);
  const version = 6;
  const moduleCount = version * 4 + 17;
  const dataCodewords = 108;
  const errorCodewordsPerBlock = 16;
  const blockCount = 4;
  const blocks = [];
  let matrix = Array.from({ length: moduleCount }, () => Array(moduleCount).fill(false));
  const reserved = Array.from({ length: moduleCount }, () => Array(moduleCount).fill(false));
  const setFunction = (x, y, value) => {
    if (x < 0 || y < 0 || x >= moduleCount || y >= moduleCount) return;
    matrix[y][x] = value;
    reserved[y][x] = true;
  };
  const appendBits = (bits, value, length) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1);
  };

  const messageBytes = [...new TextEncoder().encode(text)];
  if (messageBytes.length > 106) {
    throw new Error("The QR destination is too long to encode in the supported label format.");
  }
  const bits = [];
  appendBits(bits, 0b0100, 4);
  appendBits(bits, messageBytes.length, 8);
  messageBytes.forEach((byte) => appendBits(bits, byte, 8));
  const capacityBits = dataCodewords * 8;
  appendBits(bits, 0, Math.min(4, capacityBits - bits.length));
  while (bits.length % 8) bits.push(0);
  const data = [];
  for (let i = 0; i < bits.length; i += 8) {
    data.push(bits.slice(i, i + 8).reduce((value, bit) => (value << 1) | bit, 0));
  }
  while (data.length < dataCodewords) data.push(data.length % 2 === 0 ? 0xEC : 0x11);

  const multiply = (a, b) => {
    let result = 0;
    for (let i = 7; i >= 0; i--) {
      result = (result << 1) ^ ((result >>> 7) * 0x11D);
      result ^= ((b >>> i) & 1) * a;
    }
    return result;
  };
  let divisor = [1];
  let root = 1;
  for (let i = 0; i < errorCodewordsPerBlock; i++) {
    const next = Array(divisor.length + 1).fill(0);
    divisor.forEach((coefficient, index) => {
      next[index] ^= coefficient;
      next[index + 1] ^= multiply(coefficient, root);
    });
    divisor = next;
    root = multiply(root, 2);
  }
  const errorCorrection = (block) => {
    const result = Array(errorCodewordsPerBlock).fill(0);
    block.forEach((byte) => {
      const factor = byte ^ result.shift();
      result.push(0);
      result.forEach((value, index) => { result[index] = value ^ multiply(divisor[index + 1], factor); });
    });
    return result;
  };
  const blockLength = dataCodewords / blockCount;
  for (let i = 0; i < blockCount; i++) {
    const block = data.slice(i * blockLength, (i + 1) * blockLength);
    blocks.push({ data: block, ecc: errorCorrection(block) });
  }
  const codewords = [];
  for (let i = 0; i < blockLength; i++) blocks.forEach((block) => codewords.push(block.data[i]));
  for (let i = 0; i < errorCodewordsPerBlock; i++) blocks.forEach((block) => codewords.push(block.ecc[i]));

  const drawFinder = (centerX, centerY) => {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const distance = Math.max(Math.abs(dx), Math.abs(dy));
        setFunction(centerX + dx, centerY + dy, distance !== 2 && distance !== 4);
      }
    }
  };
  drawFinder(3, 3);
  drawFinder(moduleCount - 4, 3);
  drawFinder(3, moduleCount - 4);

  for (let i = 0; i < moduleCount; i++) {
    if (!reserved[6][i]) setFunction(i, 6, i % 2 === 0);
    if (!reserved[i][6]) setFunction(6, i, i % 2 === 0);
  }
  for (const centerX of [6, 34]) {
    for (const centerY of [6, 34]) {
      if (reserved[centerY][centerX]) continue;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          setFunction(centerX + dx, centerY + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    if (i !== 6) {
      setFunction(8, i, false);
      setFunction(i, 8, false);
    }
  }
  for (let i = 0; i < 8; i++) {
    setFunction(moduleCount - 1 - i, 8, false);
    setFunction(8, moduleCount - 1 - i, false);
  }
  setFunction(8, moduleCount - 8, true);

  const dataBits = [];
  codewords.forEach((byte) => appendBits(dataBits, byte, 8));
  let bitIndex = 0;
  let upward = true;
  for (let right = moduleCount - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let offset = 0; offset < moduleCount; offset++) {
      const y = upward ? moduleCount - 1 - offset : offset;
      for (let side = 0; side < 2; side++) {
        const x = right - side;
        if (reserved[y][x]) continue;
        matrix[y][x] = bitIndex < dataBits.length && dataBits[bitIndex++] === 1;
      }
    }
    upward = !upward;
  }
  for (let y = 0; y < moduleCount; y++) {
    for (let x = 0; x < moduleCount; x++) {
      if (!reserved[y][x] && (x + y) % 2 === 0) matrix[y][x] = !matrix[y][x];
    }
  }

  const formatData = 0b00000;
  let remainder = formatData << 10;
  for (let i = 14; i >= 10; i--) {
    if ((remainder >>> i) & 1) remainder ^= 0x537 << (i - 10);
  }
  const formatBits = ((formatData << 10) | remainder) ^ 0x5412;
  for (let i = 0; i <= 5; i++) setFunction(8, i, ((formatBits >>> i) & 1) !== 0);
  setFunction(8, 7, ((formatBits >>> 6) & 1) !== 0);
  setFunction(8, 8, ((formatBits >>> 7) & 1) !== 0);
  setFunction(7, 8, ((formatBits >>> 8) & 1) !== 0);
  for (let i = 9; i < 15; i++) setFunction(14 - i, 8, ((formatBits >>> i) & 1) !== 0);
  for (let i = 0; i < 8; i++) setFunction(moduleCount - 1 - i, 8, ((formatBits >>> i) & 1) !== 0);
  for (let i = 8; i < 15; i++) setFunction(8, moduleCount - 15 + i, ((formatBits >>> i) & 1) !== 0);
  setFunction(8, moduleCount - 8, true);

  const path = [];
  matrix.forEach((row, y) => row.forEach((dark, x) => {
    if (dark) path.push(`M${x} ${y}h1v1h-1z`);
  }));
  const result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 ${moduleCount + 8} ${moduleCount + 8}" shape-rendering="crispEdges"><path fill="#fff" d="M-4-4h${moduleCount + 8}v${moduleCount + 8}H-4z"/><path fill="#102f35" d="${path.join("")}"/></svg>`;
  qrCache.set(text, result);
  return result;
}

function bottleArtwork(style = "aqua", size = "500 ml", includeQr = true, labelText = "YOUR BRAND", customerSlug = "shrishti-solutions") {
  const palettes = {
    aqua: ["#e6f4f0", "#2a867f", "#173e44", "#dbf4eb", "#296b69"],
    corporate: ["#f5f7f4", "#1d4551", "#1d4551", "#d9eee9", "#234b53"],
    black: ["#252c2b", "#c5a35b", "#f7f2e7", "#dcebe5", "#274e4b"],
    wedding: ["#f5eae1", "#a57665", "#735449", "#f2e2d7", "#9e7564"],
    hotel: ["#f3efe3", "#9c8052", "#66583d", "#e7e4d7", "#7d714b"],
    restaurant: ["#f6eadf", "#9b5942", "#703c2e", "#f3e8d9", "#934e3d"],
    cafe: ["#efe4d4", "#795641", "#594131", "#e9e2d7", "#79563d"],
    event: ["#e6e9f4", "#555f8d", "#343b60", "#e2e8f4", "#4d5885"],
    fitness: ["#e3f0e9", "#3f796b", "#234c45", "#d7ece3", "#347265"],
    promotional: ["#e4f2ee", "#309b91", "#155e5a", "#d9f3ea", "#2b867c"],
    custom: ["#eee8df", "#ad8963", "#5d513f", "#e0e9e2", "#756248"]
  };
  const [label, accent, text, water, cap] = palettes[style] || palettes.aqua;
  const uid = `b${Math.random().toString(36).slice(2, 8)}`;
  const qr = includeQr
    ? `<g transform="translate(58 172) scale(.78)">${qrCodePath(`${window.location.origin}${CUSTOMER_PATH}${customerSlug}`).replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g>`
    : `<g fill="#173c42"><path d="M60 174h8v8h-8zm2 2v4h4v-4zm10-2h8v8h-8zm2 2v4h4v-4zm10-2h6v6h-6zm-24 10h6v6h-6zm8 0h6v6h-6zm8 0h8v8h-8zm10 0h6v6h-6zm-24 8h8v8h-8zm10 0h6v6h-6zm10 0h8v8h-8zm10-6h6v6h-6z"/></g>`;

  return `<svg viewBox="0 0 150 330" role="img" aria-label="Clear ${escapeHtml(size)} transparent PET water bottle with ${escapeHtml(style)} custom printed label" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${uid}glass" x1="0" x2="1"><stop stop-color="#fff" stop-opacity=".85"/><stop offset=".18" stop-color="#d8f1ec" stop-opacity=".42"/><stop offset=".45" stop-color="#fff" stop-opacity=".72"/><stop offset=".77" stop-color="#a8d7ce" stop-opacity=".24"/><stop offset="1" stop-color="#fff" stop-opacity=".73"/></linearGradient>
      <linearGradient id="${uid}water" x1="0" x2="1"><stop stop-color="#a6e2d4" stop-opacity=".55"/><stop offset=".48" stop-color="#e7fffa" stop-opacity=".56"/><stop offset="1" stop-color="#8ecfc4" stop-opacity=".38"/></linearGradient>
      <linearGradient id="${uid}cap" x1="0" x2="1"><stop stop-color="#fff" stop-opacity=".75"/><stop offset=".45" stop-color="${cap}"/><stop offset="1" stop-color="#fff" stop-opacity=".75"/></linearGradient>
      <clipPath id="${uid}body"><path d="M57 47h36v12c0 12 18 15 23 30 3 8 4 20 4 32v149c0 15-6 23-19 25H49c-13-2-19-10-19-25V121c0-12 1-24 4-32 5-15 23-18 23-30z"/></clipPath>
    </defs>
    <ellipse cx="75" cy="315" rx="37" ry="5" fill="#426d65" opacity=".12"/>
    <path d="M58 14h34v27c0 5-4 8-8 9v9H62v-9c-4-1-8-4-8-9z" fill="url(#${uid}cap)" stroke="#94bcb1" stroke-width="1"/>
    <path d="M58 20h34M57 25h36M57 31h36M58 37h34" stroke="#fff" stroke-opacity=".48" stroke-width="1"/>
    <path d="M57 47h36v12c0 12 18 15 23 30 3 8 4 20 4 32v149c0 15-6 23-19 25H49c-13-2-19-10-19-25V121c0-12 1-24 4-32 5-15 23-18 23-30z" fill="url(#${uid}glass)" stroke="#a8c9c1" stroke-width="1.5"/>
    <g clip-path="url(#${uid}body)">
      <path d="M28 105q47 7 95 0v180H28z" fill="url(#${uid}water)"/>
      <path d="M30 106q45 8 92 0" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="2"/>
      <path d="M38 118v139M43 109v156" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>
      <path d="M30 232h91M30 248h91M30 264h91" stroke="#fff" stroke-opacity=".16" stroke-width="2"/>
      <rect x="25" y="158" width="100" height="80" rx="2" fill="${label}" stroke="#fff" stroke-opacity=".75"/>
      <path d="M25 158h100v8H25z" fill="${accent}"/>
      <circle cx="42" cy="181" r="7" fill="${accent}" opacity=".95"/>
      <path d="M42 174c-3 5-5 7-5 9a5 5 0 0 0 10 0c0-2-2-4-5-9z" fill="#fff"/>
      <text x="54" y="180" fill="${text}" font-family="Arial,sans-serif" font-size="5" font-weight="700" letter-spacing=".7">AQUA NOVA</text>
      <text x="35" y="196" fill="${text}" font-family="Georgia,serif" font-size="8" font-weight="bold">${escapeHtml(labelText).slice(0, 15)}</text>
      <text x="35" y="207" fill="${text}" opacity=".72" font-family="Arial,sans-serif" font-size="4">YOUR BRAND · YOUR STORY</text>
      ${qr}
      <text x="35" y="226" fill="${text}" font-family="Arial,sans-serif" font-size="4">CLEAR WATER · ${escapeHtml(size.toUpperCase())}</text>
      <path d="M30 90q3-28 25-32M119 91q-3-26-24-32" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3"/>
      <path d="M114 130v104" stroke="#fff" stroke-opacity=".58" stroke-width="4" stroke-linecap="round"/>
      <path d="M29 281h93" stroke="#91b9b0" stroke-opacity=".55" stroke-width="2"/>
    </g>
    <path d="M33 117q1-27 8-34M37 275q4 8 14 9" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="4" stroke-linecap="round"/>
    <path d="M113 116q4 8 4 20v120" fill="none" stroke="#7ab5a8" stroke-opacity=".26" stroke-width="2"/>
    <path d="M61 58h28M61 62h28" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
  </svg>`;
}

const labelThemes = [
  ["#f1eee5", "#bd995d", "#153a40"],
  ["#eff6f2", "#2c8a83", "#143b41"],
  ["#f0e9dd", "#92764d", "#53432e"],
  ["#f7f1e8", "#a76d56", "#624134"],
  ["#e8f1ed", "#477e77", "#183c43"]
];

function photoUrl(index) {
  return `/assets/reference/${encodeURIComponent(photoAssets[index].file)}`;
}

function photoLabels(photo, index) {
  const [background, accent, ink] = labelThemes[index % labelThemes.length];
  return photo.labels.map((label, labelIndex) => `<span class="photo-label photo-label-${labelIndex + 1}" style="--label-x:${label.x}%;--label-y:${label.y}%;--label-w:${label.w}%;--label-bg:${background};--label-accent:${accent};--label-ink:${ink}">
    <span class="label-copy"><span class="label-brand">AQUA NOVA</span><strong>${escapeHtml(label.text)}</strong><small>YOUR BRAND · YOUR STORY</small></span>
    <span class="label-qr" aria-hidden="true"></span>
  </span>`).join("");
}

function photoFrame(index, options = {}) {
  const photo = photoAssets[index];
  const overlays = options.labels === false ? "" : photoLabels(photo, index);
  const badge = options.badge ? `<span class="photo-badge">${escapeHtml(options.badge)}</span>` : "";
  const caption = options.caption ? `<span class="photo-caption">${escapeHtml(photo.note)}</span>` : "";
  const className = options.className ? ` ${options.className}` : "";
  return `<div class="photo-frame${className}" data-photo-index="${index}" style="--photo-ratio:${photo.ratio}">
    ${badge}
    <div class="photo-media"><img src="${photoUrl(index)}" alt="${escapeHtml(options.alt || photo.alt)}" loading="${options.eager ? "eager" : "lazy"}">${overlays}</div>
    ${caption}
  </div>`;
}

function mountQrLabels() {
  const qr = qrCodePath(`${window.location.origin}${CUSTOMER_PATH}shrishti-solutions`);
  document.querySelectorAll(".label-qr").forEach((container) => {
    if (!container.childElementCount) container.innerHTML = qr;
  });
}

function fitPhotoMedia() {
  document.querySelectorAll(".photo-media").forEach((media) => {
    const stage = media.closest(".photo-frame, .hero-photo-stage");
    const image = media.querySelector("img");
    if (!stage || !image || !image.naturalWidth || !image.naturalHeight) return;
    const stageWidth = stage.clientWidth;
    const stageHeight = stage.clientHeight;
    const ratio = image.naturalWidth / image.naturalHeight;
    let width = stageWidth;
    let height = width / ratio;
    if (height > stageHeight) {
      height = stageHeight;
      width = height * ratio;
    }
    media.style.width = `${width}px`;
    media.style.height = `${height}px`;
  });
}

function foodArtwork(index) {
  const palettes = [
    ["#e0ab57", "#6f8a50"], ["#f3c27b", "#b74735"], ["#e6c690", "#6a8761"],
    ["#bd7153", "#506e49"], ["#e9b65d", "#69844c"], ["#c88842", "#798749"]
  ];
  const [base, green] = palettes[index % palettes.length];
  return `<svg viewBox="0 0 100 100" role="img" aria-label="Illustration of a freshly prepared menu dish"><ellipse cx="50" cy="76" rx="41" ry="8" fill="#b9b5a8" opacity=".35"/><circle cx="50" cy="49" r="39" fill="#fff" stroke="#ddd6ca" stroke-width="2"/><circle cx="50" cy="49" r="30" fill="#f3efe5"/><path d="M24 50q8-22 26-18t26 18q-8 18-26 17T24 50" fill="${base}"/><path d="M32 46q9-14 17-11t19 12q-10 15-22 11t-14-12" fill="${green}"/><circle cx="43" cy="43" r="4" fill="#f7e1a1"/><circle cx="59" cy="54" r="3" fill="#d9573f"/><path d="M35 57q11-11 20-6" fill="none" stroke="#f4e3b4" stroke-width="3" stroke-linecap="round"/></svg>`;
}

function customerCard(customer) {
  const backgrounds = {
    "shrishti-solutions": "linear-gradient(145deg,#37776e,#173d47)",
    "bluebird-cafe": "linear-gradient(145deg,#997853,#374c40)",
    "summit-2027": "linear-gradient(145deg,#6874a4,#303953)"
  };
  return `<article class="customer-card" style="--customer-bg:${backgrounds[customer.slug]}">
    <span class="customer-brand">${escapeHtml(customer.type)}</span>
    <div class="customer-art">${photoFrame(customer.photo, { alt: `${customer.name} customer bottle label concept`, className: "photo-frame-customer" })}</div>
    <h3>${escapeHtml(customer.name)}</h3>
    <p>${escapeHtml(customer.oneLiner)}</p>
    <a href="${CUSTOMER_PATH}${customer.slug}">View customer page <span aria-hidden="true">↗</span></a>
  </article>`;
}

function renderHeader() {
  const root = document.getElementById("site-header");
  root.innerHTML = `<header class="site-header"><div class="header-contact-ribbon"><span>Personalised bottles · Atul Chauhan</span><span class="ribbon-links"><a href="tel:+919324596287">${OWNER_PHONE}</a><a href="mailto:${OWNER_EMAIL}">${OWNER_EMAIL}</a></span></div><div class="header-inner">
    <a class="brand" href="/" aria-label="Aqua Nova home">
      <span class="brand-icon" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M20 3C14 12 8 18 8 26a12 12 0 0 0 24 0C32 18 26 12 20 3Z" fill="#a5e5d3"/><path d="M14 25c0 4 2.5 6 6 6" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.7"/></svg></span>
      <span class="brand-wordmark">AQUA NOVA<small>YOUR BRAND. YOUR BOTTLE.</small></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <a href="/#home">Home</a><a href="/#bottles">Our bottles</a><a href="/#qr">QR experience</a><a href="/#industries">Industries</a><a href="/#work">Our work</a><a href="/#contact">Contact</a>
      <a class="nav-cta" href="/#quote">Get a custom quote <span aria-hidden="true">↗</span></a>
    </nav>
    <a class="nav-cta" href="/#quote">Get a custom quote <span aria-hidden="true">↗</span></a>
    <button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="main-nav"><span></span></button>
  </div></header>`;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `<footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand"><a class="brand" href="/" aria-label="Aqua Nova home"><span class="brand-icon" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M20 3C14 12 8 18 8 26a12 12 0 0 0 24 0C32 18 26 12 20 3Z" fill="#a5e5d3"/><path d="M14 25c0 4 2.5 6 6 6" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.7"/></svg></span><span class="brand-wordmark">AQUA NOVA<small>YOUR BRAND. YOUR BOTTLE.</small></span></a><p>Clear water. Custom labels. A thoughtful digital connection, made for your brand.</p></div>
      <div class="footer-column"><h3>Discover</h3><a href="/#bottles">Our bottles</a><a href="/#concept-grid">Label concepts</a><a href="/#qr">QR experience</a><a href="/#industries">Industries</a></div>
      <div class="footer-column"><h3>Explore</h3><a href="/#work">Customer pages</a><a href="${CUSTOMER_PATH}shrishti-solutions">Shrishti Solutions</a><a href="${CUSTOMER_PATH}bluebird-cafe">Bluebird Cafe</a><a href="${CUSTOMER_PATH}summit-2027">Summit 2027</a></div>
      <div class="footer-column footer-contact"><h3>Talk to Atul</h3><p>${OWNER_NAME} · Aqua Nova</p><a href="tel:+919324596287">${OWNER_PHONE}</a><a href="mailto:${OWNER_EMAIL}">${OWNER_EMAIL}</a><a href="#" data-whatsapp>Chat on WhatsApp ↗</a><a href="https://github.com/Rajput-Atul" target="_blank" rel="noopener noreferrer">GitHub profile ↗</a><a href="https://linkedin.com/in/atul-chauhan-716991221" target="_blank" rel="noopener noreferrer">LinkedIn profile ↗</a></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Aqua Nova. Your brand. Your bottle. Your experience.</span><span>Made for moments that matter.</span></div>
  </footer>`;
}

function renderProducts() {
  document.getElementById("product-grid").innerHTML = products.map((product) => `<article class="product-card" data-product-size="${escapeHtml(product.size)}">
    <div class="product-visual"><span class="product-visual-tag">Clear PET · Custom label</span>${photoFrame(product.photo, { alt: `${product.size} clear PET bottle photo with Aqua Nova label concept` })}</div>
    <div class="product-info"><div class="product-title-row"><h3>${escapeHtml(product.title)}</h3><span class="product-size">${escapeHtml(product.size)}</span></div><p>${escapeHtml(product.detail)}</p><div class="product-actions"><span>${escapeHtml(product.note)}</span><a href="#quote" data-quote-size="${escapeHtml(product.size)}">Get a quote <span aria-hidden="true">↗</span></a></div></div>
  </article>`).join("");
}

function renderConcepts() {
  document.getElementById("concept-grid").innerHTML = concepts.map(([title, type, size, detail, theme], i) => `<article class="concept-card concept-card-label concept-${theme}">
    <span class="concept-number">A / ${String(i + 1).padStart(2, "0")}</span><span class="concept-size">${escapeHtml(size)}</span>
    <div class="concept-label-art" aria-hidden="true"><span>AQUA NOVA</span><strong>${escapeHtml(title)}</strong><small>YOUR BRAND · YOUR STORY</small><i>QR</i></div>
    <div class="concept-info"><span>${escapeHtml(type)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(detail)}</p></div>
  </article>`).join("");
}

function renderIndustries() {
  document.getElementById("industry-grid").innerHTML = industries.map(([title, detail, icon]) => `<article class="industry-card"><span class="industry-icon" aria-hidden="true">${icon}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(detail)}</p></div></article>`).join("");
}

function renderCustomers() {
  document.getElementById("customer-grid").innerHTML = customers.map(customerCard).join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function whatsappUrl(message) {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

function attachWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl("Hello Aqua Nova, I'd like to know more about customized branded water bottles.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function setQuoteSummary() {
  const form = document.getElementById("quote-form");
  if (!form) return;
  const data = new FormData(form);
  const size = data.get("size");
  const quantity = Math.max(1, Number(data.get("quantity")) || 1);
  const occasion = data.get("occasion");
  const label = data.has("label");
  const qr = data.has("qr");
  document.getElementById("quote-summary").innerHTML = `<strong>Your enquiry</strong><br>${escapeHtml(quantity.toLocaleString())} × ${escapeHtml(size)} · ${escapeHtml(occasion)}<br>${label ? "Custom label" : "Standard label"}${qr ? " · QR experience requested" : ""}<br><span>No instant price is shown; the final quote depends on your full brief.</span>`;
}

function attachQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;
  form.addEventListener("input", setQuoteSummary);
  form.addEventListener("change", setQuoteSummary);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      "Hello Aqua Nova, I'd like a custom bottle quote.",
      `Bottle size: ${data.get("size")}`,
      `Quantity: ${Math.max(1, Number(data.get("quantity")) || 1)}`,
      `Business / event: ${data.get("occasion")}`,
      `Custom label: ${data.has("label") ? "Yes" : "No"}`,
      `QR page: ${data.has("qr") ? "Yes" : "No"}`
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  });
  setQuoteSummary();
}

function attachSizeFilters() {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach((item) => {
        const selected = item === chip;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      document.querySelectorAll(".product-card").forEach((card) => {
        card.hidden = chip.dataset.size !== "all" && card.dataset.productSize !== chip.dataset.size;
      });
    });
  });
  document.querySelectorAll("[data-quote-size]").forEach((link) => {
    link.addEventListener("click", () => {
      const select = document.querySelector('#quote-form select[name="size"]');
      if (select) select.value = link.dataset.quoteSize;
      setQuoteSummary();
    });
  });
}

function attachMobileNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  }));
}

function foodImage(index) {
  return foodArtwork(index);
}

function renderCustomerPage(customer) {
  document.getElementById("home-page").hidden = true;
  const page = document.getElementById("customer-page");
  page.hidden = false;
  page.className = "customer-page";
  document.title = `${customer.name} | Aqua Nova`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `${customer.oneLiner} Discover the ${customer.type.toLowerCase()} experience on this sample Aqua Nova customer page.`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = `${customer.name} — Customer experience by Aqua Nova`;

  const logoText = customer.name === "Bluebird Cafe" ? "bluebird" : customer.name === "Summit 2027" ? "S 27" : "SS";
  let customSection = "";
  if (customer.slug === "bluebird-cafe") {
    customSection = `<section class="menu-section"><div class="menu-section-head"><div><p class="eyebrow">From the cafe</p><h2>A little something<br><em>for every appetite.</em></h2></div><p class="section-intro">A sample menu preview. Items, ingredients and prices should be confirmed by the business before publishing.</p></div>
      <div class="menu-tabs" role="group" aria-label="Menu categories">${menuCategories.map((category, i) => `<button class="menu-tab${i === 0 ? " is-active" : ""}" type="button" data-menu-category="${escapeHtml(category)}" aria-pressed="${i === 0}">${escapeHtml(category)}</button>`).join("")}</div>
      <div class="menu-grid" id="menu-grid">${menuItems.map((item, index) => menuCard(item, index)).join("")}</div>
    </section>`;
  } else if (customer.slug === "summit-2027") {
    customSection = `<section class="menu-section"><p class="eyebrow">A day to look ahead</p><h2>The programme</h2><p class="section-intro">Sample agenda for demonstration only. Confirm event timings and venue before sharing this page.</p>
      <div class="event-schedule">
        <article class="schedule-item"><time>09:00 — 09:30</time><h3>Welcome & opening remarks</h3><p>Registration, coffee and a warm welcome to Summit 2027.</p></article>
        <article class="schedule-item"><time>09:30 — 10:30</time><h3>Ideas for what comes next</h3><p>A keynote on thoughtful change and practical innovation.</p></article>
        <article class="schedule-item"><time>10:45 — 12:00</time><h3>People, purpose & progress</h3><p>A panel discussion followed by audience questions.</p></article>
      </div>
    </section>`;
  } else {
    customSection = `<section class="menu-section"><p class="eyebrow">How we can help</p><h2>Good work starts<br><em>with a conversation.</em></h2><div class="event-schedule">${customer.services.map(([title, text]) => `<article class="schedule-item"><span class="industry-icon" aria-hidden="true">✳</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div></section>`;
  }

  const reviewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(customer.name)}`;
  const locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${customer.name} ${customer.city}`)}`;
  const contactVCF = `<button type="button" data-vcard="${escapeHtml(customer.name)}">Save contact card</button>`;
  page.innerHTML = `<section class="customer-hero" style="--customer-color:${customer.color};--customer-accent:${customer.accent}"><div class="customer-hero-inner">
    <div><p class="eyebrow">${escapeHtml(customer.type)} · A sample customer experience</p><h1>${escapeHtml(customer.name)}<br><em>${escapeHtml(customer.oneLiner.split(".")[0])}.</em></h1><p>${escapeHtml(customer.intro)}</p>
      <div class="customer-actions"><a class="button button-light" href="#customer-contact">Get in touch <span aria-hidden="true">↗</span></a><a class="button button-outline-light" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">Find us on Google Maps <span aria-hidden="true">↗</span></a></div>
    </div><div class="customer-hero-logo" aria-label="${escapeHtml(customer.name)} logo">${escapeHtml(logoText)}</div>
  </div></section>
  <div class="customer-content">
    <section class="customer-about"><div><p class="eyebrow">A little about us</p><h2>Here for the<br><em>good things.</em></h2></div><div><p>${escapeHtml(customer.story)}</p><div class="customer-highlights">${customer.highlights.map((item) => `<span class="highlight-pill">${escapeHtml(item)}</span>`).join("")}</div></div></section>
    ${customSection}
    <section class="customer-contact" id="customer-contact"><div><p class="eyebrow">Come say hello</p><h2>We’d love to<br><em>hear from you.</em></h2><p>${escapeHtml(customer.address)} · ${escapeHtml(customer.city)}<br>This is a sample page. Replace with the customer's verified details before launch.</p></div>
      <div class="contact-links"><a href="${locationUrl}" target="_blank" rel="noopener noreferrer">View location ↗</a><a href="${whatsappUrl(`Hello, I'd like to contact ${customer.name}.`)}" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>${contactVCF}</div>
    </section>
  </div>`;
  attachCustomerControls(customer);
  attachWhatsAppLinks();
}

function renderShrishtiReferencePage() {
  const page = document.getElementById("customer-page");
  document.getElementById("home-page").hidden = true;
  document.getElementById("site-header").hidden = true;
  document.getElementById("site-footer").hidden = true;
  page.hidden = false;
  page.className = "shrishti-reference-page";
  document.body.classList.add("is-shrishti-reference");
  document.title = "Shrishti Solutions | Furniture & Aluminium Works";
  document.querySelector('meta[name="description"]').content =
    "Shrishti Solutions in Ambernath, Maharashtra — custom furniture, aluminium works, interior solutions and large projects.";

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Shrishti+Solutions+Ambernath+Maharashtra";
  const reviewUrl = "https://www.google.com/maps/search/?api=1&query=Shrishti+Solutions+Ambernath+Maharashtra";
  page.innerHTML = `<figure class="shrishti-reference">
    <img src="/assets/reference/shrishti-reference.jpg" alt="Shrishti Solutions reference page: premium furniture and aluminium works in Ambernath, featuring services, project gallery, business contact and map." fetchpriority="high">
    <a class="shrishti-hotspot shrishti-hotspot-top" href="tel:+919022288367" aria-label="Call Shrishti Solutions at 90222 88367"></a>
    <a class="shrishti-hotspot shrishti-hotspot-call" href="tel:+919022288367" aria-label="Call Shrishti Solutions at 90222 88367"></a>
    <a class="shrishti-hotspot shrishti-hotspot-whatsapp" href="https://wa.me/919022288367" target="_blank" rel="noopener noreferrer" aria-label="Message Shrishti Solutions on WhatsApp"></a>
    <a class="shrishti-hotspot shrishti-hotspot-map" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="Get directions to Shrishti Solutions in Ambernath"></a>
    <a class="shrishti-hotspot shrishti-hotspot-review" href="${reviewUrl}" target="_blank" rel="noopener noreferrer" aria-label="Find Shrishti Solutions on Google"></a>
    <figcaption class="sr-only">Shrishti Solutions — Build, Design, Transform. Custom furniture, aluminium fabrication and installation, commercial and residential projects, and quality craftsmanship. Located in Ambernath, Maharashtra. Contact Narendra Chauhan at 90222 88367.</figcaption>
  </figure>
  <div class="sr-only" id="shrishti-contact"><h1>Shrishti Solutions</h1><p>Premium furniture work, aluminium works and large projects in Ambernath, Maharashtra.</p><h2>Our services</h2><ul><li>Furniture work and custom designs</li><li>Aluminium windows, doors, partitions and facades</li><li>Commercial and residential large projects</li><li>Interior solutions</li></ul><p>Contact Narendra Chauhan at 90222 88367.</p></div>`;
}

function renderMainReferencePage() {
  const page = document.getElementById("home-page");
  document.getElementById("site-header").hidden = true;
  document.getElementById("site-footer").hidden = true;
  document.getElementById("customer-page").hidden = true;
  page.hidden = false;
  page.innerHTML = `<figure class="main-reference">
    <img src="/assets/reference/aqua-nova-reference.jpg" alt="The complete Aqua Nova website reference: custom branded water bottles, QR experiences, industries, process, examples, contact buttons and footer." fetchpriority="high">
    <span class="main-reference-target" id="about" style="top:31%"></span>
    <span class="main-reference-target" id="how-it-works" style="top:53%"></span>
    <span class="main-reference-target" id="bottle-designs" style="top:21%"></span>
    <span class="main-reference-target" id="industries" style="top:39%"></span>
    <span class="main-reference-target" id="contact" style="top:89%"></span>
    <a class="main-reference-hotspot main-hotspot-home" href="/" aria-label="Aqua Nova home"></a>
    <a class="main-reference-hotspot main-hotspot-about" href="#about" aria-label="About Aqua Nova"></a>
    <a class="main-reference-hotspot main-hotspot-how" href="#how-it-works" aria-label="How it works"></a>
    <a class="main-reference-hotspot main-hotspot-designs" href="#bottle-designs" aria-label="Bottle designs"></a>
    <a class="main-reference-hotspot main-hotspot-industries" href="#industries" aria-label="Industries served"></a>
    <a class="main-reference-hotspot main-hotspot-contact" href="mailto:${OWNER_EMAIL}" aria-label="Email ${OWNER_NAME} at ${OWNER_EMAIL}"></a>
    <a class="main-reference-hotspot main-hotspot-quote" href="mailto:${OWNER_EMAIL}?subject=Aqua%20Nova%20custom%20bottle%20enquiry" aria-label="Get your custom bottles — email ${OWNER_NAME}"></a>
    <a class="main-reference-hotspot main-hotspot-hero-quote" href="mailto:${OWNER_EMAIL}?subject=Aqua%20Nova%20custom%20bottle%20enquiry" aria-label="Get your custom bottles — email ${OWNER_NAME}"></a>
    <a class="main-reference-hotspot main-hotspot-qr" href="/c/shrishti-solutions" aria-label="Explore the sample QR experience"></a>
    <a class="main-reference-hotspot main-hotspot-industries-cta" href="#industries" aria-label="View all industries"></a>
    <a class="main-reference-hotspot main-hotspot-examples" href="/c/shrishti-solutions" aria-label="View a sample customer page"></a>
    <a class="main-reference-hotspot main-hotspot-whatsapp" href="https://wa.me/919324596287" target="_blank" rel="noopener noreferrer" aria-label="Chat with ${OWNER_NAME} on WhatsApp"></a>
    <a class="main-reference-hotspot main-hotspot-call" href="tel:+919324596287" aria-label="Call ${OWNER_NAME} at ${OWNER_PHONE}"></a>
    <a class="main-reference-hotspot main-hotspot-github" href="https://github.com/Rajput-Atul" target="_blank" rel="noopener noreferrer" aria-label="${OWNER_NAME} on GitHub"></a>
    <a class="main-reference-hotspot main-hotspot-linkedin" href="https://linkedin.com/in/atul-chauhan-716991221" target="_blank" rel="noopener noreferrer" aria-label="${OWNER_NAME} on LinkedIn"></a>
    <figcaption class="sr-only">Aqua Nova — Scan, Connect, Grow. Atul Chauhan creates customized water bottle branding and QR experiences. Call or WhatsApp ${OWNER_PHONE}; email ${OWNER_EMAIL}. GitHub: Rajput-Atul. LinkedIn: Atul Chauhan.</figcaption>
  </figure>`;
  document.body.classList.add("is-main-reference");
  document.title = "Aqua Nova — Scan · Connect · Grow";
  document.querySelector('meta[name="theme-color"]').content = "#020d1b";
  document.querySelector('meta[name="description"]').content =
    "Aqua Nova custom water bottle branding and QR experiences. Contact Atul Chauhan by phone, email, GitHub or LinkedIn.";
  document.querySelector('meta[property="og:image"]').content = "/assets/reference/aqua-nova-reference.jpg";
}

function menuCard(item, index) {
  const [category, name, description, price, dietary] = item;
  return `<article class="menu-card" data-menu-item="${escapeHtml(category)}"><div class="food-art">${foodImage(index)}</div><div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p><span class="dietary${dietary === "nonveg" ? " nonveg" : ""}" aria-label="${dietary === "veg" ? "Vegetarian" : "Non-vegetarian"}">${dietary === "veg" ? "VEG" : "NON-VEG"}</span><span class="menu-price">${escapeHtml(price)}</span></div></article>`;
}

function attachCustomerControls(customer) {
  const tabs = document.querySelectorAll("[data-menu-category]");
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-menu-item]").forEach((card) => {
      card.hidden = tab.dataset.menuCategory !== "All" && card.dataset.menuItem !== tab.dataset.menuCategory;
    });
  }));
  document.querySelectorAll("[data-vcard]").forEach((button) => button.addEventListener("click", () => {
    const name = customer.name.replace(/[\r\n,;]/g, " ");
    const contents = ["BEGIN:VCARD", "VERSION:3.0", `FN:${name}`, `ORG:${name}`, "NOTE:Sample customer contact card from Aqua Nova", "END:VCARD"].join("\r\n");
    const blob = new Blob([contents], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${customer.slug}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("Sample contact card downloaded.");
  }));
}

function renderNotFound() {
  document.getElementById("home-page").hidden = true;
  const page = document.getElementById("customer-page");
  page.hidden = false;
  page.className = "not-found";
  page.innerHTML = `<div><p class="eyebrow">Aqua Nova customer page</p><h1>Page not found.</h1><p>That customer experience doesn’t exist in this frontend demo. You can explore our bottles and sample pages from the Aqua Nova homepage.</p><a class="button button-dark" href="/">Back to Aqua Nova <span aria-hidden="true">↗</span></a></div>`;
  document.title = "Page not found | Aqua Nova";
}

function mountPhotoSlots() {
  document.querySelectorAll("[data-photo-slot]").forEach((slot) => {
    slot.innerHTML = photoFrame(Number(slot.dataset.photoSlot), { className: "slot-photo" });
  });
}

function observePhotos() {
  document.querySelectorAll(".photo-media img").forEach((image) => {
    image.addEventListener("load", fitPhotoMedia, { once: true });
  });
  window.addEventListener("resize", fitPhotoMedia, { passive: true });
  requestAnimationFrame(fitPhotoMedia);
}

function start() {
  renderHeader();
  renderFooter();
  attachMobileNavigation();
  mountPhotoSlots();
  mountQrLabels();
  observePhotos();
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path.startsWith(CUSTOMER_PATH)) {
    const slug = path.slice(CUSTOMER_PATH.length).split("/")[0];
    const customer = customers.find((item) => item.slug === slug);
    if (slug === "shrishti-solutions") renderShrishtiReferencePage();
    else if (customer) renderCustomerPage(customer);
    else renderNotFound();
    return;
  }
  renderMainReferencePage();
}

document.addEventListener("DOMContentLoaded", start);
