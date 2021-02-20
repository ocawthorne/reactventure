import React from 'react';

export default class SignIn extends React.Component {
   render() {
      return (
         <div className="session-details">
            <p>Continue your adventure</p>
            <form>
               <label htmlFor="username">Username</label>
               <input type="text" className="username field" /><br />
               <label htmlFor="password">Password</label>
               <input type="password" className="password field" /><br />
               <input type="submit" className="login-submit" value="Let's go!" />
            </form>
         </div>
      )
   }
}
