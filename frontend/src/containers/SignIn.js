import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth'

class SignIn extends React.Component {

   state = {
      signInData: {}
   }

   handleChange = (event) => {
      const { name, value } = event.target
      const currentLoginData = Object.assign({}, this.state.signInData, {
         [name]: value
      })

      this.props.updateLoginField(currentLoginData)
   }

   handleSubmit = (event) => {
      event.preventDefault()
      login(this.state.signInData)
      this.props.resetLoginField()
   }

   render() {
      return (
         <div className="session-details">
            <p>Continue your adventure</p>
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="username">Username</label>
               <input type="text" className="username field" value={this.state.signInData.username} onChange={this.handleChange} name="username" /><br />
               <label htmlFor="password">Password</label>
               <input type="password" className="password field" value={this.state.signInData.password} onChange={this.handleChange} name="password" /><br />
               <input type="submit" className="login-submit" value="Let's go!" />
            </form>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      signInData: state.logins.signInData
   }
}

export default connect(mapStateToProps, { login })(SignIn);
