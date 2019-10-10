import React, { Component } from "react";

class Recipe extends Component {
  state = {
    // ingredients: [...this.props.ingredients]
  };

  render() {
    return this.generateRandomRecipe();
  }

  generateRandomRecipe = () => {
    const recipeIngredients = [...this.props.ingredients];
    return (
      <div id="recipe">
        <ol type="I">
          <li>Wash your hands...</li>
          <li>Chop your {this.getRandomIngredient(recipeIngredients)}</li>
          <li>Fry your {this.getRandomIngredient(recipeIngredients)} </li>
          <li>Garnish with {this.getRandomIngredient(recipeIngredients)}</li>
          <li>
            Serve with a side of {this.getRandomIngredient(recipeIngredients)}
          </li>
        </ol>
      </div>
    );
  };

  getRandomIngredient = recipeIngredients => {
    const ingredientInd = Math.floor(Math.random() * recipeIngredients.length);
    const ingredientToReturn = recipeIngredients[ingredientInd];
    recipeIngredients.splice(ingredientInd, 1);
    return ingredientToReturn;
  };
}

export default Recipe;
