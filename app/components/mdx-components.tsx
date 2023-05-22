// import { cn } from "@/lib/utils";
// import { useMDXComponent } from "next-contentlayer/hooks";
// import Image from "next/image";
// import * as React from "react";
// import { MdxCard } from "@/app/components/mdx-card";
// import { Callout } from "./callout";
// interface CodeProps {
//   className: string;
//   [key: string]: any;
// }
// const createHeadingComponent =
//   (Tag: keyof JSX.IntrinsicElements, baseClassName: string) =>
//   ({ className, ...props }: CodeProps) =>
//     <Tag className={cn(baseClassName, className)} {...props} />;
// const components = {
//   h1: createHeadingComponent(
//     "h1",
//     "mt-2 scroll-m-20 text-4xl font-satoshiBold tracking-tight"
//   ),
//   h2: createHeadingComponent(
//     "h2",
//     "mt-10 scroll-m-20 border-b pb-1 text-3xl font-satoshiMedium tracking-tight first:mt-0"
//   ),
//   h3: createHeadingComponent(
//     "h3",
//     "mt-8 scroll-m-20 text-2xl font-satoshiMedium tracking-tight"
//   ),
//   h4: ({ className, ...props }: any) => (
//     <h4
//       className={cn(
//         "mt-8 scroll-m-20 text-xl font-satoshiMedium tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h5: createHeadingComponent(
//     "h5",
//     "mt-8 scroll-m-20 text-lg font-satoshiMedium tracking-tight"
//   ),
//   h6: createHeadingComponent(
//     "h6",
//     "mt-8 scroll-m-20 text-base font-satoshiMedium tracking-tight"
//   ),
//   a: createHeadingComponent("a", "font-ranadeRegular underline underline-offset-4"),
//   p: createHeadingComponent("p", "leading-7 [&:not(:first-child)]:mt-6"),
//   ul: createHeadingComponent("ul", "my-6 ml-6 list-disc"),
//   ol: createHeadingComponent("ol", "my-6 ml-6 list-decimal"),
//   li: createHeadingComponent("li", "mt-2"),
//   blockquote: createHeadingComponent(
//     "blockquote",
//     "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
//   ),
//   img: ({
//     className,
//     alt,
//     ...props
//   }: React.ImgHTMLAttributes<HTMLImageElement>) => (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img className={cn("rounded-md border", className)} alt={alt} {...props} />
//   ),
//   hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
//   table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
//     <div className="my-6 w-full overflow-y-auto">
//       <table className={cn("w-full", className)} {...props} />
//     </div>
//   ),
//   tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
//     <tr
//       className={cn("m-0 border-t p-0 even:bg-muted", className)}
//       {...props}
//     />
//   ),
//   th: ({ className, ...props }: any) => (
//     <th
//       className={cn(
//         "border px-4 py-2 text-left font-satoshiBold [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   td: ({ className, ...props }: any) => (
//     <td
//       className={cn(
//         "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   pre: ({ className, ...props }: any) => (
//     <pre
//       className={cn(
//         "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
//         className
//       )}
//       {...props}
//     />
//   ),
//   code: ({ className, ...props }: CodeProps) => (
//     <code
//       className={cn(
//         "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
//         className
//       )}
//       {...props}
//     />
//   ),
//   Image,
//   Callout,
//   Card: MdxCard,
// };
// interface MdxProps {
//   code: string;
// }
// export function Mdx({ code }: MdxProps) {
//   const Component: any = useMDXComponent(code);
//   return (
//     <div className="mdx">
//       {/* HI THERE FROM THE OTHER SIDE! :D
//       Gotcha */}
//       <Component components={components} />
//     </div>
//   );
// }
import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import * as React from "react";

import { MdxCard } from "@/app/components/mdx-card";

import { Callout } from "./callout";

const components = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-satoshiBold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-satoshiMedium tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-satoshiMedium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: any) => (
    <a
      className={cn(
        "font-ranadeItalic underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 font-ranadeRegular",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
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
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-satoshiBold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: any) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
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
