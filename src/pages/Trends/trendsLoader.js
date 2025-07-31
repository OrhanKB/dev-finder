import client from "../../api/client";

import {
   GET_DAILY_REPO,
   TOTAL_REPO_DATA,
   GET_TOP_FOLLOWED,
   GET_POPULAR_REPOS 
} from "../../api/index.js";


export async function  trendsLoader () {
    const {data: popularReposData} = await client.query({
        query: GET_POPULAR_REPOS,
        variables: {
            first: 8,
            after: null
        }
    });

        

    return {
        popularRepos: popularReposData.search.nodes
    }
}


