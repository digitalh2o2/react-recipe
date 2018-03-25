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
      });
  };

  render() {
    console.log("search term is: ", this.state.searchTerm);
    return (
      <div>
        <p>Home</p>
        <Search onChange={this.onSearch} onSubmit={this.handleSearch} />
        {this.state.recipes === "" ? (
          <p>Loading..</p>
        ) : (
          <Recipes recipes={this.state.recipes} />
        )}
      </div>
    );
  }
}

export default Home;
