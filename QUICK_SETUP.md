# Quick Setup Guide

## Step 1: Update Brand Information (5 minutes)

Edit **`src/constants/index.ts`** and replace:

```typescript
export const BRAND_NAME = "SRIMATH BUILDERS";
export const WHATSAPP_NUMBER = "+91-98765-43210";
export const COMPANY_EMAIL = "hello@srimathbuilders.com";
export const COMPANY_PHONE = "+91-44-XXXX-XXXX";
export const OFFICE_ADDRESS =
  "123, Temple Road, T Nagar, Chennai - 600017, Tamil Nadu";
```

## Step 2: Add Your Projects (10 minutes)

In **`src/constants/index.ts`**, update the `PROJECTS` array:

```typescript
export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "YOUR PROJECT TITLE",
    subtitle: "Project Type (e.g., Premium Apartments)",
    location: "Location in Chennai",
    image: "https://your-image-url.jpg",
    status: "READY TO MOVE", // or "UNDER CONSTRUCTION", "LAUNCHING SOON"
    category: "Category",
    description: "Brief description of the project...",
  },
  // Add more projects...
];
```

## Step 3: Add Customer Testimonials (10 minutes)

In **`src/constants/index.ts`**, update the `TESTIMONIALS` array:

```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Customer Name",
    projectName: "Project They Bought",
    rating: 5,
    testimonial: "Their feedback about your company...",
    designation: "Their Job Title",
  },
  // Add more testimonials...
];
```

## Step 4: Update Metadata & SEO (5 minutes)

Edit **`src/app/layout.tsx`** and update:

```typescript
export const metadata: Metadata = {
  title: "Your Company Name | Premium Builders in Chennai",
  description: "Your company description with keywords...",
  keywords: ["your", "keywords", "here"],
  openGraph: {
    title: "Your Company Name",
    description: "OG description...",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://your-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Image Alt Text",
      },
    ],
  },
};
```

## Step 5: Replace Hero Video (5 minutes)

Edit **`src/components/Hero.tsx`** and replace the video URL:

```typescript
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  poster="https://your-poster-image.jpg"
>
  <source
    src="https://your-hero-video.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
```

Recommended video sources:

- Pexels: https://www.pexels.com/videos/
- Pixabay: https://pixabay.com/videos/

## Step 6: Replace Project Images (5 minutes)

Update image URLs in the `PROJECTS` array in `src/constants/index.ts`

Free image sources:

- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

## Step 7: Update Colors (Optional - 5 minutes)

Edit **`src/app/globals.css`** to change brand colors:

```css
:root {
  --color-primary: #f69f11; /* Change this */
  --color-dark: #000000;
  --color-light: #ffffff;
  --color-gray: #f5f5f5;
  --color-gray-dark: #333333;
}
```

## Step 8: Update Navigation Links (5 minutes)

Edit **`src/constants/index.ts`** - Update `NAV_LINKS` array with your menu items.

## Step 9: Update Social Media Links (5 minutes)

In **`src/constants/index.ts`**, update the `SOCIAL_LINKS` array with your actual links:

```typescript
export const SOCIAL_LINKS = [
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://instagram.com/yourhandle",
  },
  {
    icon: "facebook",
    label: "Facebook",
    href: "https://facebook.com/yourpage",
  },
  // ... etc
];
```

## Step 10: Test Everything

```bash
# Run development server
npm run dev

# Open browser
# http://localhost:3000

# Check:
# - Homepage loads correctly
# - Navigation works
# - Project cards display
# - Buttons are clickable
# - Responsive on mobile
# - WhatsApp button links to correct number
```

## Step 11: Build for Production

```bash
npm run build
npm start
```

## Step 12: Deploy (Choose One)

### Option A: Vercel (Recommended - Takes 2 minutes)

```bash
npm install -g vercel
vercel
```

### Option B: Netlify

1. Connect GitHub repo to Netlify
2. Auto-deploys on push

### Option C: Any Node.js Hosting

```bash
npm run build
npm start
```

---

## Files You Must Update

| File                      | What to Update                       | Time   |
| ------------------------- | ------------------------------------ | ------ |
| `src/constants/index.ts`  | Brand, projects, testimonials, links | 30 min |
| `src/app/layout.tsx`      | Metadata, SEO, title                 | 5 min  |
| `src/components/Hero.tsx` | Hero video URL                       | 5 min  |
| `src/app/globals.css`     | Colors (optional)                    | 5 min  |

## Total Setup Time: ~1 hour

## Common Customizations

### Change Primary Color

Edit `src/app/globals.css` - change `--color-primary: #F69F11;`

### Add More Project Cards

Add to `PROJECTS` array in `src/constants/index.ts`

### Change WhatsApp Number

Edit `WHATSAPP_NUMBER` in `src/constants/index.ts`

### Update Footer Copyright Year

Auto-updates automatically! No changes needed.

### Add More Testimonials

Add to `TESTIMONIALS` array in `src/constants/index.ts`

## Performance Tips

- Use high-quality but compressed images (tools: TinyPNG, Squoosh)
- Use MP4 videos (smaller than WebM)
- Keep hero video under 10MB
- Host images on CDN (Cloudinary, AWS S3)

## SEO Tips

- Use descriptive project titles
- Add keywords to description
- Use high-quality og:image
- Ensure fast loading (<3 seconds)
- Test with: https://developers.google.com/search/console

## Testing Checklist

- [ ] Homepage loads in <3 seconds
- [ ] Mobile looks good
- [ ] All buttons are clickable
- [ ] Navigation menu works
- [ ] Project cards display correctly
- [ ] WhatsApp button opens chat
- [ ] Scroll-to-top button appears
- [ ] Forms/CTAs point to correct links
- [ ] No console errors

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/
- Web Accessibility: https://www.w3.org/WAI/

---

**Questions?** Refer to `CUSTOMIZATION_GUIDE.md` for detailed information.

**Ready to launch?** Your website is production-ready! 🚀
