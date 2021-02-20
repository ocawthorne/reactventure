import { createStore, applyMiddleware, combineReducers } from 'redux';
import commandReducer from './reducers/commandReducer'

import thunk from 'redux-thunk';

const reducer = combineReducers({
    commandReducer
});

const store = createStore(reducer, applyMiddleware(thunk))

export default store
