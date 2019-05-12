
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { fetchMedsData } from '../reducers/FetchMedsReducer';
import { fetchPharsData } from '../reducers/FetchPharsReducer';
import { SearchForm } from '../components/SearchForm';

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
    static navigationOptions = {
    header: null
    };
     componentWillMount() {
        this.props.fetchMedsData();
        this.props.fetchPharsData();
    }

     renderMeds() {
    if (this.props.medicines) { //if no show a spinner or something
    return this.props.medicines.map((med, index) => {
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
    if (this.props.pharmacies) { //if no show a spinner or something
    return this.props.pharmacies.map((phar, index) => {
     return (
       <View key={index}>
           <Text>{phar.name}</Text>
           <Text>{phar.canDeliver}</Text>
       </View>
     );
    });
    }
}
render() {
    console.log(this.props.medicines);
    console.log(this.props.pharmacies);
return (
    <ScrollView>
        <SearchForm />
      </ScrollView>
);
}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
