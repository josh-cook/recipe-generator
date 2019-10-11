import React, { PureComponent } from "react";
import axios from "axios";
import Recipe from "./Components/Recipe";
import IngredientsInput from "./Components/IngredientsInput";
import IngredientsList from "./Components/IngredientsList";
import RecipeButton from "./Components/RecipeButton";

const jsonAdapter = require("axios-jsonp");

class App extends PureComponent {
  state = {
    baseIngredients: ["olive oil", "salt", "pepper", "onions"],
    ingredients: [],
    recipes: []
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

  getRecipeFromIngredients = () => {
    let requestStr = "http://www.recipepuppy.com/api/?i=";
    const recipeIngredients = [...this.state.ingredients];
    recipeIngredients.forEach(ingredient => {
      requestStr += ingredient + ",";
    });
    requestStr = requestStr.substring(0, requestStr.length - 1);

    axios({
      url: requestStr,
      adapter: jsonAdapter
    }).then(res => {
      const listOfRecipes = res.data.results;
      this.setState(() => {
        return { recipes: listOfRecipes };
      });
    });
  };

  showNewRecipe = () => {
    this.getRecipeFromIngredients();
    this.setState(prevState => {
      return { recipesShown: prevState.recipesShown + 1 };
    });
  };

  render = () => {
    return (
      <div>
        <h1>Recipe generator</h1>
        <IngredientsList ingredients={this.state.ingredients} />
        {this.state.recipes.length > 0 && (
          <Recipe
            ingredients={this.state.ingredients}
            storeRecipes={this.storeRecipes}
            recipes={this.state.recipes}
          />
        )}
        <IngredientsInput submit={this.submitIngredient} />
        <RecipeButton recipeButtonFn={this.showNewRecipe} />
      </div>
    );
  };
}

export default App;
