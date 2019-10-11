import React from "react";

function IngredientsList(props) {
  return (
    <ul id="list">
      {props.ingredients.map((ingredient, i) => {
        return <li key={i}>{ingredient}</li>;
      })}
    </ul>
  );
}

export default IngredientsList;
