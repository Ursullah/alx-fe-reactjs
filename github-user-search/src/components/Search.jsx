import { useState } from "react";
import fetchGitHubUsers from "../services/githubService";

const fetchUserData = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    
    try {
      let query = username.trim();
      if (location.trim()) query += ` location:${location}`;
      if (minRepos.trim()) query += ` repos:>${minRepos}`;
      
      const results = await fetchGitHubUsers(query, page);
      
      if (results.length > 0) {
        setUsers(results);
      } else {
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
    try {
      let query = username.trim();
      if (location.trim()) query += ` location:${location}`;
      if (minRepos.trim()) query += ` repos:>${minRepos}`;
      
      const results = await fetchGitHubUsers(query, page + 1);
      setUsers((prevUsers) => [...prevUsers, ...results]);
    } catch (err) {
      setError("Failed to load more users.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
          Search
        </button>
      </form>
      
      <div className="p-4">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {users.length > 0 && (
          <div>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="p-4 border-b flex items-center gap-4">
                  <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                  <div>
                    <h2 className="text-lg font-bold">{user.login}</h2>
                    <p>{user.location || "Location unknown"}</p>
                    <p>Repos: {user.public_repos || "N/A"}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      View Profile
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={handleLoadMore} className="mt-4 bg-green-500 text-white p-2 rounded w-full hover:bg-green-600">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default fetchUserData;
