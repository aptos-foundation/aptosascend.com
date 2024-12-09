import type { SchemaTypes } from "@datocms/cma-client";

export async function recordToWebsiteRoute(
  item: SchemaTypes.Item,
  itemTypeApiKey: string,
): Promise<string | null> {
  switch (itemTypeApiKey) {
    case "page": {
      return `/${item.attributes.slug}`;
    }
    case "blog_post": {
      return `/blog/${item.attributes.slug}`;
    }
    default:
      return null;
  }
}
