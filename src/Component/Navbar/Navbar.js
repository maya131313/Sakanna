import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Image/logo.png'
import Button from '@mui/material/Button';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Language } from "@material-ui/icons";
import Select from 'react-select';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

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
                    <div>
                    <input type="checkbox" id="toggler"/>
                    <label for="toggler">  <MenuRoundedIcon /></label>
                    <div className="nav-link menu">
                        <ul className="uli list">
                            <li className="nav-item">
                            <Select options={Languages} defaultValue={[Languages[0]]} />
                            </li>

                            <li className="nav-item"><a className="re" href="javascript:;"><LocalPhoneRoundedIcon fontSize="small"/>CALL US +966138813760</a></li>
                            <li className="nav-item"><a className="re" href="whatsapp://send?phone=053-000-9234"><WhatsAppIcon fontSize="small"/> SALES & SUPPORT</a></li>
                            <li className="nav-item"><Button variant="outlined" className="iopl" LinkComponent={NavLink} to="/contact" >Contact Us</Button></li>
                        </ul>
                        
                    </div>
                    </div>
                </div>
            </navbar>
        </>
    )

}
export default Navbar;