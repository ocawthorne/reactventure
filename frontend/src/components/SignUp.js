import React from 'react';

export default class SignUp extends React.Component {
   render() {
      return (
         <div className="session-details">
            <p>Start a new adventure</p>
            <form>
               <label htmlFor="username">Username</label>
               <input type="text" class="username field" /><br />
               <label htmlFor="hero">Heroname</label>
               <input type="text" class="hero field" /><br />
               <label htmlFor="password">Password</label>
               <input type="password" class="password field" /><br />
               <input type="submit" class="login-submit" value="Let's begin." />
            </form>
         </div>
      )
   }
}
