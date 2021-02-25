import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

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
         <Link to="/" className="link">Adventure</Link>
         <Link to="/signin" className="link">Sign In</Link>
         <Link to="/signup" className="link">Sign Up</Link>
         <Switch>
            <Route exact path="/" />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
         </Switch>
      </div>
   )
}
