import { createContext, useContext, useState } from "react";

export const searchIdContext = createContext();

export const SearchIdProvider  = ({children}) => {
    const [id, setId] = useState(null);

    return(
        <searchIdContext.Provider value={{id, setId}}>
            {children}
        </searchIdContext.Provider>
    );
}

export const useSearchIdContext = () => {
    const context = useContext(searchIdContext);

    if (!context) {
        throw new Error("error");
    }
    
    return context;
}