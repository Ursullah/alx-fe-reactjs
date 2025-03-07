import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
        <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="profile/*" element={<Profile />} /> {/* Nested Profile Route */}
        <Route path="blog/:id" element={<BlogPost />} /> {/* Dynamic Route for Blog Posts */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
