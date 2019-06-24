// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button, TouchableOpacity, Share, Platform} from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'
import EnlargeShrink from '../Animations/EnlargeShrink'

class FilmDetail extends React.Component {

  //IOS button share top navigation
  static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state
      // We access the shareFilm function and the movie using the parameters added to the navigation
      if (params.film != undefined && Platform.OS === 'ios') {
        return {
            //We use Touchable to display an image
            headerRight: <TouchableOpacity
                            style={styles.share_touchable_headerrightbutton}
                            onPress={() => params.shareFilm()}>
                            <Image
                              style={styles.share_image}
                              source={require('../Images/ic_share.png')} />
                          </TouchableOpacity>
        }
      }
  }

  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // the movie has not been loaded yet
      isLoading: true // loading when the view is opened
    }
     this._shareFilm = this._shareFilm.bind(this) //IOS share: we have to bind otherwise it will be undefined
  }

  //IOS share: Function to switch the _shareFilm function and movie to the navigation settings. So we will have access to these datas when when we will the headerRight
  _updateNavigationParams() {
    this.props.navigation.setParams({
      shareFilm: this._shareFilm,
      film: this.state.film
    })
  }

  componentDidMount() {
    // IOS share: when the movie is loaded, we update the navigation settings (with the function _updateNavigationParams) to display the share button
    const favoriteFilmIndex = this.props.favoritesFilm.findIndex(item => item.id === this.props.navigation.state.params.idFilm)
    if (favoriteFilmIndex !== -1) {
      this.setState({
        film: this.props.favoritesFilm[favoriteFilmIndex]
      }, () => { this._updateNavigationParams() })
      return
    }

    this.setState({ isLoading: true })
    //retrieve film details from API
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      }, () => { this._updateNavigationParams() })
    })
  }

  /*componentDidUpdate() {
    console.log("componentDidUpdate : ")
    console.log(this.props.favoritesFilm)
  }*/

  //loading animation
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

  //share function - warning: empty message on FB due to FB policy
  async _shareFilm() {
    const { film } = this.state

    try {
      await Share.share({ title: film.title, message: film.overview })
      console.log('successfully opened a share');
    } catch (e) {
      console.log('some sort of problem sharing device info out: ', e);
    }
  }

  //display film file
  _displayFilm() {
    const { film } = this.state
    if (film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.backdrop_path)}}
          />
          <Text style={styles.title_text}>{film.title}</Text>
          <TouchableOpacity
            style={styles.favorite_container}
            onPress={() => this._toggleFavorite()}>
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
          {/*to custom buttons we have to use TouchableOpacity instead of button*/}

        </ScrollView>
      )
    }
  }

  //toggle heart/favourite
  _toggleFavorite() {
      const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
      this.props.dispatch(action)
  }

  //display heart/favourite
  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png')
    var shouldEnlarge = false // By default. On click  => shouldEnlarge to true
    if (this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
      sourceImage = require('../Images/ic_favorite.png')
      shouldEnlarge = true // If the movie in the favourite. . On click  => shouldEnlarge to false
    }
    return (
      <EnlargeShrink
        shouldEnlarge={shouldEnlarge}>
        <Image
          style={styles.favorite_image}
          source={sourceImage}
        />
      </EnlargeShrink>
    )
  }

  //Android: floating button share
  _displayFloatingActionButton() {
    const { film } = this.state
    if (film != undefined && Platform.OS === 'android') { // on Android when the movie is loaded
      return (
        <TouchableOpacity
          style={styles.share_touchable_floatingactionbutton}
          onPress={() => this._shareFilm()}>
          <Image
            style={styles.share_image}
            source={require('../Images/ic_share.png')} />
        </TouchableOpacity>
      )
    }
  }

  render() {
    //console.log(this.props)
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
        {this._displayFloatingActionButton()}
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
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  favorite_container: {
    alignItems: 'center', // align child component on x axis
  },
  favorite_image:{
    flex: 1,
    width: null,
    height: null
  },
  share_touchable_floatingactionbutton: {
   position: 'absolute',
   width: 60,
   height: 60,
   right: 30,
   bottom: 30,
   borderRadius: 30,
   backgroundColor: '#e91e63',
   justifyContent: 'center',
   alignItems: 'center'
  },//Android
  share_image: {
   width: 30,
   height: 30
  },//Android
  share_touchable_headerrightbutton: {
  marginRight: 8
  }//IOS
})

//We connect the store and states favorite movies
// to our component Search
//we have 2 reducers so we have to define that we need toggleFavorite from store
const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

//mapStateToProps in connect  => connect  state changes /store and component
//states are mapped to props of this component
export default connect(mapStateToProps)(FilmDetail)
