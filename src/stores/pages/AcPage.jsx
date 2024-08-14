import React, { useState } from 'react'
import {acData} from '../data/ac'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
const AcPage = () => {
      
  const[selectedProducts, setSelectedProduct] = useState([]);

    const CompanyHandle = (acs) => {
      console.log(acs)
      if(selectedProducts.includes(acs))
      {
         setSelectedProduct(selectedProducts.filter((accs)=>accs!==acs))
      }
      else{
        setSelectedProduct([...selectedProducts,acs])
        console.log(selectedProducts)
      }
    }

    const filteredData = selectedProducts.length==0?acData:acData.filter((items)=>selectedProducts.includes(items.company))

  return (
    <>
    <Navbar/>
   <div className="pro-selected">
     {
       acData.map((ac)=>{return(
       
       <div>
         <label>
             <input type = "checkbox" checked={selectedProducts.includes(ac.company)}
             onChange={()=>CompanyHandle(ac.company)} />
             {ac.company}
         </label>
       </div>)})

     }

   </div>

  
    <div className="prod">{
        filteredData.map((item)=>{return(
        <div className="products">
          <Link to={`/ac/${item.id}`}>
            <img className="prodImg"src={item.image}></img>
        <div className="category">{item.company}{item.model}</div>
        </Link>
        </div>)})
        
        }

    </div>
    </>
  )
}

export default AcPage