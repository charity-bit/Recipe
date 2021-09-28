import React from 'react';
import "./RecipeContainer.css"

export default function Recipe({recipe}) {
  return (
   // recipe["recipe"]["image"].match(/\.(jpeg | jpg | png)$/) //test for image extensions
    //!= null && (   
    <div className="recipe-cont">
    <img className="recipe-cont-image" src= {recipe["recipe"]["image"]} alt="recipe" />
    <p className="recipe-cont-title">{recipe["recipe"]["label"]}</p>
  
  </div>
//)

  );
}
