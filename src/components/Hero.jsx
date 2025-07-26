import Button from "./Button";
import GithubPic from "../assets/github.png"


function Hero({data}) {

    const {dailyRepo, totalRepo, popularRepos} = data 
    const popularReposName = popularRepos[0].name;
    const popularReposStar = popularRepos[0].stargazerCount;
    

    return(
        <>
    <section className="bg-gray-800 text-gray-300 h-100 font-mono flex w-full"> 
        <div className="flex flex-col px-10 pt-10 gap-20">
            <h1 className="text-4xl ">
                🚀 {dailyRepo}  Repo Created Today !
                
            </h1>

            <h1 className="text-4xl ">
                🌍 {totalRepo} Open  Source Repo Is On Github !
            </h1>

            <h1 className="text-4xl ">
                🌟 Most starred: {popularReposName} - {popularReposStar} (STAR)
            </h1>
        </div>
    
        <div>
            <img className=" ml-20 opacity-50 max-w-[400px]" 
            src={GithubPic} alt="description" />
        </div>

    </section>
        </>
    );
}
export default Hero