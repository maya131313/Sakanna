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
import Results from "./Component/Results/Results";
import'./Component/Navbar/Navbar.scss'
import'./Component/Home/Home.scss'
import'./Component/Footer/Footer.scss'
import'./Component/Community/Community.scss'
import'./Component/Slider/Slider.scss'
import'./Component/Results/Results.scss'
import'./Component/ContactForm/ContactForm.scss'
import'./index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';



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
    <Route path='/results' element={<Results/>} />
    <Route element={<Error/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
