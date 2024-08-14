import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom';
const Men = () => {

    let FirstFivemen = menData.slice(0,5);
 
    return (
      <>
      <h2>Mens</h2>
      <div className='proSection'> {
        FirstFivemen.map((items)=>{return(
          <Link to={`/mens/${items.id}`}>
        <div className='imgBox'>
          <img className = 'proImage' src={items.image}></img>
        </div>
        </Link>  
      )})
      }
    
    </div> </>)
  
}

export default Men