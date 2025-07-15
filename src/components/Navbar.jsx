import { Link } from "react-router-dom"

function Navbar() {
    return(
        <>


        <section className="bg-black">

        <div className="bg-white">
            <form action="/search" method="GET">
                <input type="text"  name="query" placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
        </div>

            <Link to="/">
                <button className="text-white">Home</button>
            </Link>

            <Link to ="/trends">
                <button className="text-white">Trends</button>
            </Link>
            
            <Link to ="/saved">
                <button className="text-white">Saved</button>
            </Link>
        </section>

        </>
    
    );

}

export default Navbar