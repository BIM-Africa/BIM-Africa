import { headers } from "next/headers";

export default async function Head() {
   const heads = await headers();
  const url = heads.get("x-url") || "";
  const id = url.split("id=")[1];

  // Default SEO for article page when no ID found
  if (!id) {
    return (
      <>
        <title>BIM Africa Blog</title>
        <meta
          name="description"
          content="Read professional technology insights, cybersecurity strategies, digital transformation trends, and expert articles from BIM Africa."
        />
        <meta name="robots" content="index, follow" />
      </>
    );
  }

  // Fetch blog data
  const res = await fetch(
    `https://bim-africa-backend2.vercel.app/api/blog/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const blog = data.blog ?? data;

  const title = `${blog.title} | BIM Africa`;
  const desc =
    blog.desc ||
    "Explore deep insights on cybersecurity, digital transformation, website development, and AI technologies.";
  const urlCanonical = `https://www.bim.africa/articles?id=${id}`;
  const image = blog.img || "https://www.bim.africa/default-og.jpg";

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <meta name="keywords" content={blog.keywords || "technology, cybersecurity, Africa, BIM Africa, digital transformation"} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={urlCanonical} />

      {/* OpenGraph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={urlCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="BIM Africa" />

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@bim_africa" />

      {/* Article-Specific SEO */}
      <meta property="article:author" content={blog.author} />
      <meta property="article:published_time" content={blog.date || ""} />
      <meta property="article:tag" content={blog.tag || "Technology"} />
    </>
  );
}