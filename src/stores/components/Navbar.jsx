import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className = "navSection">
      <Link to ="/"><div className="title"> <h2>E-mart</h2> </div> </Link> 
       <div className = "search"><input type="text" placeholder = "Search Here..." ></input></div>
        <div className = "user">
        <div className = "user-detail"> SigIn/SignOut
        </div>
        <div className="cart"><h3>Cart</h3></div>
        </div>
          
          
    </div>

    <div className='subMenu'>
          <ul>
           <Link to ='/mobile'><li>Mobiles</li></Link>
           <Link to ='/computers'><li>Computers</li></Link>
          <Link to ='/ac'><li>Air Conditioner</li></Link>
         <Link to ='/mens'><li>Men's Fashion</li></Link>
        <Link to ='/womens'><li>Women's Fashion</li></Link>
       <Link to ='/furniture'> <li>Furniture</li></Link>
      <Link to ='/watch'><li>Watch</li></Link>
          
        </ul>
      </div>
    
    </>
  )
}

export default Navbar;