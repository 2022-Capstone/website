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

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


//  COMPONENTS
import Navbar from "../Components/Navbar";
import Feature from "../Components/Feature";

//  CSS
import "../Styles/Shared.css";
import "../Styles/Home.css";



export default class Features extends React.Component {
    constructor() {
        super();
    }

    render() {

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));

      return (
        <div className='background'>
          <div className='mainSplash'>
              <Navbar />
              <div className='more_width'>
                <h1 className='tommy sml'>Simple to use, powerful in nature</h1>
                <div className='pop-regular'>
                  <h2 className='description'>Powerful data cleaning software created with WinForms and Python</h2>
                </div>
              </div>

              <div className='stuff'>
              <hr className='white'></hr>
              <div className='feature_section'>
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
              </div>
              </div>
          </div>
        </div>
      );
    }
  }