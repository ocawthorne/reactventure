export const authReducer = (state={loggedIn: false, currentUser: {}}, action) => {
   switch(action.type) {
      case "SIGNUP_SUCCESS":
         return {
            ...state,
            loggedIn: action.payload.loggedIn,
            currentUser: action.payload.currentUser
         }
      case "UPDATED_LOGIN":
         return {signInData: {
            username: action.signInData.username,
            password: action.signInData.password,
         }}
      case "RESETTED_LOGIN":
         return {...state}
      default:
         return state
   }
}
