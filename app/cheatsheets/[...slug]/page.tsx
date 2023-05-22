import { env } from "@/env.mjs";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { allCheatSheets } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/app/components/button";
import { Icons } from "@/app/components/icons";
import { Mdx } from "@/app/components/mdx-components";
import { DocsPageHeader } from "@/app/components/page-header";
import { DashboardTableOfContents } from "@/app/components/toc";

interface CheatSheetPageProps {
  params: {
    slug: string[];
  };
}

async function getCheatSheetFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const cheatSheet = allCheatSheets.find(
    (cheatSheet) => cheatSheet.slugAsParams === slug
  );

  if (!cheatSheet) {
    null;
  }

  return cheatSheet;
}

export async function generateMetadata({
  params,
}: CheatSheetPageProps): Promise<Metadata> {
  const cheatSheet = await getCheatSheetFromParams(params);

  if (!cheatSheet) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", cheatSheet.title);
  ogUrl.searchParams.set("type", "CheatSheet");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: cheatSheet.title,
    description: cheatSheet.description,
    openGraph: {
      title: cheatSheet.title,
      description: cheatSheet.description,
      type: "article",
      url: absoluteUrl(cheatSheet.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: cheatSheet.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cheatSheet.title,
      description: cheatSheet.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  CheatSheetPageProps["params"][]
> {
  return allCheatSheets.map((cheatSheet) => ({
    slug: cheatSheet.slugAsParams.split("/"),
  }));
}

export default async function CheatSheetPage({ params }: CheatSheetPageProps) {
  const cheatSheet = await getCheatSheetFromParams(params);

  if (!cheatSheet) {
    notFound();
  }

  const toc = await getTableOfContents(cheatSheet.body.raw);

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader
          heading={cheatSheet.title}
          text={cheatSheet.description}
        />
        <Mdx code={cheatSheet.body.code} />
        <hr className="my-4" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/cheatsheets"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all cheatSheet
          </Link>
        </div>
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
