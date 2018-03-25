import React from "react";

class Recipes extends React.Component {
  render() {
    return (
      <div>
        {this.props.recipes.hits.map((item, index) => {
          let recipe = item.recipe;
          return (
            <div>
              <p>{recipe.label}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Recipes;
