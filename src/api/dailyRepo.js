import { gql } from "@apollo/client"

export const GET_DAILY_REPO = gql`
query dailyRepo{
    search(query: "created:2025-07-25", type: REPOSITORY) {
        repositoryCount
  }
}
`

 

