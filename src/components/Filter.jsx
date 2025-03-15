import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        onChange={(e) => setFilterRating(Number(e.target.value))}
        min="1"
        max="10"
      />
    </div>
  );
};

export default Filter;
