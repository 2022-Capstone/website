/*
* FILE            : notfound.js
* PROJECT         : Front-End Assignment: SENG3080
* FIRST VERSION   : February 20, 2022
* PROGRAMMER      : Sky Roth
* DESCRIPTION     : This file will act as the 404 page for the main website
*/


//  LIBRARIES
import React from 'react';



export default class NotFound extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
        <div className='background'>
          <div className='mainSplash more_width'>
            <h1 className='header'>can't clean this... 404</h1>
          </div>
        </div>
      );
    }
  }