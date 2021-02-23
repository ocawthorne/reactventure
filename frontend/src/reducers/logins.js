const defaultState = {
   signInData: {
      username: '',
      password: ''
   }
}

export const logins = (state=defaultState, action) => {
   switch(action.type) {
      case "UPDATED_LOGIN":
         return {signInData: {
            username: action.signInData.username,
            password: action.signInData.password,
         }}
      case "RESETTED_LOGIN":
         return {...defaultState}
      default:
         return state
   }
}
