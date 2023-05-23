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
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "CodewithAntonio",
    "Next.js tutorials",
  ],
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
        src="https://www.googletagmanager.com/gtag/js?id=G-9KSNSZ09Z9"
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9KSNSZ09Z9', {
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
