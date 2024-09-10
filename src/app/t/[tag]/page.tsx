import type { Metadata, ResolvingMetadata } from "next";

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import { capitalize } from "@/utils/capitalize";

export const revalidate = 60;

type Props = {
  readonly params: { tag: string };
};

const allTags = allPosts
  .flatMap((p) => p.tags && p.tags.map((t) => t))
  .map((t) => t || "")
  .filter((t, i, self) => self.indexOf(t) === i);

export function generateStaticParams(): Props["params"][] {
  return allTags.map((t) => {
    return { tag: t };
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { tag } = params;

  if (!allTags.includes(tag)) {
    notFound();
  }

  const tagUrl = `${(await parent).metadataBase}t/${tag}`;

  return {
    title: capitalize(tag),
    alternates: {
      canonical: tagUrl,
    },
    openGraph: {
      title: tag,
      url: tagUrl,
      type: "website",
    },
    twitter: {
      title: tag,
    },
  };
}

export default function TagPage({ params }: Props) {
  const posts = allPosts.filter((p) => p.tags?.includes(params.tag));

  return (
    <div>
      <div className="w-full rounded-md bg-secondary">
        <div className="w-full rounded-t-md bg-primary/80 py-2" />
        <div className="p-8">
          <h1 className="text-4xl font-bold capitalize">{params.tag}</h1>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} className="w-full" {...post} />
        ))}
      </div>
    </div>
  );
}
