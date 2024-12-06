import { graphql } from "~/lib/datocms/graphql";

export const BlogPostLinkFragment = graphql(`
  fragment BlogPostLinkFragment on BlogPostRecord {
    ... on RecordInterface {
      id
      __typename
    }
    ... on BlogPostRecord {
      title
    }
  }
`);
