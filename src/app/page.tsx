import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { dateParser } from "@/utils/dateParser";

import Link from "next/link";

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative w-1/2 gap-2 rounded-md bg-secondary p-6"
        >
          <time dateTime={post.date} className="text-xs font-light">
            {dateParser(new Date(post.date)).postDateFormat}
          </time>
          <h2 className="text-2xl font-bold">
            <Link href={post.path} className="duration-200 hover:opacity-70">
              {post.title}
            </Link>
          </h2>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-1.5 flex gap-1">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/t/${tag}`}
                  className="rounded-md border border-transparent p-1 text-sm font-light duration-200 hover:border-primary hover:bg-primary/30 focus-visible:border-primary focus-visible:bg-primary/30 focus-visible:outline-none"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
