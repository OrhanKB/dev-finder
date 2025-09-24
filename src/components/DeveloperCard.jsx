import abbreviate from "number-abbreviate"
import { Symbols } from "../assets/symbols.js"
import { useSearchId } from "../hooks/useSearchId.js";

function DeveloperCard({items}) {

    const {handleClick} = useSearchId();

    return(
        <>
          {items.map(item => {
            
      return <div className="ml-5 cursor-pointer bg-white border-4 hover:translate-x-1 font-mono
               shadow-md hover:shadow-xl transition-all p-5 w-full max-w-xs flex flex-col items-center text-center" key={item.id}
                onClick={() => handleClick(item.login, item.id, item.__typename)}
             >
              <img
                src={item.avatarUrl}
                alt={"avatar"}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">@{item.login}</p>

              <a
                href={item.url}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
                onClick={(e) => e.stopPropagation() }
              >
                View GitHub Profile
              </a>

               <div className={`${item.__typename === "Organization" ? "bg-gray-300" : "bg-blue-200"}
                text-blacka-800 text-xs font-semibold px-3  rounded-full`}>
                {item.__typename}
              </div>
  

              <div className="bg-gray-200  px-4 py-2 my-5  text-sm w-full">
                <p className="font-semibold text-gray-700">Top Repo:</p>
                <p className="text-gray-600 truncate">{item.repositories.nodes[0].name}</p>
                <div className="flex justify-center gap-4 mt-1 text-xs text-gray-500">
                  <span>{Symbols.star} {abbreviate(item.repositories.nodes[0].stargazerCount, 0)}</span>
                  <span>{Symbols.fork} {abbreviate(item.repositories.nodes[0].forkCount, 0)}</span>
                </div>
              </div>
            </div>
         
          })}
        
        </>
    );
}

export default DeveloperCard