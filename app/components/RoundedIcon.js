import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const RoundedIcon = props => (
  <View {...props} style={{...styles.main, ...props.mainStyle}}>
    <Image
      {...props}
      source={{uri: props.uri, cache: 'force-cache'}}
      style={{...styles.imgView, ...props.mainStyle}}
    />
  </View>
);

const styles = StyleSheet.create({
  main: {
    height: 100,
    width: 100,
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 5, width: 0},
    borderRadius: 50,
  },
  imgView: {
    height: 98,
    width: 98,
    borderRadius: 50,
  },
});
export default RoundedIcon;
