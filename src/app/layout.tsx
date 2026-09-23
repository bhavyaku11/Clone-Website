import type { Metadata } from "next";
import { Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { VerticalRibbon } from "@/components/shared/VerticalRibbon";
import { Footer } from "@/components/shared/Footer";
import { CookieConsent } from "@/components/shared/CookieConsent";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Google Summer of Code",
    template: "%s | Google Summer of Code",
  },
  description:
    "Google Summer of Code is a global, online mentoring program focused on introducing new contributors to open source software development.",
  icons: {
    icon: [
      { url: "/assets/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicons/favicon.ico" },
    ],
    apple: [
      { url: "/assets/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#202124] selection:bg-[#d2e3fc] selection:text-[#1a73e8]">
        <Navbar />
        <VerticalRibbon />
        <div className="flex-1 flex flex-col relative w-full pt-14 md:pt-0 md:pl-[125px]">
          {children}
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
