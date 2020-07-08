/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

import {
  TextInputIcon,
  ButtonIcon,
  // ButtonSocial
} from '../../components';

class ForgotScreen extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Image
            source={require('../../../assets/mainlogo.png')}
            style={styles.imageview}
          />
        </View>

        <View style={styles.login}>
          <TextInputIcon
            style={{marginTop: 20, width: '100%', height: 50}}
            placeholderText="Your Email"
            lpic={require('../../../assets/email.png')}
            rpic={require('../../../assets/editxs.png')}
          />

          <ButtonIcon
            text="Send Reset Code"
            source={require('../../../assets/sendmd.png')}
            color="white"
            style={{
              marginTop: 20,
              width: '100%',
              height: 50,
              backgroundColor: 'orange',
            }}
          />

          <View style={styles.remmeberlayout}>
            <Text
              style={{
                fontSize: 11,
                color: 'gray',
                fontFamily: 'Lato-regular',
                opacity: 0.7,
              }}>
              IF YOU REMEMBER YOUR PASSWORD
            </Text>
          </View>

          <ButtonIcon
            text="Login"
            source={require('../../../assets/loginyellow.png')}
            style={{marginTop: 5, width: '100%', height: 50}}
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#001142',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    justifyContent: 'center',
  },
  remmeberlayout: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    height: 20,
  },
});
export default ForgotScreen;
