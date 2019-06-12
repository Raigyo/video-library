// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // the movie has not been loaded yet
      isLoading: true // loading when the view is opened
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      // if true : display loading screen
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>
          {this.state.film.title}
          // - Background / backdrop_path
          // - Titre / title
          // - Resumé / overview
          // - Sortie / release_date
          // - Notes / vote_average
          // - Votes / vote_count
          // - Budget / budget
          // - Genre / genres
          // - Compagnie / production_companie
          </Text>
        </ScrollView>
      )
    }
  }

  render() {
  return (
    <View style={styles.main_container}>
      {this._displayLoading()}
      {this._displayFilm()}
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  }
})

export default FilmDetail
