import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Image/logo.png'
import Button from '@mui/material/Button';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Language } from "@material-ui/icons";
import Select from 'react-select';

const Languages = [
    { label: "EN ", value: 0 },
    { label: "AR ", value: 1 },

];


const Navbar = () => {

    return (
        <>



            <navbar className="nav">
                <div className="flex-nav">
                    <img src={Logo} className="logo" alt="" />
                    <div className="nav-link">
                        <ul className="uli">
                            <li className="nav-item">
                            <Select options={Languages} defaultValue={[Languages[0]]} />
                            </li>

                            <li className="nav-item"><a className="re" href="javascript:;"><LocalPhoneRoundedIcon fontSize="small"/>CALL US + (000) 00000</a></li>
                            <li className="nav-item"><a className="re" href="whatsapp://send?phone=3464478983"><WhatsAppIcon fontSize="small"/> SALES & SUPPORT</a></li>
                            <li className="nav-item"><Button variant="outlined" LinkComponent={NavLink} to="/contact" >Contact Us</Button></li>
                        </ul>
                        
                    </div>
                </div>
            </navbar>
        </>
    )

}
export default Navbar;