import React from 'react';
import logo from '../logo.svg';
import Inventory from '../containers/Inventory'
import SignUp from '../components/SignUp'
import SignIn from '../containers/SignIn'

export default function SideBar() {
   return (
      <div className="sidebar">
         <img src={logo} className="App-logo" alt="logo" />
         <Inventory />
         <br />
         <SignIn />
         <SignUp />
      </div>
   )
}
