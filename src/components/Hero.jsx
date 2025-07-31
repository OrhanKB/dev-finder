import GithubPic from "../assets/github.png"
import abbreviate from "number-abbreviate"

function Hero({data}) {

    const {dailyRepo, totalRepo, popularRepos} = data 
    const popularReposName = popularRepos[0].name;
    const popularReposStar = popularRepos[0].stargazerCount;
    const totalRepoShort =  ` ${abbreviate(totalRepo, 1).toUpperCase()}+`; 
    const popReposStarShort=  `${ abbreviate(popularReposStar, 0).toUpperCase()}+`
    

    return(
        <>
    <section className="bg-gray-800 text-gray-300 h-80 font-mono flex w-full"> 
        <div className="flex flex-col px-10 pt-10 gap-15">
            <h1 className="text-3xl ">
                🚀 {dailyRepo}  Repo Created Today !
                
            </h1>

            <h1 className="text-3xl ">
                🌍 {totalRepoShort} Open  Source Repo Is On Github !
            </h1>

            <h1 className="text-3xl ">
                🌟 Most starred: {popularReposName} - {popReposStarShort} (STAR)
            </h1>
        </div>
    
        <div>
            <img className=" ml-45 opacity-50 h-80 max-w-[400px]" 
            src={GithubPic} alt="description" />
        </div>

    </section>
        </>
    );
}
export default Hero