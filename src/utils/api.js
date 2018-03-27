const appId = "ebd47e61";
const appKey = "8dcc1b4227572b3fb0cc2fd14a87bb97";
module.exports = {
  getRecipe(searchTerm) {
    const response = fetch(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${appId}&app_key=${appKey}&from=0&to=10`,
      {
        method: "GET",
        headers: {
          Accept: "application/json'"
        }
      }
    );
    return response;
  },
  getRecipesWithFilter(searchTerm, filters) {
    console.log("search term is: ", searchTerm);
    console.log("filters are...", filters);
  }
};

//`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free
