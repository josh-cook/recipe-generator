import React, { Component } from "react";

class Recipe extends Component {
  render() {
    return (
      <div id="recipe">
        <p>{this.props.recipes[0].title}</p>
        <p>{this.props.recipes[0].href}</p>
        <img id="reciptImage" src={this.props.recipes[0].thumbnail} />
      </div>
    );
  }
}

export default Recipe;
