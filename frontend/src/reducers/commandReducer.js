const defaultState = {
   entities: [],
   command: '',
   userEntities: [],
   loading: false
}

const commandReducer = (state=defaultState, action) => {
   switch (action.type) {
      case 'SUBMIT':
         console.log("Command submitted")
         return {command: action.command}
      default:
         return state
   }
}

export default commandReducer
