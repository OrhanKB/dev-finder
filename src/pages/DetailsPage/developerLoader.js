import client from '../../api/client.js';
import { gql } from '@apollo/client';
import { GET_SEARCH_ID } from '../../api/searchId.js';


const GET_USER_ID = gql`
  query getUserId($login: String!) {
    user(login: $login) {
      id
    }
  }
`;

const GET_ORG_ID = gql`
  query getOrgId($login: String!) {
    organization(login: $login) {
      id
    }
  }
`;

export const developerLoader = async ({ params }) => {
    const { username } = params;
    
    
    const cleanUsername = decodeURIComponent(username).trim();

    try {

      try {
            const { data: userIdData } = await client.query({
                query: GET_USER_ID,
                variables: { login: cleanUsername },
                fetchPolicy: "network-only",
            });

            if (userIdData.user) {
                const { data: detailData } = await client.query({
                    query: GET_SEARCH_ID,
                    variables: { id: userIdData.user.id },
                    fetchPolicy: "network-only",
                });
                return detailData;
            }
        } catch (userError) {

          const { data: orgIdData } = await client.query({
                query: GET_ORG_ID,
                variables: { login: cleanUsername },
                fetchPolicy: "network-only",
            });

            if (orgIdData.organization) {
                const { data: detailData } = await client.query({
                    query: GET_SEARCH_ID,
                    variables: { id: orgIdData.organization.id },
                    fetchPolicy: "network-only",
                });
                return detailData;
            }
        }

        throw new Error(`User or Organization ${cleanUsername} not found`);
    } catch (error) {
        console.error("Developer loader error:", error);
        throw new Response("Developer not found", { status: 404 });
    }
};