import { formatDate } from "@/lib/utils";
import { allCheatSheets } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

import { DocsPageHeader } from "../components/page-header";

export const metadata = {
  title: "Cheat Sheets",
  description:
    "This section contains some cheat sheets which will help you debug some common problems.",
};

export default function CheatSheets() {
  const cheatSheets = allCheatSheets
    .filter((cheatSheet) => cheatSheet.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="py-6 lg:py-10 lg:mx-[10vw]">
      <DocsPageHeader
        heading="Cheat Sheets"
        text="This section contains some cheat sheets which will help you debug some common problems."
      />
      {cheatSheets?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {cheatSheets.map((cheatSheet) => (
            <article
              key={cheatSheet._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {cheatSheet.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-ranadeRegular">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-ranadeRegular tracking-tight">
                    {cheatSheet.title}
                  </h2>
                  {cheatSheet.description && (
                    <p className="text-muted-foreground">
                      {cheatSheet.description}
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  {cheatSheet.date && (
                    <p className="text-sm text-muted-foreground">
                      {formatDate(cheatSheet.date)}
                    </p>
                  )}
                  {cheatSheet.by && (
                    <p className="text-sm text-muted-foreground">
                      By: {cheatSheet.by}
                    </p>
                  )}
                </div>
              </div>
              <Link href={cheatSheet.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No cheatSheets published.</p>
      )}
    </div>
  );
}
