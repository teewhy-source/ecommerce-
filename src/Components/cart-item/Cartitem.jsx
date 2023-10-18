import React from 'react';
import "./cart-item.styles.scss"
const Cartitem = ({ cartitem }) => {
  const { name, quantity,price,imageUrl } = cartitem;
  console.log(cartitem);

  
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default Cartitem;
