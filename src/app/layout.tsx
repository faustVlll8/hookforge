import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "HookForge — AI Hooks & Content Packs for Marketers",
  description:
    "Generate high-converting hooks and ready-to-post content packs in seconds. Built for marketers and creators.",
  keywords: [
    "AI hook generator",
    "content packs for marketers",
    "social media hooks AI",
    "ad copy generator",
    "hook generator",
    "content packs",
  ],
  authors: [{ name: "HookForge" }],
  openGraph: {
    title: "HookForge — AI Hooks & Content Packs for Marketers",
    description:
      "Generate high-converting hooks and ready-to-post content packs in seconds. Built for marketers and creators.",
    url: "https://hookforge-pink.vercel.app", // замени на свой домен, когда будет
    siteName: "HookForge",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", // пока плейсхолдер, позже сделаем картинку
        width: 1200,
        height: 630,
        alt: "HookForge — Generate Hooks That Actually Convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HookForge — AI Hooks & Content Packs for Marketers",
    description:
      "Generate high-converting hooks and ready-to-post content packs in seconds.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}