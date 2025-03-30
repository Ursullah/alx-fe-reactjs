import axios from "axios";

const API_URL = "https://api.github.com/search/users?q";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const fetchGitHubUsers = async (username, location = "", minRepos = "", page = 1) => {
  try {
    let query = username.trim();
    if (location.trim()) query += ` location:${location}`;
    if (minRepos.trim()) query += ` repos:>${minRepos}`;
    
    const response = await axios.get(API_URL, {
      params: { q: query, page },
      headers: { Authorization: `token ${API_KEY}` }
    });
    
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};

export default fetchGitHubUsers;
