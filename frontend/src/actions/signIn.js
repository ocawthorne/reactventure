export const updateLoginField = (signInData) => {
   return {
      type: "UPDATED_LOGIN",
      signInData
   }
}

export const submitLoginField = (signInData) => {
   return {
      type: "SUBMITTED_LOGIN",
      signInData
   }
}

export const resetLoginField = () => {
   return {
      type: "RESETTED_LOGIN"
   }
}

export const loginSuccess = () => {
   return {
      type: "LOGIN_SUCCESS"
   }
}

//? Asynchronous Actions

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
            dispatch(loginSuccess())
         }
      })
   }
}
