import React from "react";

const Search = props => {
  const { onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            id="inputfield"
            className="input"
            type="text"
            onChange={onChange}
            placeholder="Enter Ingredients"
          />
        </div>

        <div className="control">
          <button className="button is-primary" onSubmit={onSubmit}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
