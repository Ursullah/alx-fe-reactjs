import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const { filteredRecipes, searchTerm, deleteRecipe } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      {searchTerm && <p>Showing results for: <strong>{searchTerm}</strong></p>}
      
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} className="view-details">View Details</Link>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
