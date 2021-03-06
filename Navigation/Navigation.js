// Navigation/Navigations.js

import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import News from '../Components/News'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search, // name of the view
    navigationOptions: {
      title: 'Search a movie'
    }
  },
  FilmDetail: {
    screen: FilmDetail // name of the view
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites, // name of the view
    navigationOptions: {
      title: 'Favourite movies'
    }
  },
  FilmDetail: {
    screen: FilmDetail // name of the view
  }
})

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Latest movies',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator, // name of the view
      navigationOptions: {
        tabBarIcon: () => { //add icon
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator, // name of the view
      navigationOptions: {
        tabBarIcon: () => { //add icon
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    },
    News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_fiber_new.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // background color for selected tabs
      inactiveBackgroundColor: '#FFFFFF', // background color for unselected tabs
      showLabel: false, // hide titles
      showIcon: true // TabNavigator will display defined icons only
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
