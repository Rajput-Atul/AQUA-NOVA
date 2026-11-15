import os

css_dir = "c:/Users/atulc/Downloads/Aqua-Nova/css"
os.makedirs(css_dir, exist_ok=True)
css_path = css_dir + "/style.css"

parts = []

# Part 1: Variables and base
part1 = """@charset UTF-8;

:root {
  --color-deep-ocean: #0a1f3d;
  --color-midnight-navy: #0f2440;
  --color-ocean-blue: #1a4a7a;
  --color-aqua-blue: #2a7ab5;
  --color-light-aqua: #4fb3d9;
  --color-cyan: #61c2e8;
  --color-white: #ffffff;
  --color-off-white: #f8fafc;
  --color-silver: #e2e8f0;
  --color-silver-light: #cbd5e1;
  --color-gold: #d4af37;
  --color-gold-light: #f0dca8;
  --color-gold-dark: #a8873a;
  --color-text: #1a2332;
  --color-text-light: #475569;
  --color-text-muted: #64748b;
  --color-heading: #0a1f3d;
  --gradient-ocean: linear-gradient(180deg, #0a1f3d 0%, #0f2440 60%, #1a3a5a 100%);
  --gradient-gold-text: linear-gradient(135deg, #d4af37 0%, #f0dca8 100%);
  --gradient-card: linear-gradient(180deg, #ffffff 0%, #f0f6fa 100%);
  --shadow-sm: 0 1px 3px rgba(10, 31, 61, 0.08);
  --shadow-md: 0 4px 16px rgba(10, 31, 61, 0.12);
  --shadow-lg: 0 12px 48px rgba(10, 31, 61, 0.18);
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --font-serif: Georgia, Times New Roman, serif;
  --font-sans: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
  --font-display: Playfair Display, Georgia, serif;
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  --transition-slower: 0.8s ease;
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body { font-family: var(--font-sans); font-size: 16px; line-height: 1.7; color: var(--color-text); background: var(--color-white); overflow-x: hidden; }
img { max-width: 100%; display: block; height: auto; }
a { text-decoration: none; color: inherit; transition: color var(--transition-fast); }
ul { list-style: none; }

h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); font-weight: 700; line-height: 1.2; color: var(--color-heading); }
h1 { font-size: clamp(2.2rem, 5vw, 4.2rem); }
h2 { font-size: clamp(1.8rem, 4vw, 3.2rem); }
h3 { font-size: clamp(1.3rem, 2.5vw, 2rem); }
h4 { font-size: clamp(1.1rem, 2vw, 1.5rem); }
p { font-size: 1rem; line-height: 1.8; color: var(--color-text-light); }
.text-serif { font-family: var(--font-serif); }
.font-display { font-family: var(--font-display); }

.container { width: 100%; max-width: 1320px; margin: 0 auto; padding: 0 var(--space-lg); }
.section { padding: var(--space-4xl) 0; }
.section-label { font-size: 0.8rem; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--color-gold); margin-bottom: var(--space-sm); }
.section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 700; color: var(--color-heading); margin-bottom: var(--space-md); line-height: 1.2; }
.section-subtitle { font-size: 1.05rem; color: var(--color-text-light); max-width: 600px; margin-bottom: var(--space-lg); }

.grid { display: grid; gap: var(--space-xl); }
.grid-2, .grid-3, .grid-4, .grid-5, .grid-6 { display: grid; gap: var(--space-xl); }
"""
parts.append(part1)
print("Part 1 done")
