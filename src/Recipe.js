import React from "react";



function Recipe({recipe,deleteRecipe}){




      
const handleDelete = () => {
    deleteRecipe(recipe.name);
  };





    return (
 
          <tr>
            <td><p style={{width:"10%"}}>{recipe.name}</p></td>
            <td><p style={{width:"10%"}}>{recipe.cuisine}</p></td>
            <td><img style={{ objectFit: 'scale-down', width:'100%',height:'100%'}} src={recipe.photo} alt={recipe.name} /></td>
            <td className="content_td" style={{width:'30%'}}><p>{recipe.ingredients}</p></td>
            <td className="content_td" style={{width:'30%'}}><p>{recipe.preparation}</p></td>
            <td><button name="delete"  onClick={handleDelete}>Delete</button></td>
        </tr>
      )
}


export default Recipe;