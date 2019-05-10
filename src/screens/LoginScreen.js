import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import LoginForm from '../components/LoginForm';
import reducers from '../reducers';


class LoginScreen extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   
       return (
         <Provider store={store}>
         <LoginForm />
         </Provider>
       );
     }
}

export { LoginScreen };
