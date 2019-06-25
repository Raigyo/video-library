// Components/News.js

import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilmList from './FilmList'
import { getBestFilmsFromApi } from '../API/TMDBApi'
import Avatar from './Avatar'

class News extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false
    }
    this._loadFilms = this._loadFilms.bind(this)
  }

  componentDidMount() {
    this._loadFilms()
  }

  _loadFilms() {
    this.setState({ isLoading: true })
    getBestFilmsFromApi(this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...this.state.films, ...data.results ],
          isLoading: false
        })
    })
  }

  render() {
    return (
    <View style={styles.main_container}>
      <View style={styles.avatar_container}>
        <Avatar/>
      </View>
      <FilmList
        films={this.state.films}
        navigation={this.props.navigation}
        loadFilms={this._loadFilms}
        page={this.page}
        totalPages={this.totalPages}
        favoriteList={false}
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

export default News
