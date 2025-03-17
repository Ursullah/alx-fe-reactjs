import React from 'react'
import { useState, useEffect } from 'react'
import data from "../data.json";


const HomePage = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect(() => { 
        setRecipes(data);},
        []);
    //     fetch('../data.json')
    //     .then(response =>{
    //         if(!response.ok){
    //             throw new Error ('Nework response was not ok')
    //         }
    //         return response.json();
    //     })
    //     .then (data=>setRecipes(data))
    //     .catch(error=>console.error('Fetch error:', error));
    // }, [])
  return (
    <div>
       <h1>Recipe List</h1>
       <div>
        {recipes.map((recipe)=>(
            <div key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.summary}</p>

            </div>
        ))}
       </div>
    </div>
  )
};

export default HomePage
