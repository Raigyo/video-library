// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // the movie has not been loaded yet
      isLoading: true // loading when the view is opened
    }
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


render() {
  return (
    <View style={styles.main_container}>
      {this._displayLoading()}
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
  }
})

export default FilmDetail
