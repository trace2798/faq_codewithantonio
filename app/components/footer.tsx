import { FC } from "react";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  return (
    <>
      <div className="dark:text-neutral-200 dark:bg-slate-900/75 flex max-md:flex-col justify-center items-center py-5">
        <h1>
          Website created by{" "}
          <a
            href="https://shreyas-chaliha.vercel.app"
            target="_blank"
            className="underline hover:cursor-pointer"
          >
            Trace
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/stephyswe"
            target="_blank"
            className="underline hover:cursor-pointer"
          >
            Stephanie
          </a>
          .
        </h1>
        
        <a
          href="https://github.com/trace2798/faq_codewithantonio"
          
        >
        &nbsp; Source code:<span className="text-slate-500 hover:underline hover:text-neutral-300"> Github</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
