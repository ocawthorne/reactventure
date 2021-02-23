export const fetchEntitiesSuccess = (allEntities) => {
   console.log('Sending action to fetch entities.')
   return {
      type: "FETCH_ENTITIES_SUCCESS",
      allEntities
   }
} 

// export const getAllEntities = () => {
//    console.log('Fetching entities...')
//    // return dispatch => {
//    //    return (
//          fetch("http://localhost:3000/api/v1/entities", {
//             method: "GET",
//             headers: {
//                "Content-Type": "application/json",
//                "Access-Control-Allow-Origin": "*"
//             }
//          })
//          .then(resp => resp.json())
//          .then(allEntities => {
//             console.log('About to dispatch fetchEntitiesSuccess')
//             // return allEntities
//          })
//    //    )
//    // }
// }

export const getAllEntities = () => {
   return dispatch => {
      dispatch({type: 'LOADING_ENTITIES'})
      return (
         fetch("http://localhost:3000/api/v1/entities", {
         credentials: "include",
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": true
         }
         })
         .then(r => r.json())
         .then(entities => {
            dispatch(fetchEntitiesSuccess(entities));
            })
         .catch(error => {
            console.log("Error: ", error);
            })
      )
   }
}
