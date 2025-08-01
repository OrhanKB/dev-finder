import { Link } from "react-router-dom";

function Button({title, nav, text="", width="w-20", onClick, isActive}) {

    const baseClasses = 
    `justify-center inline-flex text-white ${text} ${width} 
    ${isActive ? "bg-blue-600 scale-110" : "bg-black hover:bg-gray-600"}
    border-2 px-3 py-1 transition duration-250 ease hover:scale-110   text-center`

    if(onClick) {
        return(
            <>
        <button className={`${baseClasses}`} onClick={onClick}>
            {title}
        </button>
            </>
        );
    }

    return(
        <>
        <Link className={`${baseClasses}`} to={nav === "Home" ? "/" : nav}>
            {title}
        </Link>
        </>
    );
}

export default Button