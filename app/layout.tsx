import type { Metadata } from "next";
import { Chivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400"
});

const BASE_URL = "https://andrewhilario.site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Andrew Hilario | Full-Stack Developer",
    template: "%s | Andrew Hilario"
  },
  description:
    "Portfolio of Andrew Hilario — a Full-Stack Developer building modern, performant web applications with React, Next.js, Django, and more.",
  keywords: [
    "Andrew Hilario",
    "Full-Stack Developer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "Django",
    "TypeScript",
    "Philippines"
  ],
  authors: [{ name: "Andrew Hilario", url: BASE_URL }],
  creator: "Andrew Hilario",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Andrew Hilario | Full-Stack Developer",
    description:
      "Portfolio of Andrew Hilario — a Full-Stack Developer building modern, performant web applications with React, Next.js, Django, and more.",
    url: BASE_URL,
    siteName: "Andrew Hilario",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Andrew Hilario — Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Hilario | Full-Stack Developer",
    description:
      "Portfolio of Andrew Hilario — a Full-Stack Developer building modern, performant web applications with React, Next.js, Django, and more.",
    creator: "@andrewhilario",
    images: ["/images/profile.png"]
  },
  alternates: {
    canonical: BASE_URL
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  );
}
