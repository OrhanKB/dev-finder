import {Symbols} from "../assets/symbols.js"
import Button from "./Button.jsx"
import abbreviate from "number-abbreviate"
import GitHubColors from "github-colors";
import { useEffect, useRef, useState } from "react";
import {format} from "date-fns";
import { Link } from "react-router-dom";

function DeveloperDetailCard({item}) {
    const statusStyle = "flex flex-col items-center w-25 bg-gray-200 ml-5 p-4 h-20"
    
        const typenameOrg = item.node.__typename;

       const [follower, setFollower] = useState();

       if (typenameOrg === "Organization") {
        useEffect(() => {
    
                async function deneme() {
                const api = `https://api.github.com/users/${item.node.login}`;
                try {
                    const res = await fetch(api);
                    const data = await res.json();
                    setFollower(data.followers)
                } catch(err) {
                    console.log("erorr:", error)
                }
            }
            deneme();
        });  
       }

    const reposList = item.node.pinnableItems.nodes;

    const indexOfLetter = item.node.createdAt.split("").indexOf("T");
    const createDate =  item.node.createdAt.split("").splice(0, indexOfLetter).join("");

        const calculateTopLangs = () => {
            const repositories = item.node.repositories.nodes;
            
            const langArr = [];

                repositories.forEach(repo => {
                    repo.languages.edges.forEach(edge => {
                        
                    const matchedName = langArr.find(lang => lang.name === edge.node.name);
                        
                    if(!matchedName) {
                        langArr.push({
                        name: edge.node.name,
                        size: edge.size, 
                        percentage: 0,
                        }); 
                    } else {
                        matchedName.size += edge.size;
                    }
                
                    })
                })       
                            
                const langsSorted =  langArr.sort((a, b) => b.size - a.size);
                const firstThree = langsSorted.slice(0, 3);
                const sumaAll = langsSorted.reduce((acc, item) => acc + item.size, 0);
                
                firstThree.forEach(item => {
                const percentages = (item.size / sumaAll) * 100;
                item.percentage = percentages.toFixed(1);   
                });            

            return firstThree
        }; 

       
    
        const div1Ref = useRef();
        const div2Ref = useRef();

        useEffect(() => {
             if (div1Ref.current.offsetWidth > 180) {
                div2Ref.current.style.maxWidth = "300px";
                div2Ref.current.style.overflow = "hidden";
                div2Ref.current.style.textOverflow  = "ellipsis";
                div2Ref.current.style.whiteSpace ="nowrap"

                
                div1Ref.current.style.maxWidth = "150px";
                div1Ref.current.style.overflow = "hidden";
                div1Ref.current.style.textOverflow  = "ellipsis";
                div1Ref.current.style.whiteSpace ="nowrap"
             }
        }); 

        const dateFormatted = format(new Date(createDate), "MMMM, dddd ,yyyy, ");

    return(
        <section className="grid bg-white relative border-4 w-320 h-auto justify-self-center mt-10 font-mono">
        <div className="flex mt-5 mx-10 w-auto">

            {/*PHOTOS AND MAIN USER TITLES */}
            <div className="flex">
                <img className="border-4 w-30 h-30" src={item.node.avatarUrl} alt="" />

                <div className=" ml-10">
                    <h1 className="text-3xl font-bold ">{item.node.name}</h1>
                    <h3 className="text-2xl text-gray-500 mt-4">@{item.node.login}</h3>
                 { typenameOrg !== "Organization" && <p className="mt-4 text-gray-700">{item.node.bio || `${Symbols.bio} *No bio yet.*`}</p> }
                </div>
            </div>
            {/*PHOTOS AND MAIN USER TITLES END */}

            {/* FOLLOWER - REPOS STATUS */}
            
            <div className="flex ml-auto">
                <div className={statusStyle}>
                    <p className="text-2xl">{abbreviate(typenameOrg === "Organization" ? follower : item.node.followers.totalCount, 0)}</p>
                    <p className="text-gray-500">Followers</p>
                </div>
                
                { typenameOrg !== "Organization" && 
                <div className={statusStyle}>
                    <p className="text-2xl">{item.node.following.totalCount}</p>
                    <p className="text-gray-500">Following</p> 
                </div>
                }

                <div className={statusStyle}>
                    <p className="text-2xl">{item.node.repositories.nodes.length >= 20 ? " >20" : item.node.repositories.nodes.length }</p>
                    <p className="text-gray-500">Repos</p>
                </div>
            </div>
        </div>
        {/* FOLLOWER - REPOS STATUS END */}


            {/* LOCATION AND LINKS */}
            <div className="flex relative font-semibold text-sm mt-10 ml-10 text-gray-500 gap-8">
                <p title={item.node.location} ref={div1Ref}>{Symbols.location}{item.node.location || "No location"}</p>
                {typenameOrg !== "Organization" && <p>{Symbols.company}{item.node.company || " No company"}</p> }
                <p>{Symbols.calendar} Joined {dateFormatted}</p>
                <a  ref={div2Ref} href={item.node.websiteUrl} target="_blank" className="text-blue-600">
                {Symbols.link} {item.node.websiteUrl || "No link"}
                </a>
            </div>
            {/* LOCATION AND LINKS END*/}

            {/* TOP USED LANGUAGES */}
            <span className="absolute right-10 top-26">
                <div className="w-85 h-35 bg-gray-200 mt-5 ml-23 p-4 gap-y-0">
                    <p className="text-xl font-bold mb-3">Top Languages</p>
                <ul>
                    {
                    calculateTopLangs().map(lang => { 
                        const langColors = GitHubColors.get(lang.name).color;
                        
                        return(         
                      <li className="flex flex-row" key={lang.name}> 
                        <div className="w-4 h-4 mt-1 mr-3 border-2" style={{backgroundColor: langColors}}></div>
                        {lang.name} - {lang.percentage}%
                      </li>
                    )
                    })
                    }

                </ul>
                </div>
            </span>                
            {/* TOP USED LANGUAGES */}

            {/* REPOSITORIES */}
            <div className="flex">
                <div className="mt-10 ml-6">
                    <p className="text-xl font-bold mb-5">Pinned Repositories</p>
                    <div className="grid grid-cols-3 gap-3">
                    {reposList.map(item => {
                        
                        return(         
                <Link  key={item.name} target="_blank" to={item.url}>
                    <div className="border-3 px-4 py-1 h-25 w-100 bg-gray-200 hover:translate-x-1 hover:shadow-xl transition-all cursor-pointer ">
                        <p className="text-lg font-semibold">{item.name === null ? "No name" : item.name}</p>
                        <p title={item.description} className="text-gray-600 text-sm truncate">{item.description || "*No Description*"}</p>
                        <div className="flex text-sm text-gray-600 justify-between mx-2 mt-3">
                            <p>{Symbols.star} {abbreviate(item.stargazerCount,0)}</p>
                            <p>{Symbols.fork} { abbreviate(item.forkCount,0)}</p>
                            <p>{Symbols.location} {item.primaryLanguage ? item.primaryLanguage.name : "No Lang"}</p>
                        </div>
                    </div>
                </Link>
                        )
                        
                    })}
                    </div>
                </div>
            </div>
            {/* REPOSITORIES END*/}

                    
            <Button nav={item.node.url} target="_blank" mb={"5"} mt={"5"} title={"View Github"} width="w-80"/>        
        

        </section>
    );
}

export default DeveloperDetailCard