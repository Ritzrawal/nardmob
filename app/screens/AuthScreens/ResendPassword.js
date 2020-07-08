/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {
  TextInputIcon,
  ButtonIcon,
  // ButtonSocial
} from '../../components';

class ResendPassword extends React.Component {
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
          <TextInputIcon style={{marginTop: 20, width: '100%', height: 50}} />
          <TextInputIcon style={{marginTop: 10}} />
          <TextInputIcon style={{marginTop: 10}} />

          <ButtonIcon
            text="Login"
            source={require('../../../assets/login.png')}
            style={{
              marginTop: 20,
              width: '100%',
              height: 50,
              backgroundColor: 'orange',
            }}
          />

          <View style={styles.remmeberlayout}>
            <Text style={{color: 'gray'}}>If your code doesnt arrive in</Text>
            <Text style={{color: 'white', fontSize: 15, marginTop: 5}}>
              02:56 MIn
            </Text>
          </View>

          <ButtonIcon
            text="Resend reset Password"
            source={require('../../../assets/login.png')}
            style={{marginTop: 30, width: '100%', height: 50}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#001142',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    justifyContent: 'center',
  },
  remmeberlayout: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    height: 20,
  },

  sociallayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ResendPassword;
