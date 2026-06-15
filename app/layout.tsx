import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const display = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "700", "800"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const url = "https://portfolio-xi-seven-59.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: `${profile.name} — ${profile.role}`,
  description: profile.about,
  keywords: [
    "Manas Goel", "Data Engineer", "Big Data", "Machine Learning",
    "PySpark", "Apache Spark", "Hadoop", "ETL", "Data Warehousing", "Pune",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.about,
    url,
    siteName: `${profile.name} · Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.about,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <BackToTop />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
