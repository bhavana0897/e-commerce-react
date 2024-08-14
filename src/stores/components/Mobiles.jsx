import React from 'react'
import {mobileData} from '../data/mobiles.js'
import { Link } from 'react-router-dom'

 const Mobiles = () => {

    let FirstItems = mobileData.slice(0,5)

  return (
  <>
  <h2> Mobiles</h2>
  <div className = 'proSection'> {
    
    FirstItems.map((item)=>{
        return (
          <Link to={`/mobile/${item.id}`}>
        <div  className = 'imgBox'>
            <img className = 'proImage'  src={item.image}/>
            
        </div>
        </Link>)
    })


}
  </div></>  )
   
}

export default Mobiles

