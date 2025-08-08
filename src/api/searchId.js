import { gql } from "@apollo/client";

export const GET_SEARCH_ID = gql`
query searchId($id: ID!) {
node(id: $id) {
    ... on Repository {
      name,
      url,
    }
  }
}
`