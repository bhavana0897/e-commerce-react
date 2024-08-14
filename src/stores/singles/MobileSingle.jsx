import React from 'react'
import { mobileData } from '../data/mobiles'
import { useParams } from 'react-router-dom'

const MobileSingle = () => {

    const {id} = useParams();

    const product = mobileData.find((item)=>item.id===id)
   
  return (
    <div>
        <div className="ind-img">
            <img src={product.image} />
        </div>
        <div className="ind-company">
            <h4>{product.company}</h4>
        </div>
        <div className="ind-model">
            <h4>{product.model}</h4>
        </div>
        <div className="ind-price">
            <h4>{product.price}</h4>
        </div>
        <div className="ind-category">
            <h4>{product.category}</h4>
        </div>
        <div className="ind-desc">
            <h4>{product.description}</h4>
        </div>
    </div>
  )
}

export default MobileSingle