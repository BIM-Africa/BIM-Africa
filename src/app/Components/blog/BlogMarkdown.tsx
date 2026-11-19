import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { contentHref } from "@/lib/content";
import { Children } from "react";

// Empty "##" lines in the editor would otherwise become empty headings.
const heading = (Tag: "h2" | "h3" | "h4"): Components["h2"] =>
  function Heading({ children, className, id }) {
    if (children == null || (typeof children === "string" && !children.trim())) return null;
    return <Tag className={className} id={id}>{children}</Tag>;
  };

// Rendered on the server so the article text is in the initial HTML.
const components: Components = {
  // The page already has the title as <h1>; keep one h1 per page.
  h1: heading("h2"),
  h2: heading("h2"),
  h3: heading("h3"),
  h4: heading("h4"),
  a: ({ href = "", children, title }) => {
    const normalized = contentHref(href);
    if (!normalized) return <span>{children}</span>;
    const hasLabel = Children.toArray(children).some(child => typeof child === "string" ? !!child.trim() : true);
    const external = /^https?:\/\//.test(normalized) && new URL(normalized).hostname !== "bim.africa";
    return (
      <a
        href={normalized}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        title={title}
      >{hasLabel ? children : normalized}</a>
    );
  },
  table: ({ children }) => (
    <div className="blog-table-wrap">
      <table>{children}</table>
    </div>
  ),
};

export default function BlogMarkdown({ source }: { source: string }) {
  if (!source.trim()) return null;
  return (
    <div className="blog-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
