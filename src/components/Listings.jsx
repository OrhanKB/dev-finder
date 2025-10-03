import RepoListings from "./RepoListings";
import DeveloperListings from "./DeveloperListings";


function Listings({data}) {

    const {popularRepos, topFollowed} = data

    return(
        <>
        <section className="flex flex-col lg:flex-row font-mono justify-evenly gap-8 px-4">
            
            <RepoListings items={popularRepos} />
            <DeveloperListings items={topFollowed}/>
        </section>
        </>
    );
}

export default Listings