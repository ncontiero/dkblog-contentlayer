import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="bg-secondary/80 fixed inset-x-0 top-0 z-9999 h-16 w-full border-b-2 backdrop-blur-sm">
      <div className="flex size-full items-center justify-between px-4 sm:container">
        <Link
          href="/"
          className="
            focus:ring-ring rounded-md p-2 text-2xl font-bold duration-200 hover:opacity-70 focus:ring-3
            focus:outline-hidden
          "
        >
          DkBlog
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
