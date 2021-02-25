export const signup = (userData) => {
   return dispatch => {
      fetch(`http://localhost:3000/users`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({user: userData})
      })
      .then(res => res.json())
      .then(data => dispatch({
         type: "SIGNUP_SUCCESS",
         payload: {
            loggedIn: data.loggedIn,
            currentUser: data.user
         }
      }))
   }
}

export const login = credentials => {
   return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
         credentials: "include",
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(credentials)
      })
      .then(resp => resp.json())
      .then(user => {
         if (user.error) {
            alert(user.error);
         } else {
            return null
         }
      })
   }
}
