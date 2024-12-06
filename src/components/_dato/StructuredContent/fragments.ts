import { graphql } from "~/lib/datocms/graphql";
import { AccordionBlockFragment } from "./blocks/AccordionBlock/fragments";
import { ImageBlockFragment } from "./blocks/ImageBlock/fragments";
import { ImageGalleryBlockFragment } from "./blocks/ImageGalleryBlock/fragments";
import { TableBlockFragment } from "./blocks/TableBlock/fragments";
import { TweetBlockFragment } from "./blocks/TweetBlock/fragments";
import { VideoBlockFragment } from "./blocks/VideoBlock/fragments";
import { BlogPostInlineFragment } from "./inlineRecord/BlogPostInline/fragments";
import { PageInlineFragment } from "./inlineRecord/PageInline/fragments";
import { BlogPostLinkFragment } from "./linkToRecord/BlogPostLink/fragments";
import { PageLinkFragment } from "./linkToRecord/PageLink/fragments";

export const StructuredContentFragment = graphql(
  `
    fragment StructuredContentFragment on StructuredContentBlockRecord {
      id
      __typename
      structuredText {
        value
        blocks {
          ...AccordionBlockFragment
          ...ImageBlockFragment
          ...ImageGalleryBlockFragment
          ...TableBlockFragment
          ...TweetBlockFragment
          ...VideoBlockFragment
        }
        links {
          ...PageLinkFragment
          ...BlogPostLinkFragment
          ...PageInlineFragment
          ...BlogPostInlineFragment
        }
      }
    }
  `,
  [
    AccordionBlockFragment,
    ImageBlockFragment,
    ImageGalleryBlockFragment,
    TableBlockFragment,
    TweetBlockFragment,
    VideoBlockFragment,
    PageLinkFragment,
    BlogPostLinkFragment,
    PageInlineFragment,
    BlogPostInlineFragment,
  ],
);
