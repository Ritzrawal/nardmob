/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonSocial = props => (
  <TouchableOpacity
    style={{...styles.buttonLayout, ...props.style}}
    onPress={props.onPress}>
    <View>
      <Image
        source={props.source}
        style={{width: 20, height: 20, resizeMode: 'contain'}}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textLayout: {
    width: 20,
    height: 20,
  },
});
export default ButtonSocial;
