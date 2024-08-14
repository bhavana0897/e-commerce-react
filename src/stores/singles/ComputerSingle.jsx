import React from 'react'
import { computerData } from '../data/computers';
import { useParams } from 'react-router-dom';
const ComputerSingle = () => {
    const {id} = useParams();
    const products = computerData.find((item)=>item.id===id)
  return (
    <div>
        <div className="ind-img">
            <img src={products.image} />
        </div>
        <div className="ind-company">
            <h4>{products.company}</h4>
        </div>
        <div className="ind-model">
            <h4>{products.model}</h4>
        </div>
        <div className="ind-price">
            <h4>{products.price}</h4>
        </div>
        <div className="ind-category">
            <h4>{products.category}</h4>
        </div>
        <div className="ind-desc">
            <h4>{products.description}</h4>
        </div>
    </div>
  )
}

export default ComputerSingle