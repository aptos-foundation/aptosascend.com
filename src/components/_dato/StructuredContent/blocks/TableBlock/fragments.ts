import { graphql } from "gql.tada";

export const TableBlockFragment = graphql(`
  fragment TableBlockFragment on TableBlockRecord {
    ... on RecordInterface {
      id
      __typename
    }
    rows
  }
`);
