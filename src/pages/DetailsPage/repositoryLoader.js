import client from '../../api/client.js';
import { gql } from '@apollo/client';
import { GET_SEARCH_ID } from '../../api/searchId.js';

const GET_REPO_ID = gql`
  query getRepoId($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
    }
  }
`;

export const repositoryLoader = async ({ params }) => {
    const { owner, name } = params;
    
    if (!owner || !name) {
        throw new Response("Invalid repository format. Use owner/repository", { status: 400 });
    }

    try {
        const { data: repoIdData } = await client.query({
            query: GET_REPO_ID,
            variables: { owner, name },
            fetchPolicy: "network-only",
        });

        if (!repoIdData.repository) {
            throw new Error(`Repository ${owner}/${name} not found`);
        }

        const { data: detailData } = await client.query({
            query: GET_SEARCH_ID,
            variables: { id: repoIdData.repository.id },
            fetchPolicy: "network-only",
        });

        return detailData;
    } catch (error) {
        console.error("Repository loader error:", error);
        throw new Response("Repository not found", { status: 404 });
    }
};