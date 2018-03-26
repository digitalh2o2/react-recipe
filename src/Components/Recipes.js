import React from "react";

class Recipes extends React.Component {
  render() {
    return (
      <section>
        <div className="columns is-vcentered">
          <div className="column is-10 is-offset-1">
            {this.props.recipes.hits.map((item, index) => {
              let recipe = item.recipe;
              return (
                <div key={index} className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img src={recipe.image} alt={`${recipe.label}`} />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <h3>{recipe.label}</h3>
                        <div className="tile is-ancestory">
                          <div className="tile is-parent">
                            <div className="tile is-child">
                              <h3 className="subtitle">Information</h3>
                              <hr />
                              <p>Cook Time: {recipe.totalTime}</p>
                              <p>Calories: {Math.floor(recipe.calories)}</p>
                              <p>Servings: {recipe.yield}</p>
                            </div>
                          </div>

                          <div className="tile is-parent">
                            <article className="tile is-child">
                              <div className="content">
                                <h3 className="subtitle">Ingredients</h3>
                                <hr />
                                <ul>
                                  {recipe.ingredientLines.map(
                                    (ingredient, index) => {
                                      return <li key={index}>{ingredient}</li>;
                                    }
                                  )}
                                </ul>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Recipes;
