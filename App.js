
import React, { Component } from 'react';
import firebase from 'firebase';
import Navigator from './src/navigation/Navigator';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
          apiKey: 'AIzaSyB8dqhIpejo7erXt-_Uz6n-19HlHftTimM',
          authDomain: 'midme-e2498.firebaseapp.com',
          databaseURL: 'https://midme-e2498.firebaseio.com',
          projectId: 'midme-e2498',
          storageBucket: '"midme-e2498.appspot.com',
          messagingSenderId: '382262312070',
          appId: '1:382262312070:web:6e485ee2e782d470'
        };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
        <Navigator />
    );
  }
}

export default App;
