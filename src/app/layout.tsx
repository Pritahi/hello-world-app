import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello World - Modern Web App",
  description: "A beautiful Hello World application built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui",
  keywords: ["Hello World", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
  authors: [{ name: "user 01" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Hello World - Modern Web App",
    description: "A beautiful Hello World application built with modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello World - Modern Web App",
    description: "A beautiful Hello World application built with modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
