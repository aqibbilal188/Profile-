import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Bilal - AI Developer | Full-Stack Developer",
  description: "Professional AI Developer with 2+ years of experience. Specializing in AI-powered applications, chatbots, web development, and mobile apps. 5-star rated freelancer with 20+ successful projects.",
  keywords: ["AI Developer", "Full-Stack Developer", "Chatbot Developer", "Web Developer", "Mobile App Developer", "Freelancer", "Saudi Arabia"],
  authors: [{ name: "Mohammed Bilal" }],
  creator: "Mohammed Bilal",
  openGraph: {
    title: "Mohammed Bilal - AI Developer Portfolio",
    description: "Professional AI Developer specializing in AI-powered applications, chatbots, and full-stack development",
    url: "https://mohammedbilal.dev",
    siteName: "Mohammed Bilal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Bilal - AI Developer",
    description: "Professional AI Developer with 2+ years of experience",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Bilal",
              jobTitle: "AI Developer",
              description: "Professional AI Developer specializing in AI-powered applications, chatbots, and full-stack development",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressLocality: "Saudi Arabia",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}



