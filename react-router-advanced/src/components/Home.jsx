import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext"

function Home() { 
    const { isAuthenticated, login, logout} = useAuth();

  return (
    <div>
      <h1>Welcome to Our Website</h1>

      {isAuthenticated ? (
        <>

        <p>You're logged in.</p>
        <button onClick={logout}>Logout</button>

        </>
      ) : (
        <>

      <p>You need to log in to access profile page.</p>
      <button onClick={login}>Login</button>

      </>
      )}

      <nav>
        <ul>
          {isAuthenticated && <li><Link to="/profile">Go to Profile</Link></li>}
          <li><Link to="/blog/1">Read Blog Post 1</Link></li>
          <li><Link to="/blog/react-router">Read Blog Post: React Router</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
