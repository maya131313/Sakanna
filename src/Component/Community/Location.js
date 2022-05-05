import React from "react";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';



const Location = () => {

    return (
        <>
            <Slide left>
            <div className="map-loc"></div>
            </Slide>
            <Roll right>
            <div className="di-loc" >
                <div className="title">
                    <div className="sup">
                        <p className="sup-tit">Location</p>
                        <hr className="gr"></hr>
                    </div>
                    <p className="loc-tit">AL KHUBAR</p>
                    <p className="loc-con">
                        Melia Residence has a very special location. A Great view of The Sea. Very close to King Fahd causeway that leds to Bahrain.
                        10 mins of walking to King Fahd Rd.
                    </p>
                    <center>
                        <Button variant="outlined" LinkComponent={NavLink} to="/contact" ><p className="bo-big">VIEW ON GOOGLE MAP </p>  </Button>
                    </center>
                </div>
            </div>
            </Roll>
        </>
    )
}
export default Location;
