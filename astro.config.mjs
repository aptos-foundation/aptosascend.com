// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    imagesConfig: {
      domains: [],
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
  env: {
    validateSecrets: true,
    schema: {
      DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
      DATOCMS_DRAFT_CONTENT_CDA_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
      DATOCMS_CMA_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
      PREVIEW_SECRET_API_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
      DATOCMS_SIGNED_COOKIE_JWT_SECRET: envField.string({
        context: "server",
        access: "secret",
      }),
      DATOCMS_DRAFT_MODE_COOKIE_NAME: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});
