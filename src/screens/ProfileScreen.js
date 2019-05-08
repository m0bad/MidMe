
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class ProfileScreen extends Component {
  render() {
    return (
      <View>
          <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
          <Button title="SignUp" onPress={() => this.props.navigation.navigate('Signup')} />
      </View>
    );
  }
}

export default ProfileScreen;
