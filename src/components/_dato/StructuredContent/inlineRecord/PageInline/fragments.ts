import { graphql } from "~/lib/datocms/graphql";

export const PageInlineFragment = graphql(`
  fragment PageInlineFragment on PageRecord {
    ... on RecordInterface {
      id
      __typename
    }
    ... on PageRecord {
      title
    }
  }
`);
