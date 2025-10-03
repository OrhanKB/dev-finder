import { useSearchParams } from "react-router";
import DeveloperCard from "../components/DeveloperCard";
import RepositoryCard from "../components/RepositoryCard";
import Button from "./Button";
import { useLoadMore } from "../hooks/useLoadMore";
import {PulseLoader} from "react-spinners"

import {
    GET_TOP_FOLLOWED,
    GET_POPULAR_REPOS,
} from "../api/index.js"

function TrendCards({items}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get("filter");

    const {popularRepos, topFollowers} = items;

    const followersItems = topFollowers.nodes;
    const followerCursor = topFollowers.pageInfo.endCursor;

    const reposItems = popularRepos.nodes;
    const reposCursor = popularRepos.pageInfo.endCursor;

    //  APOLLO CLIENT
    //repos data
    const {
        data: repoData,
        loadMore: repoLoadMore,
        loading: repoLoading,
        hasMore: repoHasMore
    } =
     useLoadMore(GET_POPULAR_REPOS, reposCursor, reposItems,);

    //followers data
    const {
        data: topFollowedData,
        loadMore: followerLoadMore,
        loading: followedLoading,
        hasMore: followersHasMore,
    } =
     useLoadMore(GET_TOP_FOLLOWED, followerCursor, followersItems);
    //  APOLLO CLIENT  

    const handleOnClick = activeFilter === "repositories" ? repoLoadMore : followerLoadMore;
    const currentLoading = activeFilter === "repositories" ? repoLoading : followedLoading;
    const currentHasMore = activeFilter === "repositories" ? repoHasMore : followersHasMore

    
    const renderCards = () => {
      return(
      <>
      {activeFilter === "repositories" && <RepositoryCard  items={repoData} />}
      {activeFilter === "developers" && <DeveloperCard items={topFollowedData} />}
      </>
      );
    }

    return(
        <> 
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-5 bg-gray-300 px-4 md:px-10 py-10 font-mono">
            {renderCards()}
        </section>
        
        <div className="flex justify-center align-center pb-10 font-mono">
         {currentHasMore &&
         <Button onClick={handleOnClick}
          title= {
            currentLoading ? (
            <div className="flex items-center gap-x-3">
             Loading <PulseLoader color="white" size={7}/>
              </div>
            ) : "Load More"
        }
           width="w-80"
           disabled={currentLoading}
            />
            }
         </div>
        </>
    );
}

export default TrendCards