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

//  CSS
import "../Styles/Shared.css";
import "../Styles/Home.css";



export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {

        const onDownload = () => {
            const link = document.createElement("a");
            link.download = `download.txt`;
            link.href = '/download.txt';
            link.click();
        };

      return (
        <div className='background'>
          <div className='mainSplash'>
              <Navbar />
              <div className='mainHeader'>
                <h1 className='tommy'>Data Cleaning Tool</h1>
                <div className='downloadbtn'>
                  <Button variant="contained" startIcon={<DownloadIcon />}>Download<Link to="/Files/download.txt" target="_blank" download></Link></Button>
                </div>
              </div>
          </div>
        </div>
      );
    }
  }