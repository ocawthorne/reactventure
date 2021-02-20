export const updateEntryField = (command) => {
   return {
      type: "UPDATED_COMMAND",
      command
   }
} 

export const resetEntryField = () => {
   return {
      type: "RESET_COMMAND",
      command: ''
   }
} 
