import React from 'react';
import logo from '../logo.svg';
import Inventory from '../containers/Inventory'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

export default class SideBar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />
            <Inventory />
            <br />
            {/* <SignIn />
            <SignUp /> */}
         </div>
      )
   }
}
