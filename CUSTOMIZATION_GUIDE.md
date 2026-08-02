# SRIMATH Builders - Premium Real Estate Website

## Overview

This is a production-ready, responsive premium builder/real estate website for SRIMATH Builders, a Chennai-based construction company. The website is built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Key Features

✅ **Responsive Design** - Mobile-first approach supporting all devices (320px - 4K+)
✅ **Full-Screen Hero Video** - Autoplay, loop, muted background video with overlay
✅ **Fixed Navigation** - Sticky header that changes appearance on scroll
✅ **Mobile Drawer Menu** - Smooth hamburger navigation with keyboard accessibility
✅ **Project Slider** - Interactive carousel with pagination and navigation
✅ **Statistics Counter** - Animated count-up when sections enter viewport
✅ **Video Showcase** - Custom play/pause button over video
✅ **Testimonials Carousel** - Responsive slider showing customer feedback
✅ **Floating Buttons** - WhatsApp chat and scroll-to-top buttons
✅ **Animations** - Subtle scroll-triggered animations (respects prefers-reduced-motion)
✅ **SEO Optimized** - Proper metadata, semantic HTML, heading hierarchy
✅ **Accessibility** - ARIA labels, keyboard navigation, focus states
✅ **TypeScript** - Full type safety throughout the codebase
✅ **Performance** - Optimized images, lazy loading, minimal client-side JS

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & viewport
│   ├── page.tsx            # Main page (server component)
│   ├── globals.css         # Global styles, animations, theme
│   └── api/
├── components/
│   ├── Header.tsx          # Navigation header (fixed/sticky)
│   ├── MobileMenu.tsx      # Hamburger side navigation drawer
│   ├── Hero.tsx            # Full-screen hero section with video
│   ├── PartnershipSection.tsx
│   ├── StatsSection.tsx    # Statistics with count-up animation
│   ├── VideoShowcase.tsx   # Video section with play/pause control
│   ├── ProjectsIntroSection.tsx
│   ├── ProjectCard.tsx     # Reusable project card component
│   ├── ProjectSlider.tsx   # Project carousel with pagination
│   ├── WhyChooseUs.tsx     # Features section
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── CTASection.tsx      # Call-to-action section
│   ├── Footer.tsx          # Footer with links and social media
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   ├── ScrollToTop.tsx     # Floating scroll-to-top button
│   └── index.ts            # Component exports
├── constants/
│   └── index.ts            # Brand config, navigation, data
├── types/
│   └── index.ts            # TypeScript interfaces
└── services/
    └── blog.service.ts     # API services (Supabase setup)
```

## Customization Guide

### 1. Update Brand Information

Edit `src/constants/index.ts`:

```typescript
export const BRAND_NAME = "YOUR COMPANY NAME";
export const WHATSAPP_NUMBER = "+91-XXXXXXXXXX"; // Your WhatsApp number
export const COMPANY_EMAIL = "contact@yourcompany.com";
export const COMPANY_PHONE = "+91-XX-XXXX-XXXX";
export const OFFICE_ADDRESS = "Your address here";
```

### 2. Update Projects

Add your projects to `src/constants/index.ts` in the `PROJECTS` array:

```typescript
{
  id: "unique-id",
  title: "PROJECT NAME",
  subtitle: "Project Type",
  location: "Location",
  image: "https://your-image-url.jpg",
  status: "READY TO MOVE", // or "UNDER CONSTRUCTION", "LAUNCHING SOON"
  category: "Category",
  description: "Description..."
}
```

### 3. Update Testimonials

Add customer testimonials to `src/constants/index.ts`:

```typescript
{
  id: "unique-id",
  name: "Customer Name",
  projectName: "Project Name",
  rating: 5,
  testimonial: "Their testimonial here...",
  designation: "Job Title"
}
```

### 4. Replace Media

- **Logo**: Update in Header component or add to `/public/images/`
- **Hero Video**: Replace video URL in `Hero.tsx`
- **Project Images**: Update image URLs in PROJECTS constant
- **Background Images**: Update in respective sections

### 5. Update Colors

The brand colors are defined in `src/app/globals.css`:

```css
:root {
  --color-primary: #f69f11; /* Deep red/maroon */
  --color-dark: #000000;
  --color-light: #ffffff;
  --color-gray: #f5f5f5;
  --color-gray-dark: #333333;
}
```

Change these to match your brand colors.

### 6. Update Metadata & SEO

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title Here",
  description: "Your description here...",
  keywords: ["keyword1", "keyword2"],
  // ... other properties
};
```

