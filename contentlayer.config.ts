import {
  type ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer2/source-files";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  path: {
    type: "string",
    resolve: (doc) => `p/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    image: { type: "string" },
  },
  computedFields,
}));

const rehypePrettyCodeOptions: Options = {
  theme: { light: "min-light", dark: "dracula" },
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ["line--highlighted"];
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ["word--highlighted"];
  },
};

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
