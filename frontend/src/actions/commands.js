export const fetchInventorySuccess = (inventory) => {
   return {
      type: "GET_INVENTORY_SUCCESS",
      inventory
   }
}

export const addEntityToInventory = (entity) => {
   return {
      type: "ADD_ENTITY_SUCCESS",
      entity
   }
}

export const removeEntityFromInventory = (entity) => {
   return {
      type: "REMOVE_ENTITY_SUCCESS",
      entity
   }
}
