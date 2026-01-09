import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://darienperez.vercel.app'), // Replace with your production URL
  title: {
    default: "Darien Perez | Software Engineer & Creative Developer",
    template: "%s | Darien Perez"
  },
  description: "Senior Software Engineer specializing in scalable web applications, fintech solutions, and high-performance React architectures. View my portfolio.",
  keywords: ["Software Engineer", "Full Stack Developer", "React Expert", "Next.js", "TypeScript", "Node.js", "Fintech", "Darien Perez", "Frontend Architecture"],
  authors: [{ name: "Darien Perez", url: "https://darienperez.vercel.app" }],
  creator: "Darien Perez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Darien Perez | Software Engineer & Creative Developer",
    description: "Crafting modern, scalable, and beautiful digital experiences.",
    url: "https://darienperez.vercel.app",
    siteName: "Darien Perez Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/yo.jpeg",
        width: 1200,
        height: 630,
        alt: "Darien Perez - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darien Perez | Software Engineer",
    description: "Building the future of finance and web technology.",
    creator: "@DarienPerezGit",
    images: ["/yo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/yo.jpeg", // You might want a specific apple touch icon
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
