// Components/Search.js
import React from 'react'
import { ActivityIndicator, StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'   // import { } from ... because it's an export from TMDBApi.js

class Search extends React.Component {

  constructor(props) {
    super(props)
    //here we will create the properties of the component custom Search
    searchedText = "" //outside the state because we don't want to rerender each time user insert a letter
    this.state = {
      films: [],
      isLoading: false // by default false because it doesn't load anything
    }
  }

  // underscore means private method, not effective btw, because JS doesn't take private/public modifier into account
    _loadFilms() {
      if (this.searchedText.length > 0) { // if field is not empty
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
            this.setState({
              films: data.results,
              isLoading: false // stop loading logo because the content has been loaded
             })

        })
      }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
      console.log(this.state.isLoading)
        return (
          <View style={styles.main_container}>
            <TextInput
              style={styles.textinput}
              placeholder='Movie title'
              onChangeText={(text) => this._searchTextInputChanged(text)}
              //props onSubmitEditing - https://facebook.github.io/react-native/docs/textinput.html#props
              onSubmitEditing={() => this._loadFilms()}
            />
            <Button
              style={styles.textinput}
              title='Search'
              onPress={() => this._loadFilms()}
            />
               {/*
               <FlatList
                 data={this.state.dataSource}
                 renderItem={({item}) => <Text>{item.key}</Text>
               />
              */}
            <FlatList
              //data={films}
              data={this.state.films}
              keyExtractor={(item) => item.id.toString()}
              //we send the prop film -that content the current film items in the loop- to FilmItem
              renderItem={({item}) => <FilmItem film={item}/>}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})
export default Search
