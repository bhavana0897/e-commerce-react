import React from 'react'
import { watchData } from '../data/watch';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const WatchPage = () => {
  const [selectedProduct , setSelectedProduct]= useState([]);
        const companyHandler = (phones)=> {
          if(selectedProduct.includes(phones)){
            setSelectedProduct(selectedProduct.filter((items)=> items!== phones))
            }
    else {
         setSelectedProduct([...selectedProduct,phones])
    }
    }
    const filteredData = selectedProduct.length===0?watchData:watchData.filter((sphones)=>selectedProduct.includes(sphones.brand))
  return (
    <>
    <Navbar/>
    <div className="pro-selected">
      {
         watchData.map((phone)=>{
        return(
        <div>
        <label>
        <input type = "checkbox" checked={selectedProduct.includes(phone.brand)}
        onChange={()=>companyHandler(phone.brand)}
        />
        
        {phone.brand}
        </label>
        </div>)})
      }
          </div>



    <div className="prod">
{
  filteredData.map((items)=>{return(
  <div className="products">
    <Link to={`/watch/${items.id}`}>
    <img className="prodImg" src={items.image}></img>
    <div className="category">{items.company}{items.model}</div>
    </Link>
  </div>)}) 
}


    </div>
    </>
  )
}

export default WatchPage