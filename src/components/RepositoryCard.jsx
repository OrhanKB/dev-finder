import abbreviate from "number-abbreviate"
import {formatDistanceToNow} from "date-fns"
import { Symbols } from "../assets/symbols.js";
import { useSearchId } from "../hooks/useSearchId.js";

function RepositoryCard({items}) {

  const {handleClick} = useSearchId();

  const calculateDate = (lastDate) => {
      const date = new Date(lastDate);
        const result = formatDistanceToNow(
          date
        );
      return result
  }

    return(
        <>
        {
          items.map(item => {
            
  return <div className="ml-5 cursor-pointer bg-white border-4
            hover:translate-x-1 shadow-md hover:shadow-xl font-mono
            transition-all p-5 w-full max-w-xs flex flex-col items-center text-center"
            key={item.id} onClick={() => handleClick(item.name, item.id)}
            >
  
              <img
                src={item.owner.avatarUrl}
                alt={"owner-avatar"}
                className="w-24 h-24  mb-4 border-2 border-gray-500"
              />
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500 mb-2">@{item.owner.login}</p>
      
              
              <p className="text-xs text-gray-600 mb-3 line-clamp-2 px-2">
                {item.description}
              </p>

              
              <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              { !item.primaryLanguage ? "No Code" : item.primaryLanguage.name}
              </div>
  
              
              <a
                href={item.url}
                target="_blank"
                className="text-blue-500 text-sm underline mb-3"
              >
                View Repository
              </a>
  
          
          <div className="bg-gray-200 px-4 py-2 text-sm w-full">
          <div className="flex justify-center gap-4 mb-1 text-xs text-gray-500">
              <span>{Symbols.star} {abbreviate(item.stargazerCount, 0)}</span>
              <span>{Symbols.fork} {abbreviate(item.forkCount, 0)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center">{`Updated ${calculateDate(item.updatedAt)} ago`}</p>
          </div>
        </div>
  
          })
        }
        </>
    );
}

export default RepositoryCard