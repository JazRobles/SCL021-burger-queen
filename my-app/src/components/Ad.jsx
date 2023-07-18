import React from "react";
import "../components/ad.css";

const Add = ({ onClick }) => {
  return (
    <div>
      <button className="add" onClick={onClick}>
        <span className="transition"></span>
        <span className="gradient"></span>
        <span className="label">+Add</span>
      </button>
    </div>
  );
};

export default Add;

