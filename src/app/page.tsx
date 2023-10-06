import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { dateParser } from "@/utils/dateParser";

import Link from "next/link";
import { Tag } from "@/components/Tag";

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
            <div className="mt-1.5 flex flex-wrap gap-0.5">
              {post.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
