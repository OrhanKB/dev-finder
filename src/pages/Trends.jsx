import { useSearchParams } from "react-router-dom";
import { Symbols } from "../assets/symbols";
import Button from "../components/Button";
import DeveloperCard from "../components/DeveloperCard";
import LanguageCard from "../components/LanguageCard";
import RepositoryCard from "../components/RepositoryCard";
import { useEffect } from "react";

function Trends() {

    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get("filter");

  useEffect(() => {
    if(!searchParams.get("filter")) {
      setSearchParams({filter: "developers"})
    }
  }, [])

    const renderCards = () => {
      return(
        <>
      {activeFilter === "repositories" && <RepositoryCard />}
      {activeFilter === "developers" && <DeveloperCard />}
      {activeFilter === "languages" && <LanguageCard />}
      </>
      );
    }

    
    const handleFilterChange = (filterInput) => {
      console.log("filterinput:", filterInput)
      setSearchParams({filter: filterInput})
    }


    return(
        <>
        <section className=" font-mono flex flex-col justify-center items-center gap-y-10 h-40 bg-gray-800">
            <div className="text-3xl text-white"> {Symbols.trend} Github Trends </div>
            <div className="space-x-5">
                <Button onClick={() => {handleFilterChange("repositories")}} width="w-30" title="Repositories"/>
                <Button onClick={() => {handleFilterChange("developers")}} width="w-30" title="Developers" />
                <Button onClick={() => {handleFilterChange("languages")}} width="w-30" title="Languages" />
            </div>
        </section>

        <section className="grid grid-cols-4 gap-y-7 gap-x-5 bg-gray-300 px-10 py-10">
            {renderCards()}
          </section>
        </>
    );
}

export default Trends