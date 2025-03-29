const API_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${API_URL}/users/${username}`, {
      headers: { Authorization: `token ${API_KEY}` }
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
  }
};
