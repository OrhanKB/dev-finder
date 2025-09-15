import NumberAbbreviate from "number-abbreviate";
import { Symbols } from "../assets/symbols";
import { format, formatDistanceToNow } from "date-fns";
import GithubColors from "github-colors"

function RepositoryCardDetail({item}) {
  const indexOfLetter = item.node.createdAt.split("").indexOf("T");
  const createDate =  item.node.createdAt.split("").splice(0, indexOfLetter).join("");
  const updateDate = item.node.updatedAt;

  const totalSize = item.node.languages.totalSize;

  return (
    <div className=" mt-5 bg-white justify-self-center border-4 shadow-xl font-mono p-6 w-320 h-auto flex flex-col">
      
      {/* Header with Close Button */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={item.node.owner.avatarUrl}
            alt="owner-avatar"
            className="w-30 h-30 border-4"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{item.node.name}</h2>
            <p className="text-2xl text-gray-500">@{item.node.owner.login}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 text-xl">
          ✕
        </button>
      </div>

      {/* Main Content - Horizontal Layout */}
      <div className="flex gap-6">
        
        {/* Left Column */}
        <div className="flex-1">
          {/* Description */}
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            {item.node.description}
          </p>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-yellow-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-yellow-700">
                {Symbols.star} {NumberAbbreviate(item.node.stargazerCount, 0)}
              </div>
              <div className="text-sm text-gray-500">Stars</div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-blue-700">
                {Symbols.fork} {NumberAbbreviate(item.node.forkCount, 0)}
              </div>
              <div className="text-sm text-gray-500">Forks</div>
            </div>
            
            <div className="bg-green-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-green-700">
                {item.node.issues.totalCount}
              </div>
              <div className="text-sm text-gray-500">Issues</div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded text-center">
              <div className="text-xl font-bold text-purple-700">
                  {item.node.watchers.totalCount}                
              </div>
              <div className="text-sm text-gray-500">Watchers</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 p-3 rounded text-md font-bold text-gray-600 space-y-1">
            <div>{Symbols.calendar} Created: {format(new Date (createDate), "dd MMMM, yyyy")}</div>
            <div>{Symbols.update} Updated: {formatDistanceToNow(updateDate)}</div>
            <div>{Symbols.license} License: {item.node.licenseInfo.name || "No license"}</div>
            <div> {Symbols.size} Size: {(item.node.diskUsage / 1024).toFixed(1)} MB</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          {/* Languages */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-1">

              {
              item.node.languages.edges.map(itemLang => {
              
              const percentage =  ((itemLang.size / totalSize) * 100).toFixed(1)
              const langColors = GithubColors.get(itemLang.node.name).color;

              console.log("itemlang:", itemLang)
            if(percentage > 1) {
              return(
              <span key={item.node.name} style={{backgroundColor: langColors}} className="bg-gray-100 text-gray-200 px-2 py-1 rounded text-sm">
                {itemLang.node.name} ({percentage}%)
              </span>
              ); 
              } 
              }) 
              }
            </div>
          </div>

          {/* Contributors */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Top Contributors</h3>
            <div className="flex gap-2">
              <img
                src="https://avatars.githubusercontent.com/u/11111111?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="johnsmith"
              />
              <img
                src="https://avatars.githubusercontent.com/u/22222222?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="maryjane"
              />
              <img
                src="https://avatars.githubusercontent.com/u/33333333?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="alexdoe"
              />
              <img
                src="https://avatars.githubusercontent.com/u/44444444?v=4"
                alt="contributor"
                className="w-10 h-10 rounded-full border"
                title="sarahwilson"
              />
            </div>
          </div>

          {/* Topics */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Topics</h3>
            <div className="flex flex-wrap gap-1">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                react
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                javascript
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                nodejs
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                web-app
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Full Width at Bottom */}
      <div className="flex gap-2 mt-4">
        <a
          href="#"
          className="flex-1 bg-black text-white text-center py-2 rounded text-sm hover:bg-gray-800 transition-colors"
        >
          View Repository
        </a>
        <a
          href="#"
          className="flex-1 bg-blue-500 text-white text-center py-2 rounded text-sm hover:bg-blue-600 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default RepositoryCardDetail;