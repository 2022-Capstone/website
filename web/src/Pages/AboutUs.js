/*
* FILE            : notfound.js
* PROJECT         : Front-End Assignment: SENG3080
* FIRST VERSION   : February 20, 2022
* PROGRAMMER      : Sky Roth
* DESCRIPTION     : This file will act as the 404 page for the main website
*/


//  LIBRARIES
import React from 'react';
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';


//  COMPONENTS
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";

//  CSS
import "../Styles/Shared.css";
import "../Styles/Home.css";

import sky from "../Resources/Images/sky.jpeg";
import jae from "../Resources/Images/jae.jpeg";
import jane from "../Resources/Images/jane.jpeg";


export default class Features extends React.Component {
    constructor() {
        super();
    }

    render() {

      return (
        <div className='background'>
          <div className='mainSplash'>
              <Navbar />
              <div className='more_width'>
                <h1 className='tommy sml'>About Us</h1>
                <div className='pop-regular'>
                  <h2 className='description'>Meet our small, yet handy team</h2>
                </div>
              </div>
                <div className='stuff'>
                  <hr className='white'></hr>
                  <div className='profile_section'>
                    <Profile name="Jae" desc="Back-end" img={jae} />
                    <Profile name="Jane" desc="Front-end / Back-end" img={jane}/>
                    <Profile name="Minsung" desc="Back-end"/>
                    <Profile name="Sky" desc="Front-end" img={sky} />
                  </div>
                </div>
          </div>
        </div>
      );
    }
  }