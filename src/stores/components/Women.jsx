import React from 'react'
import { womanData } from '../data/woman';
import { Link } from 'react-router-dom';
const Women = () => {

    let FirstFivewomen = womanData.slice(0,5);
 
  return(
    <>
    <h2> Women's</h2>
      <div className='proSection'> {
        FirstFivewomen.map((items)=>{return(
          <Link to={`/womens/${items.id}`}>

        <div className='imgBox'>
          <img className = 'proImage' src={items.image}></img>
        </div>
        </Link>
        )
       
            })
      }
    
    </div></>)
  
}

export default Women