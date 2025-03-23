import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    image: '',
    ingredients: '',
    instructions: '',
    summary: ''
  });

  // Validation Function
  const validateRecipe = () => {
    if (!recipe.title) return alert('Please enter a title');
    if (!recipe.image) return alert('Please enter an image URL');
    if (!recipe.ingredients) return alert('Please enter ingredients');
    if (!recipe.instructions) return alert('Please enter instructions');
    if (!recipe.summary) return alert('Please enter a summary');
    return true;
  };

  // Handle Input Change
  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateRecipe()) return;
    console.log(recipe); // Replace this with API call or state update
    alert('Recipe added successfully!');
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10  bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
      
      <form onSubmit={handleSubmit} className="space-y-1">
        {/* Recipe Title */}
        <label className="block">
          Recipe Title:
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="What do you want to cook?"
            className="w-full p-2 border rounded-md"
          />
        </label>

        {/* Recipe Image */}
        <label className="block">
          Recipe Image URL:
          <input
            type="text"
            name="image"
            value={recipe.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full p-2 border rounded-md"
          />
        </label>

        {/* Ingredients */}
        <label className="block">
          Ingredients:
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Enter ingredients, separated by commas"
            className="w-full p-2 border rounded-md"
          />
        </label>

        {/* Instructions */}
        <label className="block">
         Steps:
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Enter step-by-step instructions"
            className="w-full p-2 border rounded-md"
          />
        </label>

        {/* Summary */}
        <label className="block">
          Summary:
          <textarea
            name="summary"
            value={recipe.summary}
            onChange={handleChange}
            placeholder="Enter a short summary of the recipe"
            className="w-full p-2 border rounded-md"
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-gray-500 text-white rounded-md hover:bg-blue-600 transition">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
