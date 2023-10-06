import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { PostCard } from "@/components/PostCard";

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
