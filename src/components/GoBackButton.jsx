import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
    let navigate = useNavigate();
    return(
        <>
        <div className="w-12 h-12 mt-15 bg-black border-1 border-white text-white cursor-pointer flex justify-center items-center align-center
        hover:bg-blue-600 transition " onClick={() => {navigate(-1)}}>{<IoIosArrowBack className="w-5 h-5"/>}</div>
        </>
    );
}

export default GoBackButton