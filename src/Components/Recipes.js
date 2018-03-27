import React from "react";

const Recipes = props => {
  const { recipes } = props;
  return (
    <section>
      <div className="columns is-mobile">
        <div className="column is-10 is-offset-1">
          {recipes.hits.length === 0 ? (
            <div className="container has-text-centered is-size-5">
              <h3 style={{ color: "white" }}>Couldn't find a recipe!</h3>
            </div>
          ) : (
            <div>
              {recipes.hits.map((item, index) => {
                let recipe = item.recipe;
                return (
                  <div key={index} className="box">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <a href={recipe.url} target="_blank">
                            <img src={recipe.image} alt={`${recipe.label}`} />
                          </a>
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <h3 className="title">
                            <a href={recipe.url} target="_blank">
                              {recipe.label}
                            </a>
                          </h3>
                          {/* Information on recipe start */}
                          <div className="tile is-ancestory">
                            <div className="tile is-parent is-4 is-vertical">
                              <div className="tile is-child">
                                <h3 className="subtitle">
                                  <i className="fas fa-info-circle" />{" "}
                                  Information
                                </h3>
                                <hr />
                                {recipe.totalTime === 0 ? (
                                  <p>Cook Time: Unavailable</p>
                                ) : (
                                  <p>Cook Time: {recipe.totalTime} minutes</p>
                                )}
                                <p>Calories: {Math.floor(recipe.calories)}</p>
                                <p>Servings: {recipe.yield}</p>

                                <h3>
                                  <i className="fas fa-heart" /> Health Facts
                                </h3>
                                <hr />
                                {recipe.healthLabels.map(label => {
                                  return <p key={label}>{label}</p>;
                                })}
                              </div>
                            </div>
                            {/* Recipe Information End */}

                            {/* Ingredients Column Start */}
                            <div className="tile is-parent">
                              <article className="tile is-child">
                                <div className="content">
                                  <h3 className="subtitle">
                                    <i className="fas fa-clipboard-list" />{" "}
                                    Ingredients
                                  </h3>
                                  <hr />
                                  <ul>
                                    {recipe.ingredientLines.map(
                                      (ingredient, index) => {
                                        return (
                                          <li key={index}>{ingredient}</li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              </article>
                            </div>
                            {/* Ingredients Column End */}
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
