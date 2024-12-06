import { graphql } from "~/lib/datocms/graphql";

export const PageLinkFragment = graphql(`
  fragment PageLinkFragment on PageRecord {
    ... on RecordInterface {
      id
      __typename
    }
    ... on PageRecord {
      title
    }
  }
`);
