const defaultState = {
   currentUser: '',    //? When a login is prompted, this value will be the user ID.
   userObjects: [],    //? Starting empty at the beginning of the game, this is populated through 'get x' commands.
   knownObjects: ['crowbar','candle','desk','chest','door'],
   userHistory: [],    //? This array stores every piece of narrative, feedback, and command that the user has prompted. This is rendered to the History container.
   command: ''         //? This is modified when the user types in an input. When executed, this command is split into its respective words for further processing.
}                      //! Specifically: "get x", "use x on y", "open x", and so on.


const commandReducer = (state=defaultState, action) => {
   switch (action.type) {
      case 'UPDATED_COMMAND':
         return {...state, command: action.command}
      case 'SUBMITTED_COMMAND':
         let history = state.userHistory
         let cmdSplit = action.command.split(" ")
         let item = cmdSplit[cmdSplit.length - 1]
         switch(cmdSplit[0]) {
            case 'get': //! Handling inventory changes
               console.log('This is a get!')
               if (!state.knownObjects.includes(item)) {
                  let notification = `I don't know what '${item}' is.`
                  return {...state, userHistory: [...history, `${action.command}\n${notification}`]}
               } else if (state.userObjects.includes(item)) {
                  console.log(`${item} already in inventory.`)
                  let notification = "I already have that!"
                  return {...state, userHistory: [...history, `${action.command}\n${notification}`]}
               } else {
                  let notification = `I picked up the ${item}.`
                  return {...state, userObjects: [...state.userObjects, item], userHistory: [...history, `${action.command}\n${notification}`]}
               }
            case 'use': //! Handling the combination of two objects in inventory.
               console.log('This is a use!')
               return {...state, command: state.command}
            default: //! TO ADD ABOVE: Miscellaneous commands such as open.
               console.log('This is default.')
               return state   
         }

      default:
         return state
   }
   
}

export default commandReducer
