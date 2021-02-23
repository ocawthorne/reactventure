import { combineReducers } from 'redux'
import { commands } from './commands'
import { logins } from './logins'

export default combineReducers({
   commands,
   logins
})
