import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function LanguageListings({items}) {

    const trendLangsFiltered = items.filter(item => item.primaryLanguage !== null)
    const firstThree = trendLangsFiltered.splice(0, 5).map((item) => {
       return item.primaryLanguage
    });

    return(
        <>
        <Listing title="Trend Languages" items={firstThree} symbol={Symbols.trend} />
        </>
    );
} 

export default LanguageListings
