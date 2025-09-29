import { Link } from "react-router-dom"
import Button from "./Button";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
    
    const location = useLocation();

    const filteringStyle = (path) => { 
        return location.pathname === path   
    }
    
    return(
        <>
        <section className="bg-gradient-to-b from-gray-800 to-gray-600 py-2 flex justify-center 
            items-center gap-x-10 font-mono">

            <Link to="/" className="p-2 btns bg-gradient-to-b from-black to-gray-800 text-3xl text-white ">
             DevFinder
            </Link>

            <SearchBar />

            <Button isActive={filteringStyle("/")} nav="/" title="Home"/>
            <Button isActive={filteringStyle("/trends")} nav="/trends" title="Trends"/>

        </section>

        </>
    
    );

}

export default Navbar