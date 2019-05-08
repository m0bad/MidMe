import React, { Component } from 'react';
import {
  View,
  // Text,
  Button
} from 'react-native';

class SearchScreen extends Component {
  render() {
    return (
      <View>
        <Button
            title='searchFor'
            onPress={() => this.props.navigation.navigate('Result')}
        />
      </View>
    );
  }
}

export { SearchScreen };
