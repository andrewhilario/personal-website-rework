import type { Metadata } from "next";
import { Chivo, Archivo_Black } from "next/font/google";
import "./globals.css";

export const chivo = Chivo({ subsets: ["latin"] });
export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Andrew Hilario | Portfolio",
  description: "Generated by create next app"
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
