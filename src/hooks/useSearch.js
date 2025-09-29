import { useState } from 'react';

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState({
    users: [],
    repositories: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUsers = async (query) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=5`,
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Users search failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    
    return data.items.map(user => ({
      id: user.node_id, 
      login: user.login,
      name: user.name,
      avatarUrl: user.avatar_url, 
      url: user.html_url,
      __typename: user.type === 'User' ? 'User' : 'Organization'
    }));
  };

  const searchRepositories = async (query) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}&per_page=5&sort=stars&order=desc`,
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Repositories search failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    
    return data.items.map(repo => ({
      id: repo.node_id, 
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stargazerCount: repo.stargazers_count, 
      owner: {
       login: repo.owner.login,
        avatarUrl: repo.owner.avatar_url 
      }, 
      primaryLanguage: repo.language ? {
        name: repo.language
      } : null,
      __typename: 'Repository'
    }));
  };

  const search = async (query) => {
    if (!query.trim()) {
      setSearchResults({ users: [], repositories: [] });
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const [users, repositories] = await Promise.all([
        searchUsers(query),
        searchRepositories(query)
      ]);

      setSearchResults({
        users: users.slice(0, 5),
        repositories: repositories.slice(0, 5)
      });
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message);
      setSearchResults({ users: [], repositories: [] });
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setSearchResults({ users: [], repositories: [] });
    setError(null);
  };

  return {
    searchResults,
    loading,
    error,
    search,
    clearResults
  };
};
