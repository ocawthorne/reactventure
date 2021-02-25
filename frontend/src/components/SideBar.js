import React from 'react';
import { Switch, Route } from 'react-router-dom'

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
         <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
         </Switch>
      </div>
   )
}
