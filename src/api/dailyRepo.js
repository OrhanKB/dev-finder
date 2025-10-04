import { gql } from "@apollo/client"

export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

export const GET_DAILY_REPO = (date = getTodayDate()) => gql`
query dailyRepo{
    search(query: "created:${date}", type: REPOSITORY) {
        repositoryCount
  }
}
`


