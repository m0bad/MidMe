import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

class SearchForm extends Component {
    static navigationOptions = {
        header: null
      };

      state = {
        searchBarFocused: false
      }
      componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this.keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this.keyboardDidHide,
        );
      }
      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }

      keyboardDidShow = () => {
       this.setState({ searchBarFocused: true });
      }

      keyboardDidHide = () => {
        this.setState({ searchBarFocused: false });
      }


      render() {
        return (
          <View style={{ flex: 1, marginTop: 25 }}>
           <View
          style={styles.HeaderStyle}
           >
          <Animatable.View animation="slideInRight" duration={500} style={styles.SearchStyle}>
          <Animatable.View animation={this.state.searchBarFocused ? 'fadeInLeft' : 'fadeInRight'}>
          <Icon
              name={this.state.searchBarFocused ?
                   'md-arrow-back' :
                    'ios-search'
               } style={{ fontSize: 24 }}
          />
          </Animatable.View >
            <TextInput placeholder="Search" style={{ fontSize: 24, marginLeft: 15, flex: 1 }} />
          </Animatable.View>
           </View>
           <FlatList
           style={{ backgroundColor: this.state.searchBarFocused ?
                'rgba(0,0,0,0.3)' :
                 'rgba(0,0,0,0)'
             }}
           renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
           />
        </View>
        );
      }
    }


    const styles = {
      HeaderStyle: {
         height: 80,
        backgroundColor: '#f4511e',
        justifyContent: 'center',
       paddingHorizontal: 5
      },
      SearchStyle: {
        height: 50,
         backgroundColor: 'white',
          flexDirection: 'row',
           padding: 5,
            alignItems: 'center'
      }
};


export { SearchForm };
