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
      .then(data => {
         dispatch({
         type: "AUTH_SUCCESS",
         payload: {
            loggedIn: true,
            currentUser: data.user
            }
         })
         save(data.user, [], [], ['crowbar','door','desk','drawer','paper','candle','chest'], []) // Default values at beginning of game
      })
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
            retrieve(data.user, dispatch)
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

export const save = (user, hist=[], inventory=[], knownObjects=['crowbar','door','desk','drawer','paper','candle','chest'], brokenObjects=[]) => {
   console.log('Save action initiated.')
   return dispatch => {
      fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         credentials: 'include',
         body: JSON.stringify({
            history: hist,
            inventory: inventory,
            known_objects: knownObjects,
            broken_objects: brokenObjects
         })
      })
      .then(res => res.json())
      .then(data => {
         dispatch({
            type: "USER_HISTORY_FETCH_SUCCESS",
            payload: {
               userHistory: hist,
               userObjects: inventory,
               knownObjects,
               brokenObjects
            }
         })
      })
   }
}

export const retrieve = (user, dispatch) => {
   console.log('Retrieve initiated.')
   console.log(user)
   // return dispatch => {
      fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
         credentials: "include",
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
         }
      })
      .then(r => r.json())
      .then(data => dispatch({
            type: "USER_HISTORY_FETCH_SUCCESS",
            payload: {
               userHistory: data.history,
               userObjects: data.inventory,
               knownObjects: data.known_objects,
               brokenObjects: data.broken_objects
               }
            })
      )
      .catch(error => {
         console.log("Error: ", error);
      })
   // }
}
