import { gql } from "@apollo/client";

export const GET_TOP_FOLLOWED = gql `
    query TopFollowedUsers( $first: Int, $after: String) {
  search(query: "followers:>10000", type: USER first: $first, after: $after) {
    nodes {
      ... on User {
        login
        name
        followers {
          totalCount
        }
        avatarUrl
        url
        
        repositories(first: 1, orderBy: {field: STARGAZERS, direction: DESC}) {
          nodes {
            name
            stargazerCount
            forkCount
            url
            primaryLanguage {
              name
            }
          }
        }
        
        topRepositories: repositories(first: 10, orderBy: {field: STARGAZERS, direction: DESC}) {
          nodes {
            primaryLanguage {
              name
            }
          }
        }
      }

       ... on Organization {
        login
        name
        avatarUrl
        url
        
        repositories(first: 1, orderBy: {field: STARGAZERS, direction: DESC}) {
          nodes {
            name
            stargazerCount
            forkCount
            url
            primaryLanguage {
              name
            }
          }
        }
      }
    }
       pageInfo {
        endCursor
        hasNextPage
      }
  }
}
`

