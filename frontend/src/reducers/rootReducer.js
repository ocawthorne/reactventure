import { combineReducers } from 'redux'
import { commands } from './commands'
import { entities } from './entities'
import { logins } from './logins'

export default combineReducers({
   commands,
   entities,
   logins
})
