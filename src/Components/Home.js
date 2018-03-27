import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import CheckBoxes from "./CheckBoxes";
import api from "../utils/api";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      recipes: "",
      filters: []
    };

    this.isChecked = this.isChecked.bind(this);
  }

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

    api
      .getRecipesWithFilter(searchTerm, filters)
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

  isChecked() {
    // we'll grab all the checkboxes
    let inputs = document.getElementsByClassName("checkboxes");
    // where the options will be stored
    let uniqueFilters = [];
    // loop through the checkboxes and see if they're checked. if so
    // we'll push them to the filters array.
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        uniqueFilters.push(inputs[i].value);
      }
    }
    // update state with filtered options
    this.setState({
      filters: uniqueFilters
    });
  }

  render() {
    return (
      <section>
        <div className="container has-text-centered">
          <h1 className="title" style={{ color: "white" }}>
            Find A Recipe <i className="fas fa-utensils" />
          </h1>
          <div className="center-elements">
            <Search onChange={this.onSearch} onSubmit={this.handleSearch} />
          </div>

          <div className="container">
            <CheckBoxes onClick={this.isChecked} />
            <button
              className="button is-danger"
              style={{ marginBottom: "20px" }}
              onClick={this.searchWithFilter}
            >
              Search With Filters
            </button>
          </div>
        </div>
        {this.state.recipes === "" ? (
          <div className="container has-text-centered is-size-5">
            <p style={{ color: "white" }}>Search For Some Nom Noms..</p>
          </div>
        ) : (
          <Recipes recipes={this.state.recipes} />
        )}
      </section>
    );
  }
}

export default Home;
