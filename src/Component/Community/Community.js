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
import SliderM from './SliderM'
import FeaturesIcon from './FeaturesIcon'
import Location from './Location'
import SearchContact from '../SearchContact/SearchContact'
import Fade from 'react-reveal/Fade';



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
            <SearchContact/>
        </>
    )

}


export default Community;
