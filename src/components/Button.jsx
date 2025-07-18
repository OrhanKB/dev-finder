import { Link } from "react-router-dom";

function Button({title, nav, text="", width="w-20" }) {

    const baseClasses = 
    `justify-center inline-flex text-white ${text} ${width} bg-black border-2 px-3 py-1 transition duration-250 ease hover:scale-110  hover:bg-gray-600 text-center`

    return(
        <>
        <Link className={`${baseClasses}`} to={nav === "Home" ? "/" : nav}>
            {title}
        </Link>
        </>
    );
}

export default Button