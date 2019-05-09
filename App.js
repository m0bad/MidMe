// import React, { Component } from 'react';

// import Navigator from './src/navigation/Navigator';

// export default class App extends Component {
//   render() {
//     return (

//         <Navigator />

//     );
//   }
// }
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

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
      <Provider store={createStore(reducers)}>
      <LoginForm />
      </Provider>
    );
  }
}

export default App;
