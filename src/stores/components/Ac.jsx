import React from 'react'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom';
const Ac = () => 
  {

    let FirstFiveItems = acData.slice(1,6);
 
    return ( <> 
    <h2> Air Conditioner</h2>
      <div className='proSection'> {
        FirstFiveItems.map((items)=>{return(
        <Link to={`/ac/${items.id}`}>
        <div className='imgBox'>
          <img className = 'proImage' src={items.image}></img>
        </div>
        </Link>
        )})
      }
    
    </div> </>)
 
}

export default Ac