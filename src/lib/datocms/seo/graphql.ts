import { TagFragment } from "~/lib/datocms/commonFragments";
import { type ResultOf, graphql } from "~/lib/datocms/graphql";

export const siteSettingsQuery = graphql(
  `
    query SiteSettingsQuery {
      _site {
        locales
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          fallbackSeo {
            description
            title
            image {
              url
              width
              height
            }
          }
        }
        faviconMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);

export type SiteSettings = ResultOf<typeof siteSettingsQuery>;
