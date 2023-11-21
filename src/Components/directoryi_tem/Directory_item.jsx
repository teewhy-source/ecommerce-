import React from "react";
import "../directoryi_tem/directory.styles.scss";
const Directory_item = ({ category }) => {
    const {imageUrl,title}=category
  return (
    <div  className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default Directory_item;
