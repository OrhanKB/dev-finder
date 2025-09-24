import RepoListings from "./RepoListings";
import DeveloperListings from "./DeveloperListings";


function Listings({data}) {

    const {popularRepos, topFollowed} = data

    return(
        <>
        <section className="flex  font-mono justify-evenly">
            
            <RepoListings items={popularRepos} />
            <DeveloperListings items={topFollowed}/>
        </section>
        </>
    );
}

export default Listings