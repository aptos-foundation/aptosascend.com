import { graphql } from "gql.tada";

export const TweetBlockFragment = graphql(`
  fragment TweetBlockFragment on TweetBlockRecord {
    ... on RecordInterface {
      id
      __typename
    }
    url
  }
`);
