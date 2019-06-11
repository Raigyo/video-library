// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  constructor(props) {
    super(props)
    //here we will create the properties of the component custom Search
    searchedText = "" //outside the state because we don't want to rerender each time user insert a letter
    this.page = 0 // Counter to know the current page
    this.totalPages = 0 // Number of total pages send by the API
    this.state = {
      films: [],
      isLoading: false // by default false because it doesn't load anything
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) { // if field is not empty
      this.setState({ isLoading: true }) // Launch loading
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            //films: data.results, //if we keep that we will loose all the previos movies stored in the state
            films: [ ...this.state.films, ...data.results ], // == films: this.state.films.concat(data.results), we need an array to store all the movies
            isLoading: false // stop loading logo because the content has been loaded
          })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _searchFilms() {
    // we set everything at zero in the state
    this.page = 0
    this.totalPages = 0
    //callback because we don't want to use asynchrone function
    this.setState({
      films: [],
    }, () => {
        //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Number of movies : " + this.state.films.length)
        this._loadFilms()
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
  }

  render() {
    //console.log(this.state.isLoading)
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Movie title'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          //props onSubmitEditing - https://facebook.github.io/react-native/docs/textinput.html#props
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title='Search' onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            //console.log("onEndReached")
              if (this.page < this.totalPages) {
                 this._loadFilms()
              }
          }}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20 // managed by StackNavigator
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
