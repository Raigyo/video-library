// App.js

import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      //PROVIDER with store prop that initializes the Store
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}
