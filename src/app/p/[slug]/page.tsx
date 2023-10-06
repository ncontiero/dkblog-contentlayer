import "./mdx.css";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/Mdx";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${(await parent).metadataBase}${post.path}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${(await parent).metadataBase}${post.path}`,
      type: "article",
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-secondary sm:rounded-md">
      {post.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.title}
          className="flex aspect-[1000_/_420] items-center justify-center object-contain sm:rounded-t-md"
        />
      )}
      <Mdx code={post.body.code} />
    </div>
  );
}
