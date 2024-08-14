import React, { useState } from 'react'
import {mobileData} from '../data/mobiles'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'


const MobilePage = () => {
  const [selectedProduct , setSelectedProduct]= useState([]);
        const companyHandler = (phones)=> {
          if(selectedProduct.includes(phones)){
            setSelectedProduct(selectedProduct.filter((items)=> items!== phones))
            }
    else {
         setSelectedProduct([...selectedProduct,phones])
    }
    }
    const filteredData = selectedProduct.length===0?mobileData:mobileData.filter((sphones)=>selectedProduct.includes(sphones.company))
  
  return (
    <>
    <Navbar/>
     <div className="pro-selected">
      {
         mobileData.map((phone)=>{
        return(
        <div>
        <label>
        <input type = "checkbox" checked={selectedProduct.includes(phone.company)}
        onChange={()=>companyHandler(phone.company)}
        />
        
        {phone.company}
        </label>
        </div>)})
      }
          </div>
         
    <div className="prod">
     {
        filteredData.map((item)=>{return(
    
        <div className='products'>
            <Link to={`/mobile/${item.id}`}>
         <img className='prodImg' src={item.image}></img>
         <div className="category">{item.company}{item.model}
         </div>
         </Link>
       </div>

      )})

     }


    </div>
    </>
  )
}

export default MobilePage