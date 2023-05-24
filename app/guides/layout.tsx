interface GuidesLayoutProps {
  children: React.ReactNode;
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return (
    <>
     <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Tisonthemove247" />
        <meta name="twitter:title" content="Guides for NextJs tutorials" />
        <meta
          name="twitter:description"
          content="Guides based on youtube video topics."
        />
        <meta
          name="twitter:image"
          content="https://faq-codewithantonio.vercel.app/guide.jpg"
        />
      </head>
      <div className="mx-auto max-w-5xl max-lg:mx-[6vw]">{children}</div>
    </>
  );
}
