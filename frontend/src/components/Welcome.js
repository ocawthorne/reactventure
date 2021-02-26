import React from 'react';
import { connect } from 'react-redux';
import { checkLoggedIn } from '../actions/auth'

class Welcome extends React.Component {
   render() {
      console.log(this.props.loggedIn)
      return (
         <div>
            {this.props.loggedIn ? <p className="welcome">Welcome, {this.props.user.username}</p> : <p className="welcome">Welcome!<br />Please create an account to begin your adventure, or login to continue.</p>}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      loggedIn: state.auth.loggedIn,
      user: state.auth.currentUser
   }
}

export default connect(mapStateToProps, { checkLoggedIn })(Welcome)
