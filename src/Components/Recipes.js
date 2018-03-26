import React from "react";
import Modal from "./Modal";

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }
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
                        <h3 className="title">
                          <a href={recipe.url} target="_blank">
                            {recipe.label}
                          </a>
                        </h3>
                        {/* Information on recipe start */}
                        <div className="tile is-ancestory">
                          <div className="tile is-parent">
                            <div className="tile is-child">
                              <h3 className="subtitle">Information</h3>
                              <hr />
                              {recipe.totalTime === 0 ? (
                                <p>Cook Time: Unavailable</p>
                              ) : (
                                <p>Cook Time: {recipe.totalTime} minutes</p>
                              )}
                              <p>Calories: {Math.floor(recipe.calories)}</p>
                              <p>Servings: {recipe.yield}</p>

                              <h3>Health Facts</h3>
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
                          {/* Ingredients Column End */}
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
