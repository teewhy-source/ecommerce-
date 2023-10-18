import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../../contex/Cart.context'
import Button from "../buttons/Button"
import Cartitem from '../cart-item/Cartitem'
import "./cartdropdown.styles.scss"


const Cartdropdown = () => {
  const { cartitems } = useContext(Cartcontext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartitems.length ? (
          cartitems.map((item) => <Cartitem key={item.id} cartitem={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button>PLS CHECKOUT</Button>
    </div>
  );
};

export default Cartdropdown
