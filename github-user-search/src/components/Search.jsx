import { useState } from "react";
import fetchGitHubUsers  from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    
    try {
      if (username.trim() || location.trim()) {
        const query = `${username} location:${location}`.trim();
        const results = await fetchGitHubUsers(query);
        
        if (results.length > 0) {
          setUser(results[0]); // Display first user from results
        } else {
          setError("Looks like we can't find the user.");
        }
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 p-4">
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>
      
      <div className="p-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {user && (
          <div className="border p-4 rounded shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <p>{user.location || "Location unknown"}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;