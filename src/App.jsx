import React from "react";
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from "./stores/pages/LandingPage";
import Products from "./stores/components/Products";
import MobilePage from "./stores/pages/MobilePage";
import AcPage from "./stores/pages/AcPage";
import ComputerPage from "./stores/pages/ComputerPage";
import FurniturePage from "./stores/pages/FurniturePage";
import MensPage from "./stores/pages/MensPage";
import WatchPage from "./stores/pages/WatchPage";
import WomensPage from "./stores/pages/WomensPage";
import MobileSingle from "./stores/singles/MobileSingle"
import AcSingle from "./stores/singles/AcSingle"
import ComputerSingle from "./stores/singles/ComputerSingle";
import MensSingle from "./stores/singles/MensSingle";
import FurnitureSingle from "./stores/singles/FurnitureSingle";
import WomenSingle from "./stores/singles/WomenSingle";
import WatchSingle from "./stores/singles/WatchSingle";

const App = () => {
  return ( 
  <>
  <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/mobile' element={<MobilePage/>} />
    <Route path='/computers' element={<ComputerPage/>} />
    <Route path='/mens' element={<MensPage/>} />
    <Route path='/womens' element={<WomensPage/>} />
    <Route path='/watch' element={<WatchPage/>} />
    <Route path='/ac' element={<AcPage/>} />
    <Route path='/furniture' element={<FurniturePage/>} />
    <Route path='/mobile/:id' element={<MobileSingle/>} />
    <Route path='/computers/:id' element={<ComputerSingle/>} />
    <Route path='/mens/:id' element={<MensSingle/>} />
    <Route path='/womens/:id' element={<WomenSingle/>} />
    <Route path='/watch/:id' element={<WatchSingle/>} />
    <Route path='/ac/:id' element={<AcSingle/>} />
    <Route path='/furniture/:id' element={<FurnitureSingle/>} />
     </Routes>
  </> );
}
 
export default App;