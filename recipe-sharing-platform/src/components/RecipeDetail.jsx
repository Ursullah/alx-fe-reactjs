import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data.json'

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() =>{
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
    }, [id]);

    if (!recipe) {
        return <div className='text-center text-red-500 mt-10'>Recipe not found</div>
    }

  return (
    <div className="p-6 bg-gray-400 min-h-screen">
        <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.title}</h2>
            {/* Recipe image */}
            <img 
                className="h-40 w-40 object-cover rounded-lg" 
                src={recipe.image} 
                alt={recipe.title} 
            />
            {/* Ingredients */}
            <h2 className='text-xl font-semibold mt-4 mb-2'>Ingredient:</h2>
            <ul className='list-disc list-inside text-gray-700'>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            {/* Instructions */}
            <h2 className='text-xl font-semibold mt-6 mb-2'>Instructions:</h2>
            <p className='text-gray-600 leading-relaxed'>{recipe.instructions}</p>
            <p className="py-2 text-gray-600 transition">{recipe.summary}</p>

            <div className='mt-6 text-center'>
            <Link to="/" className="text-blue-500">Back to Home</Link>
            </div>

            </div>
    </div>
  )
}

export default RecipeDetail
