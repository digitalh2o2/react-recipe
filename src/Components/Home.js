import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import api from "../utils/api";

class Home extends React.Component {
  state = {
    searchTerm: "",
    recipes: "",
    filters: []
  };

  onSearch = e => {
    const searchTerm = e.target.value;

    this.setState({
      searchTerm
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    // in case api needs searchTerm to be separated by commas. As of now
    // working just fine without it.
    // searchTerm = searchTerm.split(/[ ,]+/);
    api
      .getRecipe(searchTerm)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipes: res
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  searchWithFilter = e => {
    const { searchTerm, filters } = this.state;

    api.getRecipesWithFilter(searchTerm, filters);
  };

  isChecked = e => {
    // we'll grab all the checkboxes
    let inputs = document.getElementsByClassName("checkboxes");
    // loop through the checkboxes and see if they're checked. if so
    // we'll concat them to the filters state array
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        this.setState({
          filters: this.state.filters.concat([inputs[i].value])
        });
      }
    }
  };

  render() {
    console.log("search term is: ", this.state.searchTerm);
    console.log("state is, ", this.state.filters);
    return (
      <section>
        <div className="container has-text-centered">
          <h1 className="title">Find A Recipe</h1>
          <div className="center-elements">
            <Search onChange={this.onSearch} onSubmit={this.handleSearch} />
          </div>
          <div className="filter-options">
            <label className="checkbox">
              <input
                type="checkbox"
                className="checkboxes"
                onClick={this.isChecked}
                value="balanced"
              />Balanced
            </label>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                onClick={this.isChecked}
                value="high-protein"
              />High-Protein
            </label>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                onClick={this.isChecked}
                value="high-fiber"
              />High-Fiber
            </label>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                onClick={this.isChecked}
                value="low-fat"
              />Low-Fat
            </label>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                onClick={this.isChecked}
                value="low-carb"
              />Low-Carb
            </label>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                onClick={this.isChecked}
                value="low-sodium"
              />Low-Sodium
            </label>
            <button className="button is-info" onClick={this.searchWithFilter}>
              Search With Filters
            </button>
          </div>
        </div>
        {this.state.recipes === "" ? (
          <p>Search for some nom noms</p>
        ) : (
          <Recipes recipes={this.state.recipes} />
        )}
      </section>
    );
  }
}

export default Home;
