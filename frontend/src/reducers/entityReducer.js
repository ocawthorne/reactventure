const defaultState = {
   allEntities = [],
   isLoading: false
}

const entityReducer = (state=defaultState, action) => {
   switch(action.type) {
      case "LOADING_ENTITIES":
         return {...state, isLoading: true}
      case "FETCH_ENTITIES_SUCCESS":
         return {...state, allEntities: action.entities, isLoading: false}
      default:
         return state
   }
} 
