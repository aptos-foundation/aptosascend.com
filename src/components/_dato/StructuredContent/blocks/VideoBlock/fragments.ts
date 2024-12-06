import { graphql } from "gql.tada";

export const VideoBlockFragment = graphql(`
  fragment VideoBlockFragment on VideoBlockRecord {
    ... on RecordInterface {
      id
      __typename
    }
    video {
      title
      provider
      providerUid
    }
  }
`);
