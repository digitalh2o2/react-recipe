import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import api from "../utils/api";

class Home extends React.Component {
  state = {
    searchTerm: "",
    recipes: ""
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

  render() {
    console.log("search term is: ", this.state.searchTerm);
    return (
      <section>
        <div className="container has-text-centered">
          <h1 className="title">Find A Recipe</h1>
          <div className="center-elements">
            <Search onChange={this.onSearch} onSubmit={this.handleSearch} />
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
