import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darien Perez | Software Engineer Portfolio",
  description: "Software Engineer crafting elegant solutions through code. Portfolio showcasing projects in Fintech, Data Quality, and Full Stack Development.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Portfolio", "Darien Perez", "Web Development"],
  authors: [{ name: "Darien Perez" }],
  openGraph: {
    title: "Darien Perez | Software Engineer Portfolio",
    description: "Software Engineer crafting elegant solutions through code.",
    url: "https://darienperez.com", // Replace with actual URL if known, or keep generic/placeholder for now
    siteName: "Darien Perez Portfolio",
    images: [
      {
        url: "/yo.jpeg", // Using the icon as the OG image for now
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darien Perez | Software Engineer",
    description: "Software Engineer crafting elegant solutions through code.",
    images: ["/yo.jpeg"],
  },
  icons: {
    icon: "/yo.jpeg",
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
