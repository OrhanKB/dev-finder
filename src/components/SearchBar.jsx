import { useState, useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useSearch } from '../hooks/useSearch';
import { useDebounce } from '../hooks/useDebounce';
import { useSearchId } from '../hooks/useSearchId';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  
  const { searchResults, loading, error, search, clearResults } = useSearch();
  const { handleClick } = useSearchId();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    } else {
      clearResults();
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length > 0);
  };

  const handleInputFocus = () => {
    if (query.length > 0) {
      setIsOpen(true);
    }
  }; 

  const handleSelect = (item, type) => {
    setQuery('');
    setIsOpen(false);
    
    const username = type === 'repository' ? `${item.owner.login}/${item.name}` : item.login;
    handleClick(username, item.id, item.__typename);
  }; 
  

  return (
    <div ref={searchRef} className="relative py-2 px-4 mx-4">
      <form>
        <FaSearch className="absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer transition duration-250 ease hover:scale-150 text-gray-600"/>
        <input 
          className="btns w-full max-w-md min-w-0 md:min-w-80 lg:min-w-96 pl-6 bg-gray-400 mx-3 py-1 px-2 border-2 outline-none text-gray-800 placeholder-gray-600"
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Search developers or repos..."
        />
      </form>

      {isOpen && (
        <SearchResults
          results={searchResults}
          loading={loading}
          error={error}
          query={query}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default SearchBar;
