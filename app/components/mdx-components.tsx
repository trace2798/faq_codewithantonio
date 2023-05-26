import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import * as React from "react";

import { MdxCard } from "@/app/components/mdx-card";

import { Callout } from "./callout";
import { Pre } from "./mdx/Pre";

const components = {
  h1: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-satoshiBold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-satoshiMedium tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <a
      className={cn(
        "font-ranadeItalic underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 font-ranadeRegular",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground font-ranadeItalic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-satoshiBold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className: string; [key: string]: any }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: Pre,
  code: ({ className, ...props }: { className: string; [key: string]: any }) => {
    //TODO: removed relative class, check if it breaks anything
    return (
      <code
        className={cn(
          "rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
          className
        )}
        {...props}
      />
    );
  },
  Image,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component: any = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
