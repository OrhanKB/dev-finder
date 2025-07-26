
import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function LanguageListings({items}) {
    console.log("trendinglangs:", items);
    return(
        <>
        <Listing title="Trend Languages" items={items} symbol={Symbols.trend} />

        </>
    );
} 

export default LanguageListings
