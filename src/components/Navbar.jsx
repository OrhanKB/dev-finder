import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

function Navbar() {
    return(
        <>
        <section className="bg-gradient-to-b from-gray-800 to-gray-600 py-2 flex justify-center 
            items-center gap-x-10 font-mono">

            <Link to="/" className="p-2 btns bg-gradient-to-b from-black to-gray-800 text-3xl text-white ">
             DevFinder
            </Link>

            <div className="relative py-2 px-4 py-4 mx-4">
                <form  action="/search" method="GET">
                    <FaSearch className="absolute left-8 top-6 cursor-pointer transition duration-250 ease
                     hover:scale-150"/>
                    <input  className="btns w-md pl-6 bg-gray-400 mx-3 py-1 px-2 border-2 outline-none" 
                    type="text"  name="query" placeholder="Search..." />
                </form>
            </div>

            <Button nav="/" title="Home"/>
            <Button nav="/trends" title="Trends"/>
            <Button nav="/saved" title="Saved"/>

        </section>

        </>
    
    );

}

export default Navbar