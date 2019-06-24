// Store/configureStore.js

//STORE

import { createStore, combineReducers } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
import setAvatar from './Reducers/avatarReducer'
//we import the reducer in the store

//we create a store

//export default createStore(toggleFavorite)
export default createStore(combineReducers({toggleFavorite, setAvatar}))
