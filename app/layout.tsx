import { Inter } from "next/font/google";
import Script from "next/script";

import ClientOnly from "./components/ClientOnly";
import Providers from "./components/Providers";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faq - CodewithAntonio",
  description: "Frequently asked questions based on the youtube videos.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "CodewithAntonio",
    "Next.js tutorials",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`, 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'],
    creator: "@Trace",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CODE}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CODE}, {
        page_path: window.location.pathname,
      });
  `}
      </Script>
      <body className={inter.className}>
        <ClientOnly>
          <Providers>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            <div className="pt-24 min-h-screen">{children}</div>
            <Footer />
          </Providers>
        </ClientOnly>
      </body>
    </html>
  );
}
