const defaultState = {
   allEntities: [],
   isLoading: false
}

export const entities = (state=defaultState, action) => {
   switch(action.type) {
      case "LOADING_ENTITIES":
         return {...state, isLoading: true}
      case "FETCH_ENTITIES_SUCCESS":
         return {...state, allEntities: action.entities, isLoading: false}
      default:
         return state
   }
}
