import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Policy from './Component/Policy/Policy'
import Contact from './Component/Contact/Contact'
import Error from './Component/Error/Error'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Community from "./Component/Community/Community";
// import Community from './Component/Community/Community'
import'./Component/Navbar/Navbar.scss'
import'./Component/Home/Home.scss'
// import'./Component/Home/SLider.scss'
import'./Component/Footer/Footer.scss'
import'./Component/Community/Community.scss'
import'./Component/Slider/Slider.scss'
import'./index.scss'
import Select from 'react-select';
import SearchContact from './Component/SearchContact/SearchContact'


// import Slider from './Component/Home/Slider.js';

const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/policy' element={<Policy/>} />
    <Route path='/community' element={<Community/>} />
    <Route element={<Error/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
