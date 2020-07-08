/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {increment} from '../../actions/couterAction';
import {getPosts} from '../../actions/fakeApiCall';
import {Logout} from '../../actions/LoginScreenApi';
class HomeScreen extends React.Component {
  gotologin = () => {
    this.props.Logout();
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            this.gotologin();
          }}>
          <Text>increase</Text>
        </TouchableOpacity>
        <Text>
          {' '}
          counter:
          {this.props.counter}
        </Text>
        <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <Button
          title="Go to Sign In"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />

        <Button
          title="Call API from AXIOS"
          onPress={() => this.props.getPosts()}
        />
        {this.props.data.map(val => (
          <View key={val.id}>
            <Text>{val.email}</Text>
          </View>
        ))}

        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://facebook.github.io/react/logo-og.png',
            cache: 'force-cache',
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.authReducer.counter,
    data: state.apiReducer.data,
    logined: state.authReducer.loggedIn,
  };
}

// function mapDispatchToprops(dispatch)
// {
//   return{
//     increaseCounter:()=>dispatch({type:"increase"}),
//     decreaseCounter:()=>dispatch({type:"decrease"}),
//   };
// }

export default connect(
  mapStateToProps,
  {increment, getPosts, Logout},
)(HomeScreen);
