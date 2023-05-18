import ClientOnly from "./components/ClientOnly";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faq - CodewithAntonio",
  description: "Frequently asked questions based on the youtube videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
