import React, { Component } from 'react';
import logo from '../moi.png';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
      </div>
    );
  }
} 
Share