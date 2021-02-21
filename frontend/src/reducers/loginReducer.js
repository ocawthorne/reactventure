const defaultState = {
   username: '',
   password: ''
}

const loginReducer = (state=defaultState, action) => {
   switch(action.type) {
      case "UPDATED_LOGIN":
         return {username: state.username, password: state.password}
      default:
         return state
   }
}

export default loginReducer
