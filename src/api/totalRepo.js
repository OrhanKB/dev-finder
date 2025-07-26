import { gql } from "@apollo/client"

export const TOTAL_REPO_DATA = gql`
    query totalRepo{
        search(query: "stars:>0", type: REPOSITORY) {
            repositoryCount
        }
    }
    `

