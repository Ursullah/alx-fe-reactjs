import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore"; // Ensure correct import

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <Link to="/add">Add Recipe</Link>
      {recipes.length === 0 ? <p>No recipes found!</p> : null}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
