import React from 'react'
import {menData} from '../data/men'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MensPage = () => {
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

  const filteredData = selectedProduct.length==0?menData:menData.filter((items)=>selectedProduct.includes(items.brand))


  return (
    <>
    <Navbar/>

    <div className="pro-selected">
      {
        menData.map((items)=>{
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
  <Link to={`/mens/${items.id}`}>
  <img className="prodsImg" src={items.image}></img>
  <div className="category">{items.company}{items.model}</div>
  </Link>
</div>)}) 
}

    </div>
    </>
  )
}

export default MensPage