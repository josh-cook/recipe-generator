import React, { PureComponent } from "react";
import "./App.css";
import Recipe from "./Components/Recipe";
import IngredientsInput from "./Components/IngredientsInput";

class App extends PureComponent {
  state = {
    baseIngredients: ["olive oil", "salt", "pepper", "onions"],
    ingredients: []
  };

  submitIngredient = event => {
    if (event.key === "Enter") {
      const ingredientToAdd = event.target.value;
      this.setState(previousState => {
        return { ingredients: [...previousState.ingredients, ingredientToAdd] };
      });
    }
  };

  render = () => {
    return (
      <div>
        <h1>Recipe generator</h1>
        <Recipe
          ingredients={this.state.ingredients}
          baseIngredients={this.state.baseIngredients}
        />
        <IngredientsInput submit={this.submitIngredient} />
      </div>
    );
  };
}

export default App;
