# Mohammed Bilal - Professional Portfolio Website

A modern, professional portfolio website showcasing AI development expertise, projects, and client reviews.

## Features

- 🎨 Modern, responsive design with professional animations
- 🤖 AI-powered chatbot (Gemini API integration)
- 📱 Mobile-first responsive layout
- 🎬 Video project demos
- ⭐ Client reviews showcase
- 🚀 Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI Chatbot**: Google Gemini API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aqibbilal188/Profile-.git
cd Profile-
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable `GEMINI_API_KEY` in Vercel dashboard
4. Deploy!

### Environment Variables

For the chatbot to work, add this in your Vercel project settings:
- `GEMINI_API_KEY` - Your Google Gemini API key

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/          # Chatbot API route
│   ├── components/         # React components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   ├── images/             # Images
│   └── videos/             # Project demo videos
└── package.json
```

## Customization

- Update profile information in components
- Add/modify projects in `app/components/Projects.tsx`
- Update reviews in `app/components/Reviews.tsx`
- Customize colors in `tailwind.config.ts`

## License

Private - All rights reserved

## Contact

Mohammed Bilal
- Portfolio: [mohammedbilalai.com](https://mohammedbilalai.com)
- GitHub: [@aqibbilal188](https://github.com/aqibbilal188)
