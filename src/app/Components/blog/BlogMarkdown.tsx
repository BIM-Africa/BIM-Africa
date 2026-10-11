import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Empty "##" lines in the editor would otherwise become empty headings.
const heading = (Tag: "h2" | "h3" | "h4"): Components["h2"] =>
  function Heading({ node: _node, children, ...props }) {
    if (children == null || (typeof children === "string" && !children.trim())) return null;
    return <Tag {...props}>{children}</Tag>;
  };

// Rendered on the server so the article text is in the initial HTML.
const components: Components = {
  // The page already has the title as <h1>; keep one h1 per page.
  h1: heading("h2"),
  h2: heading("h2"),
  h3: heading("h3"),
  h4: heading("h4"),
  a: ({ node: _node, href = "", ...props }) => {
    const external = /^https?:\/\//.test(href) && !href.startsWith("https://bim.africa");
    return (
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      />
    );
  },
  table: ({ node: _node, ...props }) => (
    <div className="blog-table-wrap">
      <table {...props} />
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
