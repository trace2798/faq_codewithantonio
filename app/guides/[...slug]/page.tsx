import { env } from "@/env.mjs";
import { getTableOfContents } from "@/lib/toc";
import { absoluteUrl, cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { allGuides } from "contentlayer/generated";
import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/app/components/button";
import { Icons } from "@/app/components/icons";
import { Mdx } from "@/app/components/mdx-components";
import { DocsPageHeader } from "@/app/components/page-header";
import { DashboardTableOfContents } from "@/app/components/toc";

interface GuidePageProps {
  params: {
    slug: string[];
  };
}

async function getGuideFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const guide = allGuides.find((guide) => guide.slugAsParams === slug);

  if (!guide) {
    null;
  }

  return guide;
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const guide = await getGuideFromParams(params);

  if (!guide) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", guide.title);
  ogUrl.searchParams.set("type", "Guide");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: absoluteUrl(guide.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  GuidePageProps["params"][]
> {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams.split("/"),
  }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideFromParams(params);

  if (!guide) {
    notFound();
  }

  const toc = await getTableOfContents(guide.body.raw);
  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={guide.title} />
        <meta name="twitter:description" content={guide.description} />
        <meta name="twitter:image" content={ogUrl.toString()} />
      </Head>
      <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
        <div>
          <DocsPageHeader heading={guide.title} text={guide.description} />
          <Mdx code={guide.body.code} />
          <hr className="my-4" />
          <div className="flex justify-center py-6 lg:py-10">
            <Link
              href="/guides"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all guides
            </Link>
          </div>
        </div>
        <div className="hidden text-sm lg:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </main>
    </>
  );
}
