import { gql } from "@apollo/client";

export const GET_POPULAR_REPOS = gql`
  query popularRepos($first: Int, $after: String,) {
    search(query: "stars:>5000", type: REPOSITORY, first: $first, after: $after) {
      nodes {
        ... on Repository {
          name
          stargazerCount       
          forkCount            
          description          
          updatedAt            
          url
          id
          owner {
            login
            avatarUrl              
          }
          primaryLanguage {
            name              
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
