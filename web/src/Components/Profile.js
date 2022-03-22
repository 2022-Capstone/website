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


class Profile extends React.Component {

    render() {

    return (
        <div className='profile_list'>
            <div className='profile'>
                <img className='profile_img' src={this.props.img} href="profileImg" />
            </div>
            <h1 className='profile_name'>{this.props.name}</h1>
            <h1 className='profile_desc'>{this.props.desc}</h1>
        </div>
    );
    }
}

export default Profile;

