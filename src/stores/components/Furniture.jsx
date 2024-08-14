import React from 'react'
import {furnitureData} from '../data/furniture'
import { Link } from 'react-router-dom';
const Furniture = () => {
  let FirstFive = furnitureData.slice(2,7);
  return (
    <> <h2> Furniture</h2>
    <div className = 'proSection'>
    {
       FirstFive.map((items) => {
         return (
<Link to={`/furniture/${items.id}`}>
       <div className = 'imgBox'> 
       <img className = 'proImage' src={items.image}/>
       </div> 
     </Link>  
      )} )
      }
    </div></>)
}

export default Furniture;