import client from '../../api/client.js';
import { gql } from '@apollo/client';
import { GET_SEARCH_ID } from '../../api/searchId.js';

// Username'den user ID'yi bulma query'si
const GET_USER_ID = gql`
  query getUserId($login: String!) {
    user(login: $login) {
      id
    }
  }
`;

export const developerLoader = async ({ params }) => {
    const { username } = params;
    
    // URL decode ve temizle
    const cleanUsername = decodeURIComponent(username).trim();

    try {
        // 1. Username'den ID'yi bul
        const { data: userIdData } = await client.query({
            query: GET_USER_ID,
            variables: { login: cleanUsername },
            fetchPolicy: "network-only",
        });

        if (!userIdData.user) {
            throw new Error(`User ${cleanUsername} not found`);
        }

        // 2. ID ile detaylı veriyi çek
        const { data: detailData } = await client.query({
            query: GET_SEARCH_ID,
            variables: { id: userIdData.user.id },
            fetchPolicy: "network-only",
        });

        return detailData;
    } catch (error) {
        console.error("Developer loader error:", error);
        throw new Response("Developer not found", { status: 404 });
    }
};