const appId = "ebd47e61";
const appKey = "8dcc1b4227572b3fb0cc2fd14a87bb97";
module.exports = {
  getRecipe() {
    `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;
  }
};
