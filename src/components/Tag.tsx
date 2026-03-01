import type { HTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagProps extends HTMLAttributes<HTMLAnchorElement> {
  readonly tag: string;
}

export function Tag({ tag, className, ...props }: TagProps) {
  return (
    <Link
      href={`/t/${tag}`}
      className={cn(
        `
          rounded-md border border-transparent p-1 text-sm font-light duration-200 hover:border-primary/60
          hover:bg-primary/20 focus-visible:border-primary focus-visible:bg-primary/30 focus-visible:outline-none
        `,
        className,
      )}
      {...props}
    >
      #{tag}
    </Link>
  );
}
