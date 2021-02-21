const defaultState = {
   command: ''
}

const commandReducer = (state=defaultState, action) => {
   console.log(action.type)
   switch (action.type) {
      case 'UPDATED_COMMAND':
         return {...state, command: action.command}
      case 'RESET_COMMAND':
         return defaultState
      default:
         return state
   }
}

export default commandReducer
