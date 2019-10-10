import React, { PureComponent } from "react";
import "./App.css";
import Recipe from "./Components/Recipe";

class App extends PureComponent {
  state = {
    baseIngredients: ["olive oil", "salt", "pepper", "onions"],
    ingredients: [
      "chicken",
      "potatoes",
      "rice",
      "lamb",
      "brocolli",
      "turmeric",
      "cumin",
      "coriander"
    ]
  };

  render = () => {
    return (
      <div>
        <h1>Recipe generator</h1>
        <Recipe />
      </div>
    );
  };
}

export default App;
