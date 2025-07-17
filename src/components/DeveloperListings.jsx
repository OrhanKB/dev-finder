import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function DeveloperListings() {

    return(
        <>
            <Listing title="Top Developers" items={["@torvalds - Linux"," @deneme - deneme123", "@anan - anan321"]}
                symbol={Symbols.crown}
             />
        </>
    );
}

export default DeveloperListings