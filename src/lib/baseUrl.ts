import { PUBLIC_HOSTNAME } from "astro:env/client";

export function getBaseUrl() {
  return PUBLIC_HOSTNAME;
}
