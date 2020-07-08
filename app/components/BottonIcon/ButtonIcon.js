/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import {Text} from 'native-base';
import styles from './buttonIconStyle';

const ButtonIcon = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={{...styles.buttonLayout, ...props.style}}>
      <Image
        source={props.source}
        style={{
          width: 20,
          height: 20,
          marginHorizontal: 5,
          resizeMode: 'cover',
        }}
      />
      <Text style={{fontFamily: 'Lato-bold', fontSize: 15, color: props.color}}>
        {props.text}
      </Text>
    </View>
  </TouchableHighlight>
);

export default ButtonIcon;
