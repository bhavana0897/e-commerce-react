import React from 'react'
import Mobiles from './Mobiles';
import Computers from './Computers';
import Ac from './Ac';
import Women from './Women';
import Men from './Men';
import Furniture from './Furniture';
import Watch from './Watch';
const Products = () => {
  return (
    <div>
       <Mobiles/>
       <Computers/>
       <Ac/>
       <Men/>
       <Women/>
       <Furniture/>
       <Watch/>
    </div>
  )
}

export default Products;