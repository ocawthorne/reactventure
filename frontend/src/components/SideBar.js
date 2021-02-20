import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Inventory from '../containers/Inventory.js'

export default class SideBar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />
            <Inventory />
         </div>
      )
   }
}
