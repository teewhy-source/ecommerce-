import React, { Fragment } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../../contex/Categories.context";
import "./Shop.styles.scss";
import Productcard from "../../productcard/Productcard";


const Shop = () => {
  const { categoriesmap } = useContext(CategoriesContext); // Change "categoriesmap" to "categoriesMap"

  return (
    <Fragment>
      {Object.keys(categoriesmap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesmap[title].map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
