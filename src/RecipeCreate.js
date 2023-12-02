import React, { useState } from "react";

function RecipeCreate({handleBtnClick}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
   handleBtnClick(formData);
    setFormData({ ...initialFormState });
  };

  

  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  };
  

  const [formData, setFormData] = useState({ ...initialFormState });


  const handleChange = ({ target }) => {
    
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
     
  
      
      }



      
  return (
<form name="create"onSubmit={handleSubmit} >
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        style={{ width: "5%" }}
      />
      <input
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
        style={{ width: "10%", marginLeft:"80px" }}
      />
      <input
        name="photo"
        value={formData.photo}
        onChange={handleChange}
        placeholder="Photo"
        style={{ width: "6%", marginLeft:"30px"}}
      />
      <textarea
        onChange={handleChange}
        value={formData.ingredients}
        name="ingredients"
        placeholder="Ingredients"
        style={{ width: "20%", marginLeft:"68px" }}
      ></textarea>
      <textarea
        name="preparation"
        value={formData.preparation}
        onChange={handleChange}
        placeholder="Preparation"
        style={{ width: "20%", marginLeft:"160px" }}
      ></textarea>
      <button type="submit" style={{ width: "3.2%", marginLeft:"170px" }}>
        Create
      </button>
    </form>
);
}

export default RecipeCreate;
