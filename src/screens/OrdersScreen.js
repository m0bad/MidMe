import React, { Component } from 'react';
import {
  View,
  Button,
} from 'react-native';

class OrdersScreen extends Component {
 render() {
    return (
     <View>
      <Button
          title='OrdersScreen'
          onPress={() => this.props.navigation.navigate('Result')}
      />
    </View>
      );
  }
}


export { OrdersScreen };