### 7. Update Navigation Links

Edit `src/constants/index.ts` NAV_LINKS array to update menu items and their links.

### 8. Update Contact Information

Edit `src/constants/index.ts` to update:

- QUICK_LINKS
- PROJECT_LINKS
- SOCIAL_LINKS
- Contact details in Footer section

## Color Palette

```
Primary Red/Maroon: #F69F11
Dark: #000000
Light: #ffffff
Gray: #f5f5f5
Dark Gray: #333333
Green (WhatsApp): #25D366
```

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Video Requirements

- **Format**: MP4 (best browser support)
- **Size**: Keep under 10MB for hero video
- **Resolution**: 1920x1080 or higher
- **Properties**: Autoplay, muted, loop, playsInline

Recommended free video sources:

- Pexels Videos: https://www.pexels.com/videos/
- Pixabay Videos: https://pixabay.com/videos/
- Unsplash Videos: https://unsplash.com/nap/videos/

## Image Optimization

- Use Next.js Image component for all images
- Recommended image sizes:
  - Project cards: 800x600px
  - Background images: 1920x1080px or higher
  - Testimonial avatars: 200x200px

Recommended image sources:

- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

## Accessibility Features

✅ Semantic HTML (header, nav, section, footer, etc.)
✅ ARIA labels on icon-only buttons
✅ Keyboard navigation (Tab, Enter, Escape)
✅ Focus visible states
✅ Alt text for images
✅ Color contrast ratios meet WCAG AA standards
✅ Respects prefers-reduced-motion preference

## Performance Optimization

The website includes several performance optimizations:

- **Code Splitting**: Components are split into separate files
- **Lazy Loading**: Images load when visible
- **Image Optimization**: Next.js automatic optimization
- **CSS**: Tailwind purges unused styles
- **Minification**: Production build minifies code
- **Preload**: Critical fonts and resources

## SEO Best Practices

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h6)
- ✅ Meta tags and Open Graph
- ✅ Alt text for all images
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Structured data ready for implementation

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Dependencies

```json
{
  "next": "16.2.12",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "^4"
}
```

## TypeScript Configuration

- **Target**: ES2017
- **Module**: ESNext
- **Strict Mode**: Enabled
- **JSX**: React 19 JSX transform

## Deployment

The website is ready to deploy to:

- **Vercel** (recommended) - https://vercel.com/
- **Netlify** - https://www.netlify.com/
- **AWS Amplify** - https://aws.amazon.com/amplify/
- **Any Node.js hosting**

### Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Future Enhancements

Consider adding:

- [ ] Blog section with Supabase/CMS integration
- [ ] Property listing pages with filters
- [ ] Contact form with email notifications
- [ ] Virtual tours / 360° images
- [ ] Download brochures/documents
- [ ] Live chat support
- [ ] Google Analytics integration
- [ ] Sitemap generation
- [ ] robots.txt configuration
- [ ] Dark mode toggle

## Support & Maintenance

- Keep Next.js and dependencies updated
- Monitor performance with Lighthouse
- Test on real devices regularly
- Update content and images regularly
- Monitor SEO rankings and analytics

## License

This website template is custom-built for SRIMATH Builders.

## Contact

For customizations or support, contact the development team.

---

**Last Updated**: 2026-07-27
**Version**: 1.0.0
