import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import Script from "next/script";

import ClientOnly from "./components/ClientOnly";
import Providers from "./components/Providers";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

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
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@Trace",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Tisonthemove247" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta
          name="twitter:description"
          content="Frequently asked questions based on Codewithantonio's youtube videos."
        />
        <meta
          name="twitter:image"
          content="https://faq-codewithantonio.vercel.app/og.jpg"
        />
      </head> */}
      <body className={inter.className}>
        <ClientOnly>
          <Providers>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            <div className="pt-24 min-h-screen">{children}</div>
            <Footer />
          </Providers>
        </ClientOnly>
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
      </body>
    </html>
  );
}
