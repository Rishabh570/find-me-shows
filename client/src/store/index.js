import { createStore } from 'redux'
import combinedReducers from '../reducers/index'

// No middleware is included yet
const store = createStore(combinedReducers)

export default store