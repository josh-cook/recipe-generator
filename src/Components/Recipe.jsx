import React, { Component } from "react";

class Recipe extends Component {
  render() {
    return (
      <div id="recipe">
        <p id="recipeTitle">
          <a href={this.props.recipes[0].href}>{this.props.recipes[0].title}</a>
        </p>
        <img id="recipeImage" src={this.props.recipes[0].thumbnail} />
      </div>
    );
  }
}

export default Recipe;
