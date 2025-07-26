import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function RepoListings({items}) {
    return(
        <>
            <Listing title="Popular Repos" items={items}
                symbol={Symbols.fire}
             />
        </>
    );
}   

export default RepoListings