import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function RepoListings() {
    return(
        <>
            <Listing title="Popular Repos" items={[" freeCodeCamp ★372K",". vite ★58K","next.js ★52K"]}
                symbol={Symbols.fire}
             />
        </>
    );
}   

export default RepoListings