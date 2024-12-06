import type { HTMLAttributes } from "astro/types";
import { hasHttpProtocol } from "~/lib/utils/url/hasHttpProtocol";

export const hasProtocol = (href?: HTMLAttributes<"a">["href"]): boolean => {
  if (!href) {
    return false;
  }

  const resolvedHref = typeof href === "object" ? (href?.host ?? "") : href;

  return hasHttpProtocol(resolvedHref);
};
