import React from 'react';
import { connect } from 'react-redux';
import { checkLoggedIn, logout, save, retrieve } from '../actions/auth'

class Welcome extends React.Component {

   saveProgress = () => {
      console.log('About to save progress')
      this.props.save(
         this.props.user,
         this.props.userHistory,
         this.props.Inventory,
         this.props.knownObjects,
         this.props.brokenObjects
      )
   }

   render() {
      return (
         <div>
            {this.props.loggedIn ? <p className="welcome">Welcome, {this.props.user.username}</p> : <p className="welcome">Welcome!<br />Please create an account to begin your adventure, or login to continue.</p>}
            {this.props.loggedIn && <button className="entry submit" onClick={this.saveProgress}>Save Progress</button>}
            <br /><br /><br />
            {this.props.loggedIn && <button className="entry submit" onClick={() => this.props.logout()}>Log Out</button>}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      loggedIn: state.auth.loggedIn,
      user: state.auth.currentUser,

      userHistory: state.commands.userHistory,
      inventory: state.commands.userObjects,
      knownObjects: state.commands.knownObjects,
      brokenObjects: state.commands.brokenObjects
   }
}

export default connect(mapStateToProps, { checkLoggedIn, logout, save, retrieve })(Welcome)
