import { graphql } from "~/lib/datocms/graphql";

export const BlogPostInlineFragment = graphql(`
  fragment BlogPostInlineFragment on BlogPostRecord {
    ... on RecordInterface {
      id
      __typename
    }
    ... on BlogPostRecord {
      title
    }
  }
`);
