import React from "react";

const Search = props => {
  const { onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          id="inputfield"
          type="text"
          onChange={onChange}
          placeholder="Enter Ingredients"
        />
      </div>
      <button onSubmit={onSubmit}>Search</button>
    </form>
  );
};

export default Search;
