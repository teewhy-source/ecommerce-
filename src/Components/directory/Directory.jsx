import React from 'react'
import Categoryitem from '../Category-item/Categoryitem'
 import "../directory/Directory.scss"
const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
    {categories.map((category)=>(
     <Categoryitem key={category.id} category={category}/>
    ))}
  
  </div>
  )
}

export default Directory