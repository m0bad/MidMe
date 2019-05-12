
import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchMedsData } from '../reducers/FetchMedsReducer';

const mapStateToProps = (state) => {
    return {
        medicines: state.fetchMeds.medicines,
        loading: state.fetchMeds.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMedsData: () => dispatch(fetchMedsData())
    };
};

class HomeScreen extends Component {
     componentWillMount() {
        this.props.fetchMedsData();
    }

     lapsList() {
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

  render() {
      console.log(Array.isArray(this.props.medicines));
      // console.log(this.props.medicines);
    return (
      <View>

          {this.lapsList()}
      </View>
    );
  }
}

// export default connect(mapStateToProps)(HomeScreen);
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
