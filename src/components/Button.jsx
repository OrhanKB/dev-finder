import { Link } from "react-router-dom";

function Button({title, nav, text="", width="w-20", onClick, isActive, height, disabled}) {

    const baseClasses = 
    `inline-flex justify-center text-white ${text} ${width} ${height}
    ${isActive ? "bg-blue-600 scale-110" : "bg-black hover:bg-gray-600"}
    border-2 py-1 transition duration-250 ease hover:scale-110 cursor-pointer`

    if(onClick) {
        return(
            <>
        <button className={`${baseClasses}`} onClick={disabled ? undefined : onClick}>
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