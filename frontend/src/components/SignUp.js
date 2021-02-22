import React from 'react';

export default class SignUp extends React.Component {
   render() {
      return (
         <div className="session-details">
            <br />
            <p>Start a new adventure</p>
            <form>
               <label htmlFor="username">Username</label>
               <input type="text" className="username field" /><br />
               {/* <label htmlFor="hero">Heroname</label>
               <input type="text" className="hero field" /><br /> */}
               <label htmlFor="password">Password</label>
               <input type="password" className="password field" /><br />
               <input type="submit" className="login-submit" value="Let's begin." />
            </form>
         </div>
      )
   }
}
