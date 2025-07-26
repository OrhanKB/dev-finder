import { gql } from "@apollo/client";

export const GET_POPULAR_REPOS = gql`
    query popularRepos {
  search(query: "stars:>5000" type: REPOSITORY first: 3) {
    nodes {
      ... on Repository {
        name
        stargazerCount
      }
    }
  }
}
`