
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
} from 'react-native';
import { SearchForm } from '../components/SearchForm';

// import DrawerNavigator from '../Routers/DrawerNavigator';
// import { StackNavigator, DrawerNavigator, TabsNavigator } from '../Routers';

export default class HomeScreen extends Component {
  static navigationOptions = {
  header: null
  };
  render() {
    return (
    <ScrollView>
        <SearchForm />
       </ScrollView>
    );
  }
}

// export default HomeScreen;
