import { gql } from "@apollo/client";

export const GET_TRENDING_LANGUAGES = gql`
    query trendingLanguagesMonthly {
  search(query: "created:2025-06-25..2025-07-25 stars:>100", type: REPOSITORY, first: 10) {
    nodes {
      ... on Repository {
        name
        stargazerCount
        createdAt
        primaryLanguage {
          name
        }
      }
    }
  }
}
`
