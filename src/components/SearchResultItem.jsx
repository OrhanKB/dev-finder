import abbreviate from "number-abbreviate";
import { Symbols } from "../assets/symbols.js";

const SearchResultItem = ({ item, type, onSelect }) => {
  const handleClick = () => {
    onSelect(item, type);
  };

  if (type === 'user') {
    return (
      <div
        onClick={handleClick}
        className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b-2 border-gray-200 last:border-b-0 transition-all hover:scale-105"
      >
        <div className="flex items-center">
          <img
            src={item.avatarUrl}
            alt={item.login}
            className="w-12 h-12 border-2 border-gray-500"
          />
          <div className="ml-3 flex-1 min-w-0">
            <div className="flex items-center">
              <h4 className="text-sm font-bold text-gray-800">{item.login}</h4>
              <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                item.__typename === "Organization" ? "bg-gray-300 text-black" : "bg-blue-200 text-black"
              }`}>
                {item.__typename}
              </span>
            </div>
            {item.name && (
              <p className="text-sm text-gray-600 truncate w-full">{item.name}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'repository') {
    return (
      <div
        onClick={handleClick}
        className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b-2 border-gray-200 last:border-b-0 transition-all hover:scale-105"
      >
        <div className="flex items-center">
          <img
            src={item.owner.avatarUrl}
            alt={item.owner.login}
            className="w-12 h-12 border-2 border-gray-500"
          />
          <div className="ml-3 flex-1 min-w-0">
            <div className="flex items-center">
              <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
              <div className="ml-2 flex items-center text-xs text-gray-600">
                {Symbols.star} {abbreviate(item.stargazerCount, 0)}
              </div>
            </div>
            <p className="text-xs text-gray-600">@{item.owner.login}</p>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1 truncate w-full">{item.description}</p>
            )}
            {item.primaryLanguage && (
              <div className="mt-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1">
                  {item.primaryLanguage.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SearchResultItem;
