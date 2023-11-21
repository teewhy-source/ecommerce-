import { Route,Routes } from "react-router-dom";
import "./Shop.styles.scss";
import Categories_Preview from "../categories-preview/categories_Preview"
import Category from "../category_listing/Category";
const Shop = () => {
 
  return (
   <Routes>
    <Route index element={<Categories_Preview/>}/>
    <Route path=":category" element={<Category/>}/>
   </Routes>
  );
};

export default Shop;
