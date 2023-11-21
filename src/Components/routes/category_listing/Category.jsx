import React from "react";
import { useParams } from "react-router-dom";
import Productcard from "../../productcard/Productcard";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../../contex/Categories.context";
import "./category_listing.styles.scss";

const Category = () => {
  const { category } = useParams();
  const {categoriesmap}= useContext(CategoriesContext)
  const [products, setproducts]=useState(categoriesmap[category])

  useEffect(()=>{
    setproducts(categoriesmap[category])
  },[category,categoriesmap])

  return(
    <div className="category-container">
        {products && 
            products.map((product)=>
            <Productcard key={product.id} product={product}/>)
        }
    </div>
  )
  
};

export default Category;
