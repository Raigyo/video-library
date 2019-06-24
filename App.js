// App.js

import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux';
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
      /*PROVIDER with store prop that initializes the Store*/
      <Provider store={Store}>
      {/*PersistGate rehydrate children components*/}
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    )
  }
}
