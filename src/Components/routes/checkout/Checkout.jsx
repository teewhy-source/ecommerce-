import React, { useContext } from "react";
import "./Checkout.styles.scss";
import Checkoutitem from "../../checkout-item/Checkoutitem";
import { Cartcontext } from "../../../contex/Cart.context";
const Checkout = () => {
  const { cartitems,carttotal } =
    useContext(Cartcontext);
  console.log(cartitems);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

    
      {cartitems.map((cartitem) => (
        <Checkoutitem key={cartitem.id} cartitem={cartitem} />
      ))}

    
      <span className="total">TOTAL:${carttotal}</span>
    </div>
  );
};

export default Checkout;
