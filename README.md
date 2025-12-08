# Trivandrum Medical System Website

A modern, SEO-optimized website for Trivandrum Medical System - a leading distributor of medical equipment for sleep apnea treatment and respiratory care.

## Features

- **Next.js 14** with Static Site Generation (SSG)
- **TypeScript** for type safety
- **Tailwind CSS** for modern, responsive design
- **SEO Optimized** with:
  - Dynamic metadata for each page
  - Open Graph tags
  - Twitter cards
  - Sitemap generation
  - Robots.txt
  - Canonical URLs
  - Structured data ready
- **Product Pages** with:
  - Individual product detail pages
  - Product listings
  - Category filtering
  - Related products
- **Modern UI/UX** with:
  - Responsive design
  - Mobile-friendly navigation
  - Fast page loads
  - Accessibility features

## Products

- Auto CPAP
- BiPAP
- Oxygen Concentrator
- Home Sleep Study
- NIV Mask
- Travel CPAP
- Portable Oxygen Concentrator

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

This generates a static export in the `out` directory, ready for deployment to any static hosting service.

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── products/          # Product pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer component
├── data/                  # Data files
│   └── products.ts       # Product data
├── types/                 # TypeScript types
│   └── product.ts        # Product type definitions
└── public/               # Static assets (images, etc.)
```

## Adding Product Images

Place product images in the `public/images/products/` directory:
- `auto-cpap.jpg`
- `bipap.jpg`
- `oxygen-concentrator.jpg`
- `home-sleep-study.jpg`
- `niv-mask.jpg`
- `travel-cpap.jpg`
- `portable-oxygen-concentrator.jpg`

## SEO Configuration

Update the following in `app/layout.tsx`:
- Site URL: `https://travancoremedical.com`
- Google verification code
- Social media handles

Update product-specific SEO in `data/products.ts` for each product.

## Deployment

The site generates static files that can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## License

© 2024 Trivandrum Medical System. All rights reserved.

