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

export const login = loginData => {
   return dispatch => {
      
   }
}
