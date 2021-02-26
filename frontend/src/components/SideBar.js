import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';

import logo from '../logo.svg';
import Inventory from '../containers/Inventory'
import SignUp from '../components/SignUp'
import SignIn from '../containers/SignIn'
import Welcome from '../components/Welcome'

class SideBar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />
            <Inventory />
            <br />
            {!this.props.user.username && <Link to="/signup" className="link">New Adventure</Link>}
            <br /><br />
            {!this.props.user.username && <Link to="/signin" className="link">Continue Adventure</Link>}
            <br /><br />
            <Switch>
               <Route exact path="/" component={Welcome} />
               <Route exact path="/signin" component={SignIn} />
               <Route exact path="/signup" component={SignUp} />
            </Switch>
            {/* <Welcome /> */}
            {/* {this.props.user.username ? <Link to="" onClick={() => this.props.logout()}>Log out</Link> : <Link to="/signin" className="link">Continue Adventure</Link>} */}

         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      user: state.auth.currentUser
   }
}

export default connect(mapStateToProps)(SideBar)
