import { createStore, applyMiddleware, /*combineReducers*/ } from 'redux';
import commandReducer from './reducers/commandReducer'
// import loginReducer from './reducers/loginReducer'

import thunk from 'redux-thunk';

// const reducer = () => combineReducers({
//     commandReducer,
//     loginReducer
// });

const store = createStore(commandReducer, applyMiddleware(thunk))

export default store
