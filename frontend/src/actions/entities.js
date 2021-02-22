export const fetchEntitiesSuccess = (entities) => {
   return {
      type: "FETCH_ENTITIES_SUCCESS",
      entities
   }
}

//? Asynchronous Action Creators

export const getAllEntities = () => {
   return dispatch => {
      dispatch({type: "LOADING_ENTITIES"})
      return (
         fetch("http://localhost:3000/api/v1/entities", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
         })
         .then(resp => resp.json())
         .then(entities => {
            dispatch(fetchEntitiesSuccess(entities))
         })
      )
   }
}
