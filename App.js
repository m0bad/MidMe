
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Navigator from './src/navigation/Navigator';
import { db } from './src/config'; //DON'T DELETE THIS LINE

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
  }
}

export default App;
