import { Inter } from "next/font/google";
import Script from "next/script";

import ClientOnly from "./components/ClientOnly";
import Providers from "./components/Providers";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

// import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faq - CodewithAntonio",
  description: "Frequently asked questions based on the youtube videos.",
};

// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: [
//     "Next.js",
//     "React",
//     "Tailwind CSS",
//     "Server Components",
//     "Radix UI",
//   ],
//   authors: [
//     {
//       name: "shadcn",
//       url: "https://shadcn.com",
//     },
//   ],
//   creator: "shadcn",
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [`${siteConfig.url}/og.jpg`],
//     creator: "@shadcn",
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: `${siteConfig.url}/site.webmanifest`,
// }

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
