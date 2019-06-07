// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
          <View style={styles.main_container}>
            <TextInput style={styles.textinput} placeholder='Movie title'/>
            <Button style={styles.textinput}  title='Search' onPress={() => {}}/>
               {/*
               <FlatList
                 data={this.state.dataSource}
                 renderItem={({item}) => <Text>{item.key}</Text>
               />
              */}
            <FlatList
              data={films}
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
