import React, { Component } from "react";
import axios from "axios";
const jsonAdapter = require("axios-jsonp");

class Recipe extends Component {
  render() {
    // if (this.props.recipes.length === 0) {
    //   return this.getRecipeFromIngredients().then(() => {
    //     console.log(this.props.recipes);
    //     // return <p>{this.props.recipes[0].title}</p>;
    //   });
    // } else return <p></p>;

    if (this.props.recipes.length === 0) {
      this.getRecipeFromIngredients();
      return <p></p>;
    } else {
      console.log(this.props.recipes);
      return <p></p>;
    }
  }

  getRecipeFromIngredients = () => {
    let requestStr = "http://www.recipepuppy.com/api/?i=";
    const recipeIngredients = [...this.props.ingredients];
    recipeIngredients.forEach(ingredient => {
      requestStr += ingredient + ",";
    });
    requestStr = requestStr.substring(0, requestStr.length - 1);

    axios({
      url: requestStr,
      adapter: jsonAdapter
    }).then(res => {
      const recipes = res.data.results;
      this.props.storeRecipes(recipes);
    });
  };

  //   generateRandomRecipe = () => {
  //     const recipeIngredients = [...this.props.ingredients];
  //     return (
  //       <div id="recipe">
  //         <ol type="I">
  //           <li>Wash your hands...</li>
  //           <li>Chop your {this.getRandomIngredient(recipeIngredients)}</li>
  //           <li>Fry your {this.getRandomIngredient(recipeIngredients)} </li>
  //           <li>Garnish with {this.getRandomIngredient(recipeIngredients)}</li>
  //           <li>
  //             Serve with a side of {this.getRandomIngredient(recipeIngredients)}
  //           </li>
  //         </ol>
  //       </div>
  //     );
  //   };

  //   getRandomIngredient = recipeIngredients => {
  //     const ingredientInd = Math.floor(Math.random() * recipeIngredients.length);
  //     const ingredientToReturn = recipeIngredients[ingredientInd];
  //     recipeIngredients.splice(ingredientInd, 1);
  //     return ingredientToReturn;
  //   };
}

export default Recipe;
