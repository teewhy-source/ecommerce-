import React from 'react'
import Directory from '../../directory/Directory'
import { Outlet } from 'react-router-dom'
const Home = () => {
  const categories =[{
    id:1,
    title:"hats",
    imageUrl:"../src/images/hats.jpeg",
  },
  {
    id:2,
    title:"jackets",
    imageUrl: "../src/images/jacket.jpg",
  },
  {
    id:3,
    title:"sneakers",
    imageUrl: "../src/images/sneakers.webp",
  }, 
  {
    id:4,
    title:"womens",
    imageUrl: "../src/images/womensclothe.webp",
  },
  {
    id:5,
    title:"mens",
    imageUrl:"../src/images/men.jpg",
  }]
  return (
    <div>
      {/* <Outlet/> */}
      <Directory categories={categories}/>
    </div>
  )
}
export default Home;