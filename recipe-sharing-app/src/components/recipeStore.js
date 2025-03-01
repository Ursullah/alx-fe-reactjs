import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  //  Update the search term and immediately filter recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Ensure filtering happens instantly
  },

  //  Filter recipes dynamically whenever searchTerm updates
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },

  //  Add a new recipe and re-filter the list
  addRecipe: (newRecipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  //  Delete a recipe and re-filter the list
  deleteRecipe: (recipeId) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },

  //  Update a recipe and re-filter the list
  updateRecipe: (recipeId, updatedData) => {
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },
}));

export default useRecipeStore;

