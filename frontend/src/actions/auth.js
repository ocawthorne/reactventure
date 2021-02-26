export const signup = (userData) => {
   return dispatch => {
      fetch(`http://localhost:3000/api/v1/users`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         credentials: "include",
         body: JSON.stringify({user: userData})
      })
      .then(res => res.json())
      .then(data => dispatch({
         type: "AUTH_SUCCESS",
         payload: {
            loggedIn: true,
            currentUser: data.user
         }
      }))
   }
}

export const login = (userData, history) => {
   return dispatch => {
      fetch("http://localhost:3000/api/v1/sessions", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: 'include',
         body: JSON.stringify(userData)
      })
      .then(resp => resp.json())
      .then(data => {
         if (data.error) {
            alert(data.error);
         } else {
            dispatch({
               type: "AUTH_SUCCESS",
               payload: {
                  loggedIn: true,
                  currentUser: data.user
               }
            })
            history.push('/')
         }
      })
   }
}

export const checkLoggedIn = () => {
   return dispatch => {
      fetch(`http://localhost:3000/api/v1/logged_in`, {
         credentials: 'include'
      })
      .then(res => res.json())
      .then(data => dispatch({
         type: "AUTH_SUCCESS",
         payload: {
            loggedIn: data.logged_in,
            currentUser: data.user
         }
      }))
   }
}

export const logout = () => {
   return dispatch => {
      fetch(`http://localhost:3000/api/v1/logout`, {
         method: "DELETE",
         credentials: "include"
      })
      .then(res => res.json())
      .then(data => dispatch({type: "LOGOUT_SUCCESS"}))
   }
}
