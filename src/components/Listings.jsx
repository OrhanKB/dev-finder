import LanguageListings from "./LanguageListings";
import RepoListings from "./RepoListings";
import DeveloperListings from "./DeveloperListings";

function Listings() {
    return(
        <>
        <section className="flex bg-gray-300 h-80 font-mono justify-center">
            <LanguageListings />
            <RepoListings />
            <DeveloperListings />
        </section>
        </>
    );
}

export default Listings