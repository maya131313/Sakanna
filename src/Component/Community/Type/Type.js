import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from './Slider'
// import Mslider from './Mslider'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { useState } from "react";
// import Logo from './Image/logo.png'
import bc from '../../Image/melia/bc.png'
import Select from 'react-select';
// import SliderM from './SliderM';
import FeaturesIcon from '../FeaturesIcon';
// import Location from './Location';
// import SearchContact  from './Component/SearchContact/SearchContact';
// import  '../SearchContact/SearchContact.scss';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// import CustomPopup from "../CustomPopup/CustomPopup";
import SliderM from "../SliderM";
import SliderIn from "../SliderIn";
import Location from "../Location";
import SearchContact from "../../SearchContact/SearchContact";
// import {l} from "../../Image/melia/1st-A.png"

// var perf =require('./mapper.html')
const rawHTML = `




<map name="image-map">
<area target="" alt="resption" title="Reception
7.15 x 4.00 m" href="" coords="2990,2383,3914,728" shape="rect">
<area target="" alt="bed2" title="Bedroom 2
2 5.00 x3.65 m" href="" coords="2032,2692,2924,1520" shape="rect">
<area target="" alt="bed1" title="Bedroom1 
5.00 x 3.80 m<" href="" coords="1976,1515,1091,2690" shape="rect">
<area target="" alt="mbed" title="Master Bedroom 
5.00 x 4.00 m" href="" coords="107,2683,1021,1137,681,1142,716,1502,107,1506,100,1149,236,1257,300,1348,303,1278,401,1278,475,1373,328,1443,289,1404,261,1359,265,1306,251,1415,240,1313,422,1219,475,1303,552,1266,618,1179,657,1245,622,1305" shape="rect">
<area target="" alt="g toi" title="Guest Toilet : 
1.70 x 1.60 m " href="" coords="2913,723,2531,1070" shape="rect">
<area target="" alt="ketchin" title="Kitchen 
4.20 x 2.20 m" href="" coords="2472,100,1967,1070" shape="rect">
<area target="" alt="m room" title="Maid Room
2.25 x 1.90 m
" href="" coords="1897,345,1473,846" shape="rect">
<area target="" alt="s lun" title="Storage & Laundry 
1.90 x 0.95 m" href="" coords="1908,890,1081,1131" shape="rect">
<area target="" alt="m bath" title="Maid Room Toilet
2.25 x 1.40 m" href="" coords="1424,348,1116,856" shape="rect">
<area target="" alt="bath1" title="Bathroom 
2.20 x 1.90 m" href="" coords="1053,567,608,1086" shape="rect">
<area target="" alt="bath 2" title="bath 2" href="" coords="562,331,96,1077" shape="rect">
</map>

`;

const Type = () => {



    return (
        <>
            <div id="commuu">
                <Fade top >
                    <div className="conm">
                        <div className="title">
                            <div className="sup">
                                <p className="sup-tit">MELIA Residence</p>
                                <hr className="gr"></hr>
                            </div>
                            <p className="com-tit">TYPE A&nbsp;
                                {/* <span className="nui">Residence</span> */}
                            </p>
                        </div>
                    </div>
                </Fade>
                <div className="type-main">
                    <Fade left >
                        <div className="info-tec">
                            <div className="tre">Area : 180 m&#178; <br />
                                Total Count In Project : 1</div>
                            <table>

                                <tr>
                                    <th>Reception </th>
                                    <td>7.15 x 4.00 m</td>
                                </tr>
                                <tr>
                                    <th>Guest Toilet : </th>
                                    <td>1.70 x 1.60 m </td>
                                </tr>
                                <tr>
                                    <th>Bedroom1  </th>
                                    <td>5.00 x 3.80 m</td>
                                </tr>
                                <tr>
                                    <th>Bedroom 2   </th>
                                    <td>2 5.00 x3.65 m</td>
                                </tr>
                                <tr>
                                    <th>Master Bedroom   </th>
                                    <td>5.00 x 4.00 m</td>
                                </tr>
                                <tr>
                                    <th>Dressing room  </th>
                                    <td>2.55 x 1.50 m </td>
                                </tr>
                                <tr>
                                    <th>Master Room Toilet  </th>
                                    <td>3.20 x 2.00 m</td>
                                </tr>
                                <tr>
                                    <th>Kitchen  </th>
                                    <td>4.20 x 2.20 m</td>
                                </tr>
                                <tr>
                                    <th>Bathroom  </th>
                                    <td>2.20 x 1.90 m</td>
                                </tr>
                                <tr>
                                    <th>Maid Room   </th>
                                    <td>2.25 x 1.90 m</td>
                                </tr>
                                <tr>
                                    <th>Maid Room Toilet  </th>
                                    <td>2.25 x 1.40 m</td>
                                </tr>
                                <tr>
                                    <th>Storage & Laundry </th>
                                    <td>1.90 x 0.95 m</td>
                                </tr>
                            </table>
                        </div>
                    </Fade>
                    <Fade right >
                        <img className="ty-bac" src={bc} alt="9" />

                        


                    </Fade>
                </div>


                {/* <div className="container"> */}

{/* <iframe src={perf }></iframe>  */}
 </div>
                {/* <Fade>
                <SliderM />
                </Fade> */}
                {/* <button className="graph">
                Residence Plan
                </button>
                <div className="featuers">
                    <FeaturesIcon />
                </div> */}
                <div className="gra">
                    <div className="gra-floor">
                    {/* <img src="" usemap="#image-map"/>
                        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div> */}

                    </div>
                </div>
                <div className="types">
                    <div className="title">
                        <div className="sup">
                            <p className="sup-tit">MELIA Residence</p>
                            <hr className="gr"></hr>
                        </div>
                        <p className="com-tit">Interior
                            <span className="nui">&nbsp;Design</span></p>
                    </div>


                </div>
                <div>
                    <SliderIn />
                </div>
            

            {/* <div role="main" className="sc ki posi">
            <div id="menuToggle">
                    <input type="checkbox" />
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 26L20.2 20.2M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z" stroke="#8c7a6a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div id="menu">
                        <div className="res">
                            <SearchContact className="res" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" sc ni posi">
                <SearchContact />

            </div> */}
        </>
    )

}


export default Type;
