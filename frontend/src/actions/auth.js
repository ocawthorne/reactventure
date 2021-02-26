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
