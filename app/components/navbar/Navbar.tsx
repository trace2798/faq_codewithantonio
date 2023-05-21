import Link from "next/link";

import { buttonVariants } from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = async () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center font-satoshiBold">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          FAQ- CodeWithAntonio
        </Link>

        <div className="md:hidden flex">
          <SocialIcons />
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <SocialIcons />
          <ThemeToggle />
          {/* <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
