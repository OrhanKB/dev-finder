
import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function LanguageListings() {
    return(
        <>
        <Listing title="Trend Languages" items={["Javascript - 25M Repo","Python - 18M Repo","Rust - 1.2M Repo"]}
            symbol={Symbols.trend}
         />
        </>
    );
} 

export default LanguageListings
