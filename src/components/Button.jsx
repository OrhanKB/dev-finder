import { Link } from "react-router-dom";

function Button({title, nav, text="", target , width="w-20", onClick, isActive, height, disabled, mb, mt}) {

    const baseClasses = 
    `inline-flex justify-center text-white ${text} ${width} ${height} mb-${mb} mt-${mt}
    ${isActive ? "bg-blue-600 scale-110" : "bg-black hover:bg-gray-600"}
    border-2 py-1 transition duration-250 ease hover:scale-110 cursor-pointer self-center justify-self-center`

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
        <Link className={`${baseClasses}`} to={nav === "Home" ? "/" : nav} target={target}>
            {title}
        </Link>
        </>
    );
}

export default Button