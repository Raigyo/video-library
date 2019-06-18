// Store/configureStore.js

//STORE

import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
//we import the reducer in the store

//we create a store

export default createStore(toggleFavorite)
