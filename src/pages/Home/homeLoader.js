import client from "../../api/client";
import {
   GET_DAILY_REPO,
   GET_TRENDING_LANGUAGES,
   TOTAL_REPO_DATA,
   GET_TOP_FOLLOWED,
   GET_POPULAR_REPOS 
} from "../../api/index.js";

export async function homepageLoader() {
    try {
        const {data: dailyRepoData} = await client.query({query: GET_DAILY_REPO});
        const {data: trendingLangsData} = await client.query({query: GET_TRENDING_LANGUAGES});
        const {data: totalRepoData} = await client.query({query: TOTAL_REPO_DATA});
        const {data: topFollowedData} = await client.query({query: GET_TOP_FOLLOWED});
        const {data: popularReposData} = await client.query({query: GET_POPULAR_REPOS});

        return {
            dailyRepo: dailyRepoData.search.repositoryCount,
            totalRepo: totalRepoData.search.repositoryCount,
            popularRepos: popularReposData.search.nodes,
            topFollowed: topFollowedData.search.nodes,
            trendingLangs: trendingLangsData.search.nodes
        }
    } catch(error) {
        console.log("error:", error)
        throw error
    }
}