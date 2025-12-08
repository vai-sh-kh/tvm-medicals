# Setup Instructions

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Product Images**
   
   Place your product images in `public/images/products/` directory:
   - `auto-cpap.jpg` (Main image for Auto CPAP)
   - `bipap.jpg` (Main image for BiPAP)
   - `oxygen-concentrator.jpg` (Main image for Oxygen Concentrator)
   - `home-sleep-study.jpg` (Main image for Home Sleep Study)
   - `niv-mask.jpg` (Main image for NIV Mask)
   - `travel-cpap.jpg` (Main image for Travel CPAP)
   - `portable-oxygen-concentrator.jpg` (Main image for Portable Oxygen Concentrator)
   
   Optional additional images:
   - `auto-cpap-1.jpg`, `auto-cpap-2.jpg` (Additional images)
   - Similar naming for other products

3. **Update Site Configuration**
   
   Edit `app/layout.tsx`:
   - Update site URL from `https://travancoremedical.com` to your actual domain
   - Add Google verification code (if you have one)
   - Update contact information (phone, email, address)

4. **Update Contact Information**
   
   Edit the following files:
   - `components/Header.tsx` - Update phone number
   - `components/Footer.tsx` - Update contact details
   - `app/contact/page.tsx` - Update contact form and details

5. **Update SEO Metadata**
   
   For each product in `data/products.ts`, ensure:
   - SEO titles are optimized
   - Meta descriptions are compelling
   - Keywords are relevant

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Production Build

```bash
npm run build
```

This creates a static export in the `out/` directory that can be deployed to any static hosting service.

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### Static Hosting (AWS S3, etc.)
1. Run `npm run build`
2. Upload contents of `out/` directory to your hosting service

## Important Notes

- The site uses Static Site Generation (SSG) for maximum SEO performance
- All product pages are pre-rendered at build time
- Images should be optimized before adding (recommended: WebP format, < 200KB each)
- Update sitemap URL in `app/robots.ts` when deploying

