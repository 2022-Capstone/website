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


class Feature extends React.Component {

    render() {

    return (
        <div className='feature_list'>
            <div className='feature'>

            </div>
        </div>
    );
    }
}

export default Feature;

