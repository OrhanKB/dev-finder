import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function DeveloperListings({items}) {

    return(
        <>
            <Listing title="Top Followed Devs" items={items}
                symbol={Symbols.crown}
             />
        </>
    );
}

export default DeveloperListings