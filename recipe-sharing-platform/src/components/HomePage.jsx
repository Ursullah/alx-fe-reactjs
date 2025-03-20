import React, { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 bg-gray-400 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Recipe List</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:grid-cols-1">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105"
          >
            {/* Recipe Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{recipe.title}</h2>

            {/* Image */}
            <div className="flex justify-center">
              <img 
                className="h-40 w-40 object-cover rounded-lg" 
                src={recipe.image} 
                alt={recipe.title} 
              />
            </div>

            {/* Summary */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
