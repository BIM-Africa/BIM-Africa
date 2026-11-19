import type { Metadata } from "next";

// Nested Next.js metadata objects replace inherited values. Supply each page's
// own social text and URL instead of inheriting the home page's description.
export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : "BIM Africa";
  const description = metadata.description || undefined;
  const url = metadata.alternates?.canonical || undefined;
  return {
    ...metadata,
    openGraph: {
      title,
      description,
      ...(typeof url === "string" ? { url } : {}),
      type: "website",
      siteName: "BIM Africa",
      locale: "en_MU",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BIM Africa" }],
      ...metadata.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
      ...metadata.twitter,
    },
  };
}
