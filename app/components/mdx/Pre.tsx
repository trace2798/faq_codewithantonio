import { cn } from "@/lib/utils";

import { CopyToClipboard } from "./CopyToClipboard";

interface IPre {
  className?: string;
}

export const Pre: React.FC<IPre> = ({ className, ...props }) => (
  <CopyToClipboard>
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  </CopyToClipboard>
);
