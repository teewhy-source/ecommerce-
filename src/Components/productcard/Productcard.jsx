import React from "react";
import Button from "../buttons/Button";
import { Cartcontext } from "../../contex/Cart.context";
import "../productcard/product.styles.scss";
import { useContext } from "react";
const Productcard = ({ product }) => {
  const { name, price, imageUrl } = product;
  console.log(product);
  const { additemtocart } = useContext(Cartcontext);

  const addproducttocart = () => additemtocart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`Product: ${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">Price: ${price}</span> 
      </div>
      <Button buttonType="inverted" onClick={addproducttocart}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default Productcard;
