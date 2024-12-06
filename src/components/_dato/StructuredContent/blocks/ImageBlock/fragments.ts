import { ResponsiveImageFragment } from "~/components/_dato/ResponsiveImage/fragments";
import { graphql } from "~/lib/datocms/graphql";

export const ImageBlockFragment = graphql(
  `
    fragment ImageBlockFragment on ImageBlockRecord {
      ... on RecordInterface {
        id
        __typename
      }
      asset {
        title
        responsiveImage(sizes: "(max-width: 700px) 100vw, 700px") {
          ...ResponsiveImageFragment
        }
      }
    }
  `,
  [ResponsiveImageFragment],
);
