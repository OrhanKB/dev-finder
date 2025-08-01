import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Symbols } from "../assets/symbols";
import Button from "./Button.jsx"

function FilterButtons() {  
    
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get("filter");

     useEffect(() => {
       if(!searchParams.get("filter")) {
         setSearchParams({filter: "developers"})
       }
     }, [])

     
    const handleFilterChange = (filterInput) => {
      setSearchParams({filter: filterInput})
    }

    return(

        <>
        <section className=" font-mono flex flex-col justify-center items-center gap-y-10 h-40 bg-gray-800">
            <div className="text-3xl text-white"> {Symbols.trend} Github Trends </div>
            <div className="space-x-5">
                <Button
                onClick={() => { 
                  {handleFilterChange("repositories")}
                }
              } 
              isActive={activeFilter === "repositories"}
              width="w-30" title="Repositories"
              />
                
                
                <Button onClick={() => {handleFilterChange("developers")}}
                  isActive={activeFilter === "developers"}
                  width="w-30" title="Developers" />
            </div>
        </section>
        </>
    );
}

export default FilterButtons