// Navigation/Navigation.js

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Search: { // name of the view
    screen: Search, //route
    navigationOptions: {
      title: 'Search'
    }
  },
  FilmDetail: { // name of the view
    screen: FilmDetail //route
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator
  },
  Favorites: {
    screen: Favorites
  }
})
export default createAppContainer(MoviesTabNavigator)
