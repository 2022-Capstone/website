/*
* FILE            : Card.js
* PROJECT         : Front-End Assignment: SENG3080
* FIRST VERSION   : February 20, 2022
* PROGRAMMER      : Sky Roth
* DESCRIPTION     : This file will contain the Card component
*/


//  LIBRARIES
import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

//  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from 'react-bootstrap/esm/Image';
import "../Styles/Shared.css";
import '../Styles/Navbar.css';


class Navbar extends React.Component {

    render() {

    return (
    <div className='navbar-background'>

        <Link to={`/`} className='link-noline navbar-title'>PMG</Link>

        <Link to={`/about-us`} className='link-noline navbar-item pop-regular'>About Us</Link>
        <Link to={`/features`} className='link-noline navbar-item pop-regular'>Features</Link>
        <Link to={`/`} className='link-noline navbar-item pop-regular'>Home</Link>
    </div>
    );
    }
}

export default Navbar;

