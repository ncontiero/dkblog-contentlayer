export default function PostsLayout({ children }: LayoutProps<"/p/[slug]">) {
  return (
    <div className="mx-auto my-0 min-h-screen max-w-4xl sm:my-8">
      {children}
    </div>
  );
}
