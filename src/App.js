import React, { useState } from "react";
import "./App.css";

import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
import RecipeCreate from "./RecipeCreate";
function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.



  const handleClick = (value) => {
    setRecipes([...recipes, value]);
  };


  const deleteRecipe = (recipeToDelete) => {
    setRecipes((recipes) =>
     recipes.filter((recipe) =>recipe.name !== recipeToDelete)
    );
  };


  return (
    <div>
      <div className="App">
        <header>
          <h1 style={{ fontFamily: 'Playfair Display SC', textAlign: 'center', fontSize: '64px' }}>
            Delicious Food Recipes
          </h1>
        </header>
        <RecipeList recipeList={recipes} deleteRecipe={deleteRecipe} handleClick={handleClick} />
       

       
      </div>
    </div>
  );
  }
export default App;
