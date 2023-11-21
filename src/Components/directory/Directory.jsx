import React from 'react'
import Directory_item from '../directoryi_tem/Directory_item'
 import "../directory/Directory.scss"
const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
    {categories.map((category)=>(
     <Directory_item key={category.id} category={category}/>
    ))}
  
  </div>
  )
}

export default Directory