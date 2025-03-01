import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import Router
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails"; // ✅ Ensure this component exists
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} /> 
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
