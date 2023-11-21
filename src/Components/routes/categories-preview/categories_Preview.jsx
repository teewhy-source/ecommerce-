import React from "react";
import { useContext,Fragment } from "react";
import { CategoriesContext } from "../../../contex/Categories.context";

import CategoryPreview from "../../category-preview/categorypreview";

const Categories_Preview = () => {
  const { categoriesmap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesmap).map((title) => {
        const products = categoriesmap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default Categories_Preview;
