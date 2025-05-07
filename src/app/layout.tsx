import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './tailwind.css'
import "./globals.scss";
import defaultSEO from "@/shared/lib/seo.config";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords
};

export const viewport: Viewport = {
  themeColor: 'light',
  colorScheme: 'light',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>

        {children}
        </Providers>
      </body>
    </html>
  );
}
