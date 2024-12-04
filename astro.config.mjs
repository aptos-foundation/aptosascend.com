import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 480, 640, 750, 828, 1080, 1200],
    },
    imageService: true,
    skewProtection: true,
    // isr: {
    //   // A secret random string that you create.
    //   bypassToken: "",
    //   // Paths that will always be served fresh.
    //   exclude: ["/api/invalidate", "/posts/[...slug]"],
    // },
  }),
});
