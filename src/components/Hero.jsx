import GithubPic from "../assets/github.png"
import abbreviate from "number-abbreviate"
import { Symbols } from "../assets/symbols";

function Hero({data}) {

    const {dailyRepo, totalRepo, popularRepos} = data 
    const popularReposName = popularRepos[0].name;
    const popularReposStar = popularRepos[0].stargazerCount;
    const totalRepoShort =  ` ${abbreviate(totalRepo, 1).toUpperCase()}+`; 
    const popReposStarShort=  `${ abbreviate(popularReposStar, 0).toUpperCase()}+`
    

    return(
        <>
    <section className="bg-gray-800 text-gray-300 min-h-80 font-mono flex flex-col md:flex-row w-full"> 
        <div className="flex flex-col md:px-10 md:pt-10 lg:mt-10 lg:gap-y-10 max-sm:mt-5 sm:mt-5 sm:items-center max-sm:items-center gap-4 flex-1">
            <h1 className="text-xl max-sm:text-sm md:text-3xl break-words">
                {Symbols.rocket} {dailyRepo} Repo Created Today !
            </h1>

            <h1 className="text-xl md:text-3xl max-sm:text-sm break-words">
                {Symbols.world} {totalRepoShort} Open Source Repo Is On Github !
            </h1>

            <h1 className="text-xl md:text-3xl max-sm:text-sm break-words">
                {Symbols.starShine} Most starred: {popularReposName} - {popReposStarShort} (STAR)
            </h1>
        </div>
    
        <div className="flex justify-center md:justify-end lg:mr-20 items-center p-4">
            <img className="opacity-50 h-40 md:h-80 w-auto max-w-full object-contain" 
            src={GithubPic} alt="GitHub logo" />
        </div>

    </section>
        </>
    );
}
export default Hero