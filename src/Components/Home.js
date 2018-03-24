import React from "react";
import Search from "./Search";

class Home extends React.Component {
  state = {
    searchTerm: ""
  };

  onSearch = e => {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  };

  onSubmit = e => {
    const { searchTerm } = this.state;
    console.log("i was submitted", searchTerm);
    e.target.value = "";
    console.log(e.target.value);
    e.preventDefault();
  };

  render() {
    console.log("search term is: ", this.state.searchTerm);
    return (
      <div>
        <p>Home</p>
        <Search onChange={this.onSearch} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Home;
