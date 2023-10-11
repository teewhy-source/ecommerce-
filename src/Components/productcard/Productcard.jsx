import React from 'react'
import Button from '../buttons/Button'
import "../productcard/product.styles.scss"

const Productcard = ({product}) => {
    const {name,price,imageUrl}=product
  return (
    <div className='ct'>
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <h1 className='price'>price #{price}</h1>
        </div>
        <Button buttonType="inverted">add to cart</Button>
    </div>
    </div>
  )
}

export default Productcard