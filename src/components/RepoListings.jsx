import Listing from "./Listing";
import { useListingData } from "../hooks/useListingData";

function RepoListings({items}) {
    const {config, getDisplayValue, processedItems} = useListingData(items, "repository")
    
    return(
        <>
            <Listing 
            title={config.title}
            items={processedItems}
            symbol={config.symbol}
            spanSymbol={config.spanSymbol}
            getDisplayValue={getDisplayValue} 
             />
        </>
    );
}   

export default RepoListings