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
import Logo from '../Image/logo.png'
import Select from 'react-select';
import SliderM from './SliderM';
import FeaturesIcon from './FeaturesIcon';
import Location from './Location';
import SearchContact  from '../SearchContact/SearchContact';
import  '../SearchContact/SearchContact.scss';
import Fade from 'react-reveal/Fade';
import CustomPopup from "../CustomPopup/CustomPopup";

const Community = () => {
    


    return (
        <>
            <div id="commuu">
            <Fade top >
                <div className="conm">
                    <div className="title">
                        <div className="sup">
                            <p className="sup-tit">FELL THE FRESHNESS</p>
                            <hr className="gr"></hr>
                        </div>
                        <p className="com-tit">MELIA&nbsp;
                            <span className="nui">Residence</span></p>
                    </div>
                    <div className="contain">
                   
                        The Building is designed so that 41units have a view on the sea. Terraces are oriented to the sea side. This Project is a mini community where you feel like you are among your family.
                        Life at MELIA RESIDENCE symbolizes a holy union between luxurious amenities and the
                        raw relieveness.
                        Each feature was carefully studied and implemented to help residents reach a high level of serenity and joy.
                    
                    </div>
                </div>
                </Fade>
                <Fade>
                <SliderM />
                </Fade>
                <button className="graph">
                Residence Plan
                </button>
                <div className="featuers">
                    <FeaturesIcon />

                </div>
                <div className="location">
                    <Location />

                </div>
                <div className="types">
                    <div className="title">
                        <div className="sup">
                            <p className="sup-tit">MELIA Residence</p>
                            <hr className="gr"></hr>
                        </div>
                        <p className="com-tit">PROPERTIES &nbsp;
                        <span className="nui">Types</span></p>
                    </div>

                    <div className="types-grid">
                    <Fade bottom big>
                        <div className="type-box">
                            <div className="type">Type A</div>
                            <div className="info">- Area : 180 m2 <br />
                                - Total Count In Project : 1
                                <div className="typeinfo">
                                    <hr className="type"/>
                                    <ul className="ultype">
                                        <li className="litype">Reception 7.15 x 4.00 m</li>
                                        <li className="litype">Reception 7.15 x 4.00 m</li>
                                        <li className="litype">Reception 7.15 x 4.00 m</li>
                                        <li className="litype">Reception 7.15 x 4.00 m</li>
                                        <li className="litype">Reception 7.15 x 4.00 m</li>
                                        <li className="litype">Reception 7.15 x 4.00 m</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="type-box">
                            <div className="type">Type A</div>
                            <div className="info">- Area : 180 m2 <br />
                                - Total Count In Project : 1
                            </div>
                        </div>
                        <div className="type-box">
                            <div className="type">Type A</div>
                            <div className="info">- Area : 180 m2 <br />
                                - Total Count In Project : 1
                            </div>
                        </div>
                        <div className="type-box">
                            <div className="type">Type A</div>
                            <div className="info">- Area : 180 m2 <br />
                                - Total Count In Project : 1
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>

            </div>
            
            <div role="main" className="sc ki posi">
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

            </div>
        </>
    )

}


export default Community;
