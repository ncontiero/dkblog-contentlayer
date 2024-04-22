import type { Post } from "contentlayer/generated";

import Link from "next/link";
import { dateParser } from "@/utils/dateParser";
import { cn } from "@/lib/utils";

import { Tag } from "./Tag";

export function PostCard({
  className,
  ...post
}: Post & { readonly className?: string }) {
  return (
    <div
      className={cn(
        "relative w-1/2 gap-2 rounded-md bg-secondary p-6",
        className,
      )}
    >
      <time dateTime={post.date} className="text-xs font-light">
        {dateParser(new Date(post.date)).postDateFormat}
      </time>
      <h2 className="text-2xl font-bold">
        <Link href={`/${post.path}`} className="duration-200 hover:opacity-70">
          {post.title}
        </Link>
      </h2>
      {post.tags && post.tags.length > 0 ? (
        <div className="mt-1.5 flex flex-wrap gap-0.5">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
