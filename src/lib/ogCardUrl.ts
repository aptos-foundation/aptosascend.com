import { truncate } from "lodash-es";
import { getBaseUrl } from "~/lib/baseUrl";

export type OgCardData = {
  kicker?: string | null;
  title?: string | null;
  pills?: string[] | null;
  excerpt?: string | null;
  logoPngUrl?: string | null;
};

export function ogCardUrl(data: OgCardData): string {
  const url = new URL("/og-card.png", getBaseUrl());
  url.searchParams.set(
    "data",
    Buffer.from(
      JSON.stringify({
        ...data,
        excerpt: data.excerpt
          ? truncate(data.excerpt, { length: 300 })
          : undefined,
      }),
    ).toString("base64"),
  );
  return url.toString();
}
