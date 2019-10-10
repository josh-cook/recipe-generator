import React, { PureComponent } from "react";
import "./App.css";
import Recipe from "./Components/Recipe";
import IngredientsInput from "./Components/IngredientsInput";
import IngredientsList from "./Components/IngredientsList";
import RecipeButton from "./Components/RecipeButton";

class App extends PureComponent {
  state = {
    baseIngredients: ["olive oil", "salt", "pepper", "onions"],
    ingredients: [],
    recipesShown: 0
  };

  submitIngredient = event => {
    if (event.key === "Enter") {
      const ingredientToAdd = event.target.value;
      this.setState(previousState => {
        return { ingredients: [...previousState.ingredients, ingredientToAdd] };
      });
      event.target.value = "";
    }
  };

  showNewRecipe = () => {
    this.setState(prevState => {
      return { recipesShown: prevState.recipesShown + 1 };
    });
  };

  render = () => {
    return (
      <div>
        <h1>Recipe generator</h1>
        <IngredientsList ingredients={this.state.ingredients} />
        {this.state.recipesShown > 0 && (
          <Recipe
            ingredients={this.state.ingredients}
            baseIngredients={this.state.baseIngredients}
          />
        )}
        <IngredientsInput submit={this.submitIngredient} />
        <RecipeButton recipeButtonFn={this.showNewRecipe} />
      </div>
    );
  };
}

export default App;
