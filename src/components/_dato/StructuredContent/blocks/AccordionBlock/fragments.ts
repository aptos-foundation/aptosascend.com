import { graphql } from "~/lib/datocms/graphql";

export const AccordionBlockFragment = graphql(`
  fragment AccordionBlockFragment on AccordionBlockRecord {
    ... on RecordInterface {
      id
      __typename
    }
    items {
      id
      title
      isOpen
      content {
        value
      }
    }
  }
`);
