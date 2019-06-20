// Store/Reducers/favoriteReducer.js

//REDUCER

//initial state
const initialState = { favoritesFilm: [] }

//reducer need a state and an action
function toggleFavorite(state = initialState, action) {
  //new instance of state
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      // findIndex: find a value in an array, if false => -1
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // the movie is already in the favourite list: remove it
        // copy of the state in a new object (using `...state`)
        // remove selected movie in the movie list with `filter` // returns a new array
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // the movie is not in the favourite list yet: add it
        //we ad the new movie to the existing
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value]
        }
      }
      return nextState || state //if undefined => state
  default:
    return state
  }
}

export default toggleFavorite
