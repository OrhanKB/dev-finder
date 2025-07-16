import { Link } from "react-router-dom";

function Button({title}) {

    const baseClasses = 
    "text-white btns rounded-full bg-black px-3 py-1 transition duration-250 ease hover:scale-110 hover:bg-gray-600 w-20 text-center"

    return(
        <>
        <Link className={`${baseClasses}`} to={title === "Home" ? "/" : title.toLowerCase()}>
            {title}
        </Link> 
        </>
    );
}

export default Button