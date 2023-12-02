import React from "react";


function RecipeList({recipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
             <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
             <th>Actions</th>
          </tr>
        </thead>
        <tbody>npm install
          {recipes.map((item) => (
            <tr>
              <td component="th" scope="row">
                {item.name}
                 </td>
              <td>{item.cuisine}</td>
              <td>{item.photo}</td>
               <td className="content_td"><p>{(item.ingredients)}</p></td>
              <td className="content_td"><p>{(item.preparation)}</p></td>
              <td> <button name="delete">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

    
export default RecipeList;
