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
      <div>
        <p>Step1: Wash your hands...</p>
        <p>Step2: Chop your {this.getRandomIngredient(recipeIngredients)}</p>
        <p>Step3: Fry your {this.getRandomIngredient(recipeIngredients)} </p>
        <p>Step4: Garnish with {this.getRandomIngredient(recipeIngredients)}</p>
        <p>
          Step5: Serve with a side of{" "}
          {this.getRandomIngredient(recipeIngredients)}
        </p>
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
