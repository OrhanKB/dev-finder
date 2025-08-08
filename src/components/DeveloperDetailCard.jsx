// src/components/DeveloperDetailCard.jsx
import abbreviate from "number-abbreviate"
import {Symbols} from "../assets/symbols.js"
import Button from "./Button.jsx"

function DeveloperDetailCard() {
    const statusStyle = "flex flex-col items-center w-25 bg-gray-200 ml-5 p-4 h-20"
    

    return(
        <section className="grid bg-white relative border-4 w-320 h-auto justify-self-center mt-10 font-mono">
        <div className="flex mt-5 mx-10 w-auto">

            {/*PHOTOS AND MAIN USER TITLES */}
            <div className="flex">
                <img className="border-4 w-30 h-30" src="https://picsum.photos/200" alt="" />

                <div className=" ml-10">
                    <h1 className="text-3xl font-bold ">Deneme Usertitle</h1>
                    <h3 className="text-2xl text-gray-500 mt-4">@torvalds</h3>
                    <p className="mt-4 text-gray-700">Creator of x and y. just for fun</p>
                </div>
            </div>
            {/*PHOTOS AND MAIN USER TITLES END */}

            {/* FOLLOWER - REPOS STATUS */}
            <div className="flex ml-auto">
                <div className={statusStyle}>
                    <p className="text-2xl">187k</p>
                    <p className="text-gray-500">Followers</p>
                </div>
                <div className={statusStyle}>
                    <p className="text-2xl">0</p>
                    <p className="text-gray-500">Following</p>
                </div>
                <div className={statusStyle}>
                    <p className="text-2xl">8</p>
                    <p className="text-gray-500">Repos</p>
                </div>
            </div>
        </div>
        {/* FOLLOWER - REPOS STATUS END */}


            {/* LOCATION AND LINKS */}
            <div className="flex relative  mt-10 ml-10 text-gray-500 gap-13">
                <p>{Symbols.location}Portland, OR</p>
                <p>{Symbols.company}Linux Foundation</p>
                <p>{Symbols.calendar}Joined Apr 2011</p>
                <p>{Symbols.link}kernel.org</p>
            </div>
            {/* LOCATION AND LINKS END*/}

            {/* TOP USED LANGUAGES */}
            <span className="absolute right-10 top-26">
                <div className="w-85 h-35 bg-gray-200 mt-5 ml-23 p-4 gap-y-0">
                    <p className="text-xl font-bold mb-3">Top Languages</p>
                <ul>
                    <li>C - 89.2%</li>
                    <li>Assembly - 6.1%</li>
                    <li>Shell - 2.8%</li>
                </ul>
                </div>
            </span>                
            {/* TOP USED LANGUAGES */}

            {/* REPOSITORIES */}
            <div className="flex">
                <div className="mt-10 ml-6">
                    <p className="text-xl font-bold mb-5">Pinned Repositories</p>
                <div className="grid grid-cols-3 gap-3">

                    <div className="border-3 px-6 py-2 h-25 w-100 bg-gray-200">
                        <p className="text-lg font-semibold">linux</p>
                        <p className="text-gray-600">Linux kernel source tree</p>

                        <div className="flex text-sm text-gray-600 justify-between mx-2 mt-1">
                            <p>{Symbols.star} 158K</p>
                            <p>{Symbols.fork} 47.2K</p>
                            <p>{Symbols.location} C</p>

                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            {/* REPOSITORIES END*/}

        <Button mb={"5"} mt={"5"} title={"View Github"} width="w-80"/>

        </section>
    );
}

export default DeveloperDetailCard