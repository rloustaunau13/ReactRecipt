import React from "react";
import Recipe from "./Recipe";
import RecipeCreate from "./RecipeCreate";
function RecipeList({recipeList,deleteRecipe,handleClick}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked



  return (
    <div className="recipe-list">
      <table>
        <thead>
        <tr>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Cuisine</th>
            <th style={{ width: "10%" }}>Photo</th>
            <th style={{ width: "30%" }}>Ingredients</th>
            <th style={{ width: "30%" }}>Preparation</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody >
        {recipeList.map((recipe, index) => (
  <Recipe key={index} recipe={recipe} deleteRecipe={deleteRecipe} />
))}
           <tr>
              <td colSpan={6} className="create-recipe-row">
              <RecipeCreate handleBtnClick={handleClick} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

}
  


    
export default RecipeList;
