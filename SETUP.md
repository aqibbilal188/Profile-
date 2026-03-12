# Portfolio Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Your Videos

Place your project demo videos in the `public/videos/` directory with these names:
- `crypto-trading-bot.mp4`
- `crypto-dex.mp4`
- `ai-calling-agent.mp4`
- `whatsapp-chatbot.mp4`
- `university-website.mp4`

## Customization

### Update Social Links
Edit `app/components/Contact.tsx` and update:
- Fiverr profile URL
- LinkedIn profile URL
- GitHub profile URL
- Email address

### Update Contact Form
The contact form currently shows a success message. To make it functional:
1. Sign up for a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
2. Update the `handleSubmit` function in `app/components/Contact.tsx`

### Update SEO Metadata
Edit `app/layout.tsx` to update:
- Website URL in Open Graph tags
- Social media links in structured data

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure everything
4. Your site will be live!

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth scroll animations with Framer Motion
✅ SEO optimized with meta tags and structured data
✅ All 11 projects showcased
✅ All 10 client reviews in carousel
✅ Skills section with interactive cards
✅ Contact form ready for integration
✅ Professional modern design with Tailwind CSS

## Next Steps

1. Add your demo videos to `public/videos/`
2. Update social media links in Contact component
3. Customize colors in `tailwind.config.ts` if desired
4. Deploy to Vercel

Enjoy your new portfolio! 🚀





