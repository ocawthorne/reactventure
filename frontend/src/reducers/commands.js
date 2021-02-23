const help = `COMMANDS:\n
"get/pick up/grab [item]" will add it to your inventory.\n
"use [item] on [another object]" will apply the first object to the second.\n
"look at [item]" will allow you to inspect it.\n
"touch/feel [item]" will let you feel thje object.\n
"help" will display these choices again.`

const hitDialogues = [
   `Violence is never the answer.`,
   `That hurt, and it did nothing. Thanks.`,
   `Didn't your mother teach you anything?`,
   `Ow.`,
   `Great, now I'm going to get a bruise.`
]

const prayDialogues = [
   `God says: "You must lead the people to the Promised Land!"\nYou'll do it next weekend.`,
   `God finds it surprising that you need His help in such a simple game.\nHis omniscience gets the better of Him sometimes.`,
   `I prayed and nothing happened. Maybe next time.`,
   `I knelt down to pray and felt a slight crick in my back. I should get that checked out.`,
   `God suggests that you look around the room a bit more.\nI think He's busy.`
]

const defaultState = {
   //! Inventory-related state
   currentUser: '',    //? When a login is prompted, this value will be the user ID.
   allEntities: [],
   entitiesLoading: false,
   userObjects: [],    //? Starting empty at the beginning of the game, this is populated through 'get x' commands.
   knownObjects: ['crowbar','door','desk','drawer','paper','candle','chest'],   //? Gradually populated based on event.

   //! History-related state
   userHistory: [
      `I've woken up in a strange, damp little room with only a door in front of me.\n
      There is a desk on the left of me with a lit candle on top of it and a piece of paper next to the candle.\n
      An old chest sits to the right of me.\n
      A crowbar lies in front of the door.\n 
      ${help}\n `
   ],    //? This array stores every piece of narrative, feedback, and command that the user has prompted. This is rendered to the History container.

   //! Command-related state
   command: '',        //? This is modified when the user types in an input. When executed, this command is split into its respective words for further processing.
   uniqueEvents: {
      openedChest: false, //? This event is triggered by "use crowbar on chest" or "open chest with crowbar". Also destroys crowbar.
      meltedIce: false
   }
}                      //! Specifically: "get x", "use x on y", "open x", and so on.

function aHNC(state, notification) { // Add History No Change (aHNC)
   return {...state, userHistory: [...state.userHistory, `> ${state.command}\n${notification}\n `]}
}

export const commands = (state=defaultState, action) => {
   console.log('Landed in command reducer.')
   switch (action.type) {
      case 'UPDATED_COMMAND':
         return {...state, command: action.command}
      case 'SUBMITTED_COMMAND':
         let cmdSplit = action.command.split(" ")
         let history = state.userHistory
         let item = cmdSplit[cmdSplit.length - 1]
         switch(cmdSplit[0]) {
            case 'get': //! Handling inventory changes
            case 'pick':
            case 'grab':
               if (!state.knownObjects.includes(item)) {
                  return aHNC(state, `I don't know what '${item}' is.`)
               } else if (state.userObjects.includes(item)) {
                  return aHNC(state, `I already have that!`)
               } else {
                  if (state.allEntities.filter(obj => obj.name === item)[0].obtainable) {
                     let notification = `I picked up the ${item}.`
                     return {...state, userObjects: [...state.userObjects, item], userHistory: [...history, `> ${action.command}\n${notification}\n `]}
                  } else {
                     return aHNC(state, `I can't pick that up!`)
                  }
               }
            case 'look':
               if (!state.knownObjects.includes(item)) {
                  return aHNC(state, `I don't know what '${item}' is.`)
               } else {
                  return aHNC(state, state.allEntities.filter(obj => obj.name === item)[0].description)
               }
            case 'touch':
            case 'feel':
               if (!state.knownObjects.includes(item)) {
                  return aHNC(state, `I don't know what '${item}' is.`)
               } else {
                  return aHNC(state, state.allEntities.filter(obj => obj.name === item)[0].feel)
               }
            case 'use': //! Handling the combination of two knownObjects.
               return {...state, command: state.command}
            case 'help':
               return aHNC(state, help)

            
            case 'open':
               if (cmdSplit.length > 2) {
                  return aHNC(state, `Remember: the format for most commands is "use [first item] on [second item]".`)
               }
            //? For fun
            case 'pray': //! TO ADD ABOVE: Miscellaneous commands such as open, look.
               return aHNC(state, prayDialogues[action.randomIndex])
            case 'punch':
            case 'hit':
               return aHNC(state, hitDialogues[action.randomIndex])
            default:
               return {...state, userHistory: [...history, `> ${action.command}\nI don't know how to do that.\n `]}
         }



      //? Loading entities
      case "LOADING_ENTITIES":
         console.log('Loading entities')
         return {...state, isLoading: true}
      case "FETCH_ENTITIES_SUCCESS":
         console.log('Entity fetch succeeded')
         return {...state, allEntities: action.allEntities, entitiesLoading: false}
      default:
         return state
   }
}
