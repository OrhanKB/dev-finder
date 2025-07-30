import Listing from "./Listing";
import { Symbols } from "../assets/symbols";

function DeveloperListings({items}) {

    console.log("items:", items)
    const filteredDevelopers = items.filter((item) => item.__typename !== "Organization");
    console.log("filtered developers:", filteredDevelopers);
    const firstFive = filteredDevelopers.slice(0, 5);
    console.log("firstfive:", firstFive);
    return(
        <>
            <Listing title="Top Followed Devs" items={firstFive}
                symbol={Symbols.crown}
             />
        </>
    );
}

export default DeveloperListings