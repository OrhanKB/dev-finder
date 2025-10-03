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
        <section className="bg-gradient-to-b from-gray-800 to-gray-600 py-2 flex flex-wrap justify-center 
            items-center gap-x-4  font-mono px-2 max-sm:space-y-1 max-sm:pt-5  max-sm:text-center max-sm:block">

            <Link to="/" className="p-2 btns bg-gradient-to-b from-black to-gray-800 lg:text-3xl max-sm:text-sm sm:text-sm md:text-lg text-white">
             DevFinder
            </Link>

            <SearchBar />
            
            <div className="flex gap-x-3 justify-center">
            <Button isActive={filteringStyle("/")} nav="/" title="Home"/>
            <Button isActive={filteringStyle("/trends")} nav="/trends" title="Trends"/>
            </div>

        </section>

        </>
    
    );

}

export default Navbar