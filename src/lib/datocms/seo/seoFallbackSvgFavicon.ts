import type { SeoMetaTag } from "./types";

export function seoFallbackSvgFavicon(path: string) {
  return (tags: SeoMetaTag[]) => {
    if (
      tags.some((tag) => tag.tag === "link" && tag.attributes?.rel === "icon")
    ) {
      return tags;
    }

    return [
      ...tags,
      {
        tag: "link",
        attributes: {
          type: "image/svg+xml",
          rel: "icon",
          href: path,
        },
        content: null,
      },
    ];
  };
}
