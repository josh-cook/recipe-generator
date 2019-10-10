import React from "react";

function RecipeButton(props) {
  return <button onClick={props.recipeButtonFn}>Generate recipe</button>;
}

export default RecipeButton;
