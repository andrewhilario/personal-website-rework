import type { Metadata } from "next";
import { Chivo, Archivo_Black } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Andrew Hilario | Full-Stack Developer Portfolio",
  description:
    "Explore the portfolio of Andrew Hilario, a skilled full-stack developer specializing in modern web technologies. Discover projects, skills, and contact information.",
  keywords: [
    "Andrew Hilario",
    "Full-Stack Developer",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Projects",
    "React",
    "Next.js"
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Andrew Hilario | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Andrew Hilario, a skilled full-stack developer specializing in modern web technologies. Discover projects, skills, and contact information.",
    url: "https://andrewhilario.tech",
    type: "website",
    images: [
      {
        url: "https://andrewhilario.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrew Hilario Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Hilario | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Andrew Hilario, a skilled full-stack developer specializing in modern web technologies. Discover projects, skills, and contact information.",
    images: ["https://andrewhilario.tech/og-image.jpg"]
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
