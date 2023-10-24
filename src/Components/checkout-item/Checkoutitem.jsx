import React from "react";
import { useContext } from "react";
import { Cartcontext } from "../../contex/Cart.context";
import "./checkoutitem.styles.scss"
const Checkoutitem = ({ cartitem }) => {
  const { name, imageUrl, price, quantity } = cartitem ;
  const {clearcart,additemtocart, removeitemfromcart} = useContext(Cartcontext)
  const clearhandler=()=>clearcart(cartitem)
  const additemhandler = ()=>additemtocart(cartitem)
  const removeitemhandler = ()=> removeitemfromcart(cartitem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}  />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={removeitemhandler}>
        &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={additemhandler } >
        &#10095;
        </button>
        </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearhandler}>&#10005;</div>
    </div>
  );
};

export default Checkoutitem;
