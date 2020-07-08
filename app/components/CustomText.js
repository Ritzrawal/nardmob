import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Text} from 'native-base';

const CustomText = () => <Text style={styles.textstyle}>p</Text>;

const styles = StyleSheet.create({
  textstyle: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});
export default CustomText;
