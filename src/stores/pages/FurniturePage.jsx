import React from 'react'
import {furnitureData} from '../data/furniture'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const FurniturePage = () => {

  const[selectedProduct, setSelectedProduct]=useState([])
  const companyHandler = (comps) => {
    if(selectedProduct.includes(comps))
    {
      setSelectedProduct(selectedProduct.filter((comp)=>comp!==comps))
    }
    else {
          setSelectedProduct([...selectedProduct,comps])
    }
  }

  const filteredData = selectedProduct.length==0?furnitureData:furnitureData.filter((items)=>selectedProduct.includes(items.brand))


  return (
    <>
    <Navbar/>
 <div className="pro-selected">
      {
        furnitureData.map((items)=>{
          return(
          <div>
            <label>
              <input type="checkbox"  value={selectedProduct.includes(items.brand)} 
              onChange={()=>companyHandler(items.brand)}/>
              {items.brand}
            </label>
            </div> )
         })
      }
    </div>

    <div className="prod">

      {
filteredData.map((items)=>{return(
<div className="products">
  <Link to={`/furniture/${items.id}`}>
  <img className="prodImg" src={items.image}></img>
 <div className="category">{items.company}{items.model}</div>
 </Link>
</div>)}) 
      }
    </div>
    </>
  )
}

export default FurniturePage