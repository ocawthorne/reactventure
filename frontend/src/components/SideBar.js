import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

import logo from '../logo.svg';
import Inventory from '../containers/Inventory'
import SignUp from '../components/SignUp'
import SignIn from '../containers/SignIn'

const SideBar = ({user}) => {
   return (
      <div className="sidebar">
         <img src={logo} className="App-logo" alt="logo" />
         <Inventory />
         <br />
         {user.username ? <p>Welcome, {user.username}!</p> : <Link to="/signup" className="link">New Adventure</Link>}
         <br /><br />
         {user.username ? <Link to="/signout">Log out</Link> : <Link to="/signin" className="link">Continue Adventure</Link>}
         <Switch>
            <Route exact path="/" />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
         </Switch>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.currentUser
   }
}

export default connect(mapStateToProps)(SideBar)
