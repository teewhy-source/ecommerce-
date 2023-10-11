import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../../contex/Product';
import "./Shop.styles.scss"
import Productcard from '../../productcard/Productcard';
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
       <Productcard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
