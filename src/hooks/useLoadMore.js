import { useApolloClient } from "@apollo/client";
import { useState } from "react";


export const useLoadMore = (queryApi, endCursor, initialItems) => {
    
    const [data, setData] = useState(initialItems);
    const [cursor, setCursor] = useState(endCursor);
    const [loading, setLoading] = useState(false);

    const client = useApolloClient();

    const loadMore = async () => {

        setLoading(true);
        
        try {   
        const {data: newData} = await client.query({
            query: queryApi,
            variables: {
                first:8,
                after: cursor,
            }
        });
        
        const searchResult = newData;
        const newNodes = searchResult.search.nodes;
        const pageInfo  = searchResult.search.pageInfo;

       // setCursor(new data)
        setCursor(pageInfo.endCursor);
        setData(prev => {
          return [...prev, ...newNodes]
        }
    );

        
        } catch(error) {
            console.log("error:", error)
        }  finally {
            setLoading(false);
        }
};

return {
    data,
    loadMore,
    loading,
}

}