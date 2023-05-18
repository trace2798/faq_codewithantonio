import Accordian from "./components/accordion/Accordian";

export default function Home() {
  return (
    <div className="-mt-5">
      <div className="relative isolate overflow-hidden bg-white px-6 lg:py-24 py-5 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={150}
                height={100}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto flex max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
          <div className="lg:mx-auto lg:flex lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
            <h1 className="text-[40px] lg:text-5xl lg:leading-[56px] font-satoshiBlack capitalize bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-gray-600 text-center">
              Frequently asked questions from Codewithantonio's videos.
            </h1>
          </div>
        </div>

        <div className="mt-5 px-1">
          <Accordian />
        </div>
      </div>
    </div>
  );
}
