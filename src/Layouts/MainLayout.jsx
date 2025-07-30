import Navbar from "../components/Navbar";
import  { Outlet }  from "react-router-dom";

function MainLayout() {
    return(
       <div className="bg-gray-300 min-h-screen" >
        <Navbar />
        <Outlet />
       </div>
    );

}

export default MainLayout