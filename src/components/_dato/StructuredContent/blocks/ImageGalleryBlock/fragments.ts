import { ResponsiveImageFragment } from "~/components/_dato/ResponsiveImage/fragments";
import { graphql } from "~/lib/datocms/graphql";

export const ImageGalleryBlockFragment = graphql(
  `
    fragment ImageGalleryBlockFragment on ImageGalleryBlockRecord {
      ... on RecordInterface {
        id
        __typename
      }
      assets {
        id
        title
        responsiveImage(imgixParams: { w: 300 }, sizes: "300px") {
          ...ResponsiveImageFragment
        }
      }
    }
  `,
  [ResponsiveImageFragment],
);
