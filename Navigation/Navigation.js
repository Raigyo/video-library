// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

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
export default createAppContainer(SearchStackNavigator)
