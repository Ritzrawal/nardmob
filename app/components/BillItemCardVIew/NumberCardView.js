/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, Text, Body} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../utils/colors';

const NumberCardView = props => (
  <Body
    style={{
      flexDirection: 'column',
    }}>
    <Card style={styles.boxBlue}>
      <Text style={styles.textstyle}>{props.time}</Text>
    </Card>

    <Text
      style={{
        fontSize: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
      {props.title}
    </Text>
  </Body>
);

export default NumberCardView;

const styles = EStyleSheet.create({
  textstyle: {
    fontSize: '10rem',
    fontWeight: 'bold',
    padding: 7,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  boxBlue: {backgroundColor: colors.primaryBlueColor},
});
