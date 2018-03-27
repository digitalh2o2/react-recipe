import React from "react";

const CheckBoxes = props => {
  const { onClick } = props;

  return (
    <div className="filter-options">
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkboxes"
          onClick={onClick}
          value="balanced"
        />Balanced
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkboxes"
          onClick={onClick}
          value="high-protein"
        />High-Protein
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkboxes"
          onClick={onClick}
          value="low-fat"
        />Low-Fat
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          className="checkboxes"
          onClick={onClick}
          value="low-carb"
        />Low-Carb
      </label>
    </div>
  );
};

export default CheckBoxes;
