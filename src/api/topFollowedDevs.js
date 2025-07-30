import { gql } from "@apollo/client";

export const GET_TOP_FOLLOWED = gql `
    query TopFollowedUsers {
  search(query: "followers:>50000", type: USER, first: 10) {
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
