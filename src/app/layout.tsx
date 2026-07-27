import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Premium Builders in Chennai | SRIMATH Builders - Luxury Homes & Commercial Spaces",
  description:
    "Discover premium residential and commercial projects from one of Chennai's trusted builders, delivering quality homes with design excellence, transparency and commitment to customer satisfaction.",
  keywords: [
    "builders in Chennai",
    "luxury apartments Chennai",
    "premium villas Chennai",
    "residential projects Chennai",
    "real estate Chennai",
  ],
  openGraph: {
    title: "Premium Builders in Chennai | SRIMATH Builders",
    description:
      "Luxury residential and commercial projects in Chennai. 100+ completed projects, 600+ happy families.",
    type: "website",
    url: "https://srimathbuilders.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604813614405-92fc801d440d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "SRIMATH Builders - Premium Construction",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8b1e23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%238b1e23'>S</text></svg>"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
