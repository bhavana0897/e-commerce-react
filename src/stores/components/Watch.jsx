import React from 'react'
import { watchData } from '../data/watch';
import { Link } from 'react-router-dom';
const Watch = () => {

  let FirstFivewatch =  watchData.slice(0,5);
  
    return (
      <>
    <h2>Watch</h2>
      <div className='proSection'> {
        FirstFivewatch.map((items)=>{return(
          <Link to={`/watch/${items.id}`}>
        <div className='imgBox'>
          <img className = 'proImage' src={items.image}></img>
        </div>
        </Link>
       
        )})
      }
    
    </div>  
    </>)
  
}

export default Watch