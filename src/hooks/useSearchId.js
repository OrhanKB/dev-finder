import { useApolloClient } from "@apollo/client";
import {GET_SEARCH_ID} from "../api/searchId.js"
import { createContext, useState } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import { useSearchIdContext } from "../contexts/context.jsx";

const valueContext = createContext();

export const useSearchId = () => {
    
    const client = useApolloClient();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const queryFilter = searchParams.get("filter");
    const navigator = queryFilter === "developers" ? "/developer" : "/repository"

    const {id, setId} = useSearchIdContext(); 

    const handleClick = async (username, keyId) => {

        try {
            const {data: searchIdData} = await client.query({
                query: GET_SEARCH_ID,
                variables: {id: keyId},
                fetchPolicy: "network-only",
            });
            navigate(`${navigator}/${username}`);
            setId(searchIdData);

        } catch(error) {
            console.log("error:", error)
        }
    };

    

   
    return {
        handleClick,
    }
}