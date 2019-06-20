// Navigation/Navigation.js

import React from 'react'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native';
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
    screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => { //add icon
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/> // style to resize
        }
      }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => {//add icon
        return <Image
          source={require('../Images/ic_favorite.png')}
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
