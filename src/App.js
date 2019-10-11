import React, { PureComponent } from "react";
import axios from "axios";
import Recipe from "./Components/Recipe";
import IngredientsInput from "./Components/IngredientsInput";
import IngredientsList from "./Components/IngredientsList";
import RecipeButton from "./Components/RecipeButton";

const jsonAdapter = require("axios-jsonp");

class App extends PureComponent {
  state = {
    baseIngredients: [
      "olive oil",
      "salt",
      "pepper",
      "onions",
      "eggs",
      "vegetable oil",
      "bread",
      "water",
      "rice",
      "pasta",
      "flour",
      "eggs"
    ],
    ingredients: [],
    recipes: [],
    ingredientsChanged: true,
    recipeInd: null
  };

  submitIngredient = event => {
    if (event.key === "Enter") {
      const ingredientToAdd = event.target.value;
      this.setState(previousState => {
        return {
          ingredients: [...previousState.ingredients, ingredientToAdd],
          ingredientsChanged: true
        };
      });
      event.target.value = "";
    }
  };

  generateIngredientsList = () => {
    if (this.state.ingredients.length === 0)
      return [...this.state.baseIngredients];
    else return [...this.state.ingredients];
  };

  getRecipeFromIngredients = () => {
    let requestStr = "http://www.recipepuppy.com/api/?i=";
    const recipeIngredients = this.generateIngredientsList();
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
        return {
          recipes: listOfRecipes,
          ingredientsChanged: false,
          recipeInd: 0
        };
      });
    });
  };

  showNewRecipe = () => {
    if (this.state.ingredientsChanged) {
      this.getRecipeFromIngredients();
    } else {
      this.incrementRecipe();
    }
  };

  incrementRecipe = () => {
    if (this.state.recipeInd === this.state.recipes.length - 1) {
      this.setState(() => {
        return { recipeInd: 0 };
      });
    } else {
      this.setState(prevState => {
        return { recipeInd: prevState.recipeInd + 1 };
      });
    }
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
            recipeInd={this.state.recipeInd}
          />
        )}
        <IngredientsInput submit={this.submitIngredient} />
        <RecipeButton recipeButtonFn={this.showNewRecipe} />
      </div>
    );
  };
}

export default App;
