import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Image/logo.png'
import Button from '@mui/material/Button';
import { Select, MenuItem, FormControl, makeStyles } from '@material-ui/core';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const useStyles = makeStyles(theme => ({
    FormControl: {
        // minWidth: 200
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const handleChange = e => setValue(e.target.value)
    return (
        <>



            <navbar className="nav">
                <div className="flex-nav">
                    <img src={Logo} className="logo" alt="" />
                    <div className="nav-link">
                        <ul className="uli">
                            <li className="nav-item">
                                <FormControl className={classes.FormControl}>
                                    <Select onChange={handleChange} SelectDisplayProps={{ style: { paddingTop: 8, paddingBottom: 8 } }}
                                        variant="filled"
                                        value={1}>
                                        <MenuItem value={1} >EN</MenuItem>
                                        <MenuItem value={2}>AR</MenuItem>
                                    </Select>
                                </FormControl>
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