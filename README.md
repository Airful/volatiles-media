# Volatiles — Next.js 15 Recreation

Strict 1:1 recreation of volatiles.de in Next.js 15 (App Router) + Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Image Assets Required

Place the following images in `/public/images/`:

| File name | Used in | Source |
|---|---|---|
| `light-art-room.jpg` | InteractiveLightArt section | Screenshot 2 — luxury penthouse with LED panel |
| `material-wood.jpg` | ArtSurfaces | Screenshot 3 — burl wood texture |
| `material-stone.jpg` | ArtSurfaces | Screenshot 3 — exotic marble |
| `material-concrete.jpg` | ArtSurfaces | Screenshot 3 — grey concrete |
| `material-mosaic.jpg` | ArtSurfaces | Screenshot 3 — blue mosaic tiles |
| `partner-video-thumb.jpg` | WhyPartner | Screenshot 7 — first card thumbnail |
| `partner-app.jpg` | WhyPartner | Screenshot 7 — app screenshots grid |
| `partner-installation.jpg` | WhyPartner | Screenshot 7 — hallway installation |
| `partner-layers.jpg` | WhyPartner | Screenshot 7 — exploded layers diagram |
| `team-felix.jpg` | TeamSection | Screenshot 8 — Felix Mreiche photo |
| `team-olia.jpg` | TeamSection | Screenshot 8 — Olia Terentieva photo |

## Video Assets (optional)

| File name | Used in |
|---|---|
| `/public/videos/product-demo.mp4` | WhyPartner — first card video |

---

## Design System

| Token | Value |
|---|---|
| Gold | `#C9A962` |
| Gold dark (hover) | `#B8962F` |
| Black | `#000000` |
| Silver text | `#B3B3B3` |
| Muted text | `#808080` |
| Heading font | Cormorant Garamond (serif) |
| Body font | Jost (sans-serif) |

---

## Project Structure

```
volatiles/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # Base styles + Google Fonts
├── components/
│   ├── Navbar.tsx          # Fixed transparent nav → scrolled dark
│   ├── Hero.tsx            # Full-screen hero with email CTA
│   ├── InteractiveLightArt.tsx  # Full-bleed room photo + overlay
│   ├── ArtSurfaces.tsx     # 4-column material grid
│   ├── TechnologySection.tsx    # Split: panel glow + features
│   ├── Testimonial.tsx     # Centered italic quote
│   ├── SpacesTransformed.tsx    # 2×3 application grid
│   ├── WhyPartner.tsx      # 4-column partner cards
│   ├── TeamSection.tsx     # Circular profile cards
│   └── ConsultationForm.tsx     # Form + Footer
├── public/
│   ├── images/             # → Add your image files here
│   └── videos/             # → Add product-demo.mp4 here
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Sections Built (in order)

1. ✅ **Navbar** — Transparent, scrolls to dark, gold hover underline, mobile hamburger menu
2. ✅ **Hero** — "Where Light Meets Matter", email input, gold CTA, DISCOVER scroll indicator
3. ✅ **Interactive Light Art** — Full-viewport cinematic section with "REQUEST PRIVATE VIEWING"
4. ✅ **Exclusive Art Surfaces** — 4 material cards: Wood, Stone, Concrete, Mosaic
5. ✅ **Technology That Disappears** — Split layout with glowing panel simulation + 3 feature cards
6. ✅ **Testimonial** — Centered italic yacht quote with decorative quotation marks
7. ✅ **Spaces Transformed** — 2×3 applications grid with SVG icons
8. ✅ **Why Partner with Volatiles** — 4 partner cards with media + copy
9. ✅ **Team Mediterranean** — Circular photos, gold names, email/phone links
10. ✅ **Consultation Form + Footer** — Full enquiry form + branded footer

## Responsive Breakpoints

- Mobile: < 640px — single column, scaled typography
- Tablet: 640–1024px — 2-column where applicable
- Desktop: > 1024px — full layout as designed
