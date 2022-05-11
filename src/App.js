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
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Component/Home/Home.scss'
import'./Component/Footer/Footer.scss'
import'./Component/Community/Community.scss'
import'./Component/Community/SliderM.scss'
import'./Component/Slider/Slider.scss'
import'./Component/Results/Results.scss'
import'./Component/Contact/Contact.scss'
import'./Component/ContactForm/ContactForm.scss'
import'./Component/SearchContact/SearchContact.scss'
import'./Component/SearchBar/SearchBar.scss'
import'./index.scss'
import'./Component/Navbar/Navbar.scss'
import {useTranslation , initReactI18next} from "react-i18next";
import i18next from "i18next";
import './Component/CustomPopup/CustomPopup'
import Axios from "axios";
import {useState , useEffect} from "react";
import map from "react";




const App=()=>{
  const {t, i18n} = useTranslation('common');

  const [data, setData] = useState([]);
  useEffect(() => {
      Axios.get("http://api.mayaameenbasha.com/public/api/communities")
      .then(res =>{
           console.log("getting from ;;;" ,res.data)
           setData(res.data)
  }).catch(err => console.log(err))
  }, []);
  
  // const { t } = this.props;
  // document.documentElement.lang = i18next.language;
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
