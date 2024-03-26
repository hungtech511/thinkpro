import "./globals.scss";
import type { Metadata } from "next";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Head from "next/head";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></Script>
      </Head>

      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <Navigation />
          {children}
          <footer>
            <div className="container">Footer</div>
          </footer>
        </Providers>
        <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
        />
      </body>
    </html>
  );
}
