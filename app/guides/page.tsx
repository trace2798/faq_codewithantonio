import { formatDate } from "@/lib/utils";
import { allGuides } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

import { DocsPageHeader } from "../components/page-header";

export const metadata = {
  title: "Faq -CodewithAntonio -Guides",
  description:
    "This section includes end-to-end guides based on uploaded youtube tutorials for developing Next.js 13 apps.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faq-codewithantonio.vercel.app/guides",
    title: "Faq - CodewithAntonio - Guides",
    description:
      "This section includes end-to-end guides based on uploaded youtube tutorials for developing Next.js 13 apps.",
    siteName: "Faq - CodewithAntonio - Guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faq -CodewithAntonio -Guides",
    description:
      "This section includes end-to-end guides based on uploaded youtube tutorials for developing Next.js 13 apps.",
    images: "https://faq-codewithantonio.vercel.app/guide.jpg",
    creator: "@Tisonthemove247",
  },
};

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="Guides"
        text="This section includes end-to-end guides for developing Next.js 13 apps."
      />
      {guides?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {guides.map((guide) => (
            <article
              key={guide._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {guide.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-ranadeRegular">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-ranadeRegular tracking-tight">
                    {guide.title}
                  </h2>
                  {guide.description && (
                    <p className="text-muted-foreground">{guide.description}</p>
                  )}
                </div>
                <div className="flex justify-between">
                  {guide.date && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(guide.date)}
                    </p>
                  )}
                  {guide.by && (
                    <p className="text-sm text-muted-foreground">
                      By: {guide.by}
                    </p>
                  )}
                </div>
              </div>
              <Link href={guide.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No guides published.</p>
      )}
    </div>
  );
}
