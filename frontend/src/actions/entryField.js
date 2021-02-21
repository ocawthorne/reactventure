export const updateEntryField = (command) => {
   return {
      type: "UPDATED_COMMAND",
      command
   }
} 

export const submitEntryField = (command) => {
   return {
      type: "SUBMITTED_COMMAND",
      command
   }
} 
