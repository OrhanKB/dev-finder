import LanguageListings from "./LanguageListings";
import RepoListings from "./RepoListings";
import DeveloperListings from "./DeveloperListings";
import { useEffect, useState } from "react";

function Listings({data}) {

    const {popularRepos, topFollowed, trendingLangs} = data
    console.log("trendinglangs in listings:", trendingLangs);
  
    return(
        <>
        <section className="flex bg-gray-300 h-80 font-mono justify-center">
            <LanguageListings items={trendingLangs} />
            <RepoListings items={popularRepos} />
            <DeveloperListings items={topFollowed}/>
        </section>
        </>
    );
}

export default Listings