import React from "react";

function IngredientsList(props) {
  console.log(props);
  return (
    <ul>
      {props.ingredients.map((ingredient, i) => {
        return <li key={i}>{ingredient}</li>;
      })}
    </ul>
  );
}

export default IngredientsList;
