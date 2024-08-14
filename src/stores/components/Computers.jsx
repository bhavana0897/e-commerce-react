import React from 'react'
import {computerData} from '../data/computers.js'
import { Link } from 'react-router-dom'

const Computers = () => {

    let FirstFiveImages = computerData.slice(0,5)
  return (
    <>
    <h2>Computers</h2>
    <div className='proSection'>
       { 
          FirstFiveImages.map((items)=> {
             return(
              <Link to={`/computers/${items.id}`}>
            <div className = "imgBox">
                <img src = {items.image} alt = "computerimages" />
            </div>
            </Link>
            )})
       }
    </div>
    </>
  )
}

export default Computers;

