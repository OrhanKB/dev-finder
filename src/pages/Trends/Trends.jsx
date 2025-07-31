import TrendCards from "../../components/TrendCards";
import FilterButtons from "../../components/FilterButtons";
import { useLoaderData } from "react-router-dom";

function Trends() {
    const data = useLoaderData();
    
    return(
        <>
        <FilterButtons />
        <TrendCards data={data} />
        </>
    );
}

export default Trends