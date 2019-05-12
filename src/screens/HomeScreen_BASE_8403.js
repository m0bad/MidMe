
import React, { Component } from 'react';
import {
  View,
  // Text,
  Button,
} from 'react-native';
// import DrawerNavigator from '../Routers/DrawerNavigator';
// import { StackNavigator, DrawerNavigator, TabsNavigator } from '../Routers';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button
            title='Search'
            onPress={() => this.props.navigation.navigate('Search')}
        />

      </View>
    );
  }
}

// export default HomeScreen;
