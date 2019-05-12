
import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchMedsData } from '../reducers/FetchMedsReducer';
import { fetchPharsData } from '../reducers/FetchPharsReducer';

const mapStateToProps = (state) => {
    return {
        medicines: state.fetchMeds.medicines,
        pharmacies: state.fetchPhars.pharmacies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMedsData: () => dispatch(fetchMedsData()),
        fetchPharsData: () => dispatch(fetchPharsData())

    };
};

class HomeScreen extends Component {
     componentWillMount() {
        this.props.fetchMedsData();
        this.props.fetchPharsData();
    }

     renderMeds() {
         // console.log('NOW: '+this.props.medicines.price);
    if (this.props.medicines) { //if no show a spinner or something
    return this.props.medicines.map((med, index) => {
        // console.log(index + ': ' + med.name);
      return (
        <View key={index}>
            <Text>{med.name}</Text>
            <Text>{med.price}</Text>
        </View>
      );
    });
}
    return (
        <Text>Hello THERE</Text>
    );
}

    renderPhars() {
        // console.log('NOW: '+this.props.medicines.price);
    if (this.props.pharmacies) { //if no show a spinner or something
    return this.props.pharmacies.map((phar, index) => {
       // console.log(index + ': ' + med.name);
     return (
       <View key={index}>
           <Text>{phar.name}</Text>
           <Text>{phar.canDeliver}</Text>
       </View>
     );
    });
    }
return (
   <Text>Hello THERE</Text>
);
}

  render() {
    return (
      <View>
            <Text>IT WORKS</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
