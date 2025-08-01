import { useSearchParams } from "react-router";
import DeveloperCard from "../components/DeveloperCard";
import RepositoryCard from "../components/RepositoryCard";


function TrendCards({data}) {

    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get("filter");

    const {popularRepos, topFollowers} = data
    
    const renderCards = () => {
      return(
      <>
      {activeFilter === "repositories" && <RepositoryCard  items={popularRepos} />}
      {activeFilter === "developers" && <DeveloperCard items={topFollowers} />}
      </>
      );
    }

    return(
        <> 
        <section className="grid grid-cols-4 gap-y-7 gap-x-5 bg-gray-300 px-10 py-10">
            {renderCards()}
        </section>
        </>
    );
}

export default TrendCards