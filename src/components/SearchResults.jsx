import SearchResultItem from './SearchResultItem';
import { Symbols } from '../assets/symbols';

const SearchResults = ({ results, loading, error, query, onSelect }) => {
  const { users, repositories } = results;
  
  const easterEggProfile = {
    id: "U_kgDOBzujhQ",
    login: "OrhanKB",
    name: "Orhan",
    avatarUrl: "https://avatars.githubusercontent.com/u/121348997?v=4",
    url: "https://github.com/OrhanKB",
    __typename: "User",
    isEasterEgg: true
  };
  
  const displayUsers = query.trim() && users.length > 0 ? [easterEggProfile, ...users] : users;
  
  const hasResults = displayUsers.length > 0 || repositories.length > 0;

  if (loading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border-4 shadow-xl z-50 font-mono overflow-x-hidden">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
            <span className="ml-2 text-gray-800">Searching...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border-4 shadow-xl z-50 font-mono overflow-x-hidden">
        <div className="p-4 text-red-600">
          <div className="flex items-center">
            <span className="mr-2">{Symbols.warning}</span>
            Search failed. Please try again.
          </div>
        </div>
      </div>
    );
  }

  if (!hasResults && query.trim()) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border-4 shadow-xl z-50 font-mono overflow-x-hidden">
        <div className="p-4 text-gray-600 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">{Symbols.google}</span>
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-1">Try searching for something else</p>
          </div>
        </div>
      </div>
    );
  }

  if (!hasResults) return null;

  return (
    <div className="absolute top-full left-0 right-0  mt-1 bg-white border-4 shadow-xl max-h-96 overflow-y-auto overflow-x-hidden z-50 font-mono custom-scrollbar">
      {displayUsers.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-gray-200 border-b-2 border-gray-300 font-bold text-gray-800">
            {Symbols.user} Developers ({displayUsers.length})
          </div>
          {displayUsers.map(user => (
            <SearchResultItem
              key={user.id}
              item={user}
              type="user"
              onSelect={onSelect}
            />
          ))}
        </div>
      )}

      {repositories.length > 0 && (
        <div>
          <div className="px-4 py-2 bg-gray-200 border-b-2 border-gray-300 font-bold text-gray-800">
            {Symbols.repo} Repositories ({repositories.length})
          </div>
          {repositories.map(repo => (
            <SearchResultItem
              key={repo.id}
              item={repo}
              type="repository"
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
