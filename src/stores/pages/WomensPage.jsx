import React from 'react'
import { womanData } from '../data/woman';
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const WomensPage = () => {

  const [selectedProduct , setSelectedProduct]= useState([]);
  const companyHandler = (phones)=> {
    if(selectedProduct.includes(phones)){
      setSelectedProduct(selectedProduct.filter((items)=> items!== phones))
      }
else {
   setSelectedProduct([...selectedProduct,phones])
}
}
const filteredData = selectedProduct.length===0?womanData:womanData.filter((sphones)=>selectedProduct.includes(sphones.brand))


  return (
    <>
    <Navbar/>

 <div className="pro-selected">
      {
         womanData.map((phone)=>{
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




    <div className="prod" >
      {
         filteredData.map((items)=>{return(
         <div className="products">
          <Link to={`/womens/${items.id}`}>
          <img className="prodsImg" src={items.image}></img>
           <div className="category">{items.company}{items.model}</div>
           </Link>
         </div>)}) 
      }
    </div>
    </>
  )
}

export default WomensPage