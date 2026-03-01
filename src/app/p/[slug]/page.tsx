import "./mdx.css";
import type { Metadata, ResolvingMetadata } from "next";

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import { Tag } from "@/components/Tag";
import { dateParser } from "@/utils/dateParser";

export const revalidate = 60;

type Props = {
  readonly params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }
  const canonicalUrl = `${(await parent).metadataBase}${post.path}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
      type: "article",
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      images: post.image ? { url: post.image, alt: post.title } : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }
  const posted = dateParser(new Date(post.date));

  return (
    <div className="bg-secondary sm:rounded-md">
      {post.image ? (
        // eslint-disable-next-line nextjs/no-img-element
        <img
          src={post.image}
          alt={post.title}
          className="
            flex aspect-[1000_/_420] min-h-[420px] w-[1000px] items-center justify-center object-cover sm:rounded-t-md
          "
        />
      ) : null}
      <div className="p-4 pt-6 sm:p-10">
        <div className="px-1">
          <time dateTime={post.date} className="text-xs font-light">
            Posted on {posted.postDateFormat}, {posted.year}
          </time>
          <h1 className="relative my-2 w-full scroll-m-20 text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 ? (
            <div className="mt-1.5 flex flex-wrap gap-0.5">
              {post.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          ) : null}
        </div>
        <Mdx code={post.body.code} />
      </div>
    </div>
  );
}
