// Store/configureStore.js

//STORE

import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//we import the reducer in the store

//we create a store
const rootPersistConfig = {
  key: 'root',
  storage: storage
}
//export default createStore(toggleFavorite)
//export default createStore(combineReducers({toggleFavorite, setAvatar}))
//persistCombineReducers for Redux persistance
export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}))
