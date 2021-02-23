const defaultState = {
   signInData: {
      username: '',
      password: ''
   }
}

export const logins = (state=defaultState, action) => {
   switch(action.type) {
      case "UPDATED_LOGIN":
         return {signInData: action.signInData}
      case "RESETTED_LOGIN":
         return {...defaultState}
      default:
         return state
   }
}
