import React from 'react'
import {computerData} from '../data/computers.js'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ComputerPage = () => {
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

    const filteredData = selectedProduct.length==0?computerData:computerData.filter((items)=>selectedProduct.includes(items.company))

  return (
    <>
    <Navbar/>
    <div className="pro-selected">
      {
         computerData.map((items)=>{
          return(
          <div>
            <label>
              <input type="checkbox"  value={selectedProduct.includes(items.company)} 
              onChange={()=>companyHandler(items.company)}/>
              {items.company}
            </label>
            </div> )
         })
      }
    </div>

    <div className="prod">
{
    filteredData.map((items)=>{return(
    <div className="products">
      <Link to = {`/computers/${items.id}`}>
      <img className="prodImg" src={items.image}></img>
      <div className="category">{items.company}{items.model}</div>
      </Link>
    </div>)})
}


    </div>
    </>
  )
}

export default ComputerPage