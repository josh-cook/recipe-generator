import React from "react";

export default function IngredientsInput(props) {
  return (
    <div>
      <label id="inputLabel">
        Add a new ingredient
        <br />
        <input onKeyDown={props.submit}></input>
      </label>
    </div>
  );
}
