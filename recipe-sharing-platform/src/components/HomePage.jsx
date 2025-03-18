import React, { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 bg-gray-400 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe List</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>

            {/* Image Wrapper to Ensure Proper Sizing */}
            <div>
              <img
                  className="min-w-25 min-h-24 rounded-md "
                src={recipe.image}
                alt={recipe.title}
              />
            </div>

            <p className="text-gray-600 mt-1">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
