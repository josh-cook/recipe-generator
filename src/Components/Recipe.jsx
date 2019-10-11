import React, { Component } from "react";
import { tsMethodSignature } from "@babel/types";

class Recipe extends Component {
  render() {
    return (
      <div id="recipe">
        <p id="recipeTitle">
          <a href={this.props.recipes[this.props.recipeInd].href}>
            {this.props.recipes[this.props.recipeInd].title}
          </a>
        </p>
        <img
          id="recipeImage"
          src={this.props.recipes[this.props.recipeInd].thumbnail}
        />
      </div>
    );
  }
}

export default Recipe;
