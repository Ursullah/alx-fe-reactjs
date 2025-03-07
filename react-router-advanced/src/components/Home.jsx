import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>Explore different sections using the links below:</p>
      
      <nav>
        <ul>
          <li><Link to="/profile">Go to Profile</Link></li>
          <li><Link to="/blog/1">Read Blog Post 1</Link></li>
          <li><Link to="/blog/react-router">Read Blog Post: React Router</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
