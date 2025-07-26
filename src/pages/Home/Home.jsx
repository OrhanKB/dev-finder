import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Listings from "../../components/Listings";
import { useLoaderData } from "react-router-dom";


function Home() {
    const data = useLoaderData();

    return(
        <>
        <Hero data={data}/>
        <Listings data={data}/>
        </>
    );
}

export default Home