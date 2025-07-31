import Listing from "./Listing";
import { useListingData } from "../hooks/useListingData";

function DeveloperListings({items}) {
    const {config, getDisplayValue, processedItems} = useListingData(items, "developer")

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

export default DeveloperListings