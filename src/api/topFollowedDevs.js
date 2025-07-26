import { gql } from "@apollo/client";

export const GET_TOP_FOLLOWED = gql `
    query TopFollowedUsers {
  search(query: "followers:>100000", type: USER, first: 3) {
    nodes {
      ... on User {
        login
        name
        followers {
          totalCount
        }
        avatarUrl
        url
      }
    }
  }
}
`
