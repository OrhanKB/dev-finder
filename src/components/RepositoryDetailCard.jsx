import NumberAbbreviate from "number-abbreviate";
import { Symbols } from "../assets/symbols";
import { format, formatDistanceToNow } from "date-fns";
import GithubColors from "github-colors"
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { PulseLoader } from "react-spinners";
import Button from "./Button.jsx"

function RepositoryCardDetail({item}) {
  
  const indexOfLetter = item.node.createdAt.split("").indexOf("T");
  const createDate =  item.node.createdAt.split("").splice(0, indexOfLetter).join("");
  const updateDate = item.node.updatedAt;
  const totalSize = item.node.languages.totalSize 
  const repositoryTopics = item.node.repositoryTopics.edges;

    const [contributors, setContributors] = useState([]);
    const [otherContributorsCount, setOtherContributorsCount] = useState();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const nodeOwner = item.node.owner.login;
    const repoName = item.node.name;
    const contributorsUrl = `https://github.com/${nodeOwner}/${repoName}/graphs/contributors`;
   useEffect(() => {

    const getAllContributors = async () => {
      try {
        setIsLoading(true);
        //first six data
        const res1 = await fetch(`https://api.github.com/repos/${nodeOwner}/${repoName}/contributors`, {
           headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
           }
        });
        const firstSixData = await res1.json();
        const firstSix = firstSixData.slice(0, 6);
        setContributors(firstSix);

        //other contribution(all)
        const res2 = await fetch(`https:/api.github.com/repos/${nodeOwner}/${repoName}/contributors?per_page=100&page=${page}`, {
           headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
           }
        });
        const allData = await res2.json();
        const linkHeader = res2.headers.get("Link");

        if(linkHeader) {
            const lastLink = linkHeader.split(",").find(item => item.includes(`rel="last"`));
            const urlLink = new URL(lastLink.split(">")[0].replace("<", ""));
            const lastPage = Number(urlLink.searchParams.get("page"));

            let allContributors = [...allData];
            for(let num = 2; num <= lastPage; num++) {
              const res = await fetch(`https://api.github.com/repos/${nodeOwner}/${repoName}/contributors?per_page=100&page=${num}`, {
           headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
           }
        });
              const pageData = await res.json();
              allContributors.push(...pageData);
            }

          const otherCount = allContributors.length - firstSix.length;
          setOtherContributorsCount(otherCount);
        };

      } catch(error) {
        console.log("error:", error)
      } finally {
        setIsLoading(false);
      }
    }

    getAllContributors();
  }, [repoName]);
    

  return (
    <div className="mt-5 bg-white justify-self-center border-4 shadow-xl font-mono p-4 sm:p-6 w-full max-w-sm sm:max-w-5xl lg:max-w-[1200px] mx-auto h-auto flex flex-col">

      <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={item.node.owner.avatarUrl}
            alt="owner-avatar"
            className="w-16 sm:w-30 h-16 sm:h-30 border-4"
          />
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-3xl font-bold text-gray-800 break-words">{item.node.name}</h2>
            <p className="text-base sm:text-2xl text-gray-500 break-words">@{item.node.owner.login}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        <div className="flex-1">
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            {item.node.description}
          </p>


          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
            <div className="bg-yellow-50 p-2 sm:p-3 rounded text-center">
              <div className="text-sm sm:text-xl font-bold text-yellow-700">
                {Symbols.star} {NumberAbbreviate(item.node.stargazerCount, 0)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Stars</div>
            </div>
            
            <div className="bg-blue-50 p-2 sm:p-3 rounded text-center">
              <div className="text-sm sm:text-xl font-bold text-blue-700">
                {Symbols.fork} {NumberAbbreviate(item.node.forkCount, 0)}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Forks</div>
            </div>
            
            <div className="bg-green-50 p-2 sm:p-3 rounded text-center">
              <div className="text-sm sm:text-xl font-bold text-green-700">
                {item.node.issues.totalCount}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Issues</div>
            </div>
            
            <div className="bg-purple-50 p-2 sm:p-3 rounded text-center">
              <div className="text-sm sm:text-xl font-bold text-purple-700">
                  {item.node.watchers.totalCount}                
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Watchers</div>
            </div>
          </div>


          <div className="bg-gray-200 p-3 text-md font-bold text-gray-600 space-y-1">
            <div>{Symbols.calendar} Created: {format(new Date (createDate), "dd MMMM, yyyy")}</div>
            <div>{Symbols.update} Updated: {formatDistanceToNow(updateDate)}</div>
            <div>{Symbols.license} License: {item.node.licenseInfo && item.node.licenseInfo.name || "No license"}</div>
            <div> {Symbols.size} Size: {(item.node.diskUsage / 1024).toFixed(1)} MB</div>
          </div>
        </div>


        <div className="flex-1">

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-1">
              {
             item.node.languages.edges.length !== 0 && item.node.languages.edges.map(itemLang => {
              
              const percentage =  ((itemLang.size / totalSize) * 100).toFixed(1)
              const langColors = GithubColors.get(itemLang.node.name).color;


            if(percentage > 1) {
             
              return(
              <span key={itemLang.node.name} style={{
                backgroundColor: langColors,
                color: langColors === "#f1e05a" ? "black" : [] 
              }} 
              className="bg-gray-100 text-gray-200 px-2 py-1 border-2 border-black text-sm">
                {itemLang.node.name} ({percentage}%)
              </span>
              ); 
              }

              }) || <div className="text-gray-600 text-sm">*No Languages</div>
              }
            </div>
          </div>


          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Top Contributors</h3>
            {isLoading ? (
              <PulseLoader color="black" size={7}/>
            ) : (
               <div className="flex gap-2">
              {contributors.map(contributor => {
                return(   
              <Link key={contributor.id} to={contributor.html_url} target="_blank">  
                <img
                  src={contributor.avatar_url}
                  alt="contributor"
                  className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-black"
                  title={contributor.login}
                />
              </Link>     
                );
              })}
              {otherContributorsCount ? (
              <span className="self-center">
                <Link className="hover:text-blue-600" to={contributorsUrl} target="_blank"> 
                {otherContributorsCount}+ More Contributors
                </Link>
                </span>) : (<span>*No data</span>)}
            </div>
            )}
          </div>


          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Topics</h3>
            <div className="flex flex-wrap gap-1">
              { repositoryTopics.length !== 0 ?
              repositoryTopics.map((topic, index) => {
                return(
                <span key={topic.node.topic.name || index} className="bg-blue-100 text-blue-700 px-2 py-1 border-2 border-black text-sm">
                    {topic.node.topic.name}
                </span>
                )
              }) : (<span>*No data</span>) }
            </div>
          </div>
        </div>
      </div>


      <div className="flex gap-2 mt-6 justify-center">
        <Button title={"View Repository"} width={"w-100"} nav={item.node.url} target={"_blank"}></Button>
      </div>
    </div>
    
  );
}

export default RepositoryCardDetail;