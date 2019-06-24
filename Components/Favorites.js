// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.avatar_container}>
          <Avatar/>
        </View>
        <FilmList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favoriteList={true} // we're in the favourite list, it won't load more movies
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})


//We connect the store and states favorite movies
// to our component Search
//we have 2 reducers so we have to define that we need toggleFavorite from store
const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)
