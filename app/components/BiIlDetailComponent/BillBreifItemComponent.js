/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View} from 'native-base';
import {StyleSheet, Text} from 'react-native';
import colors from '../../utils/colors';
import {AllStyles} from '../AllStyles';

class BillBreifItemComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('bill inside', props);
  }
  render() {
    return (
      <View style={{flexDirection: 'column', margin: 10}}>
        <View style={styles.breif}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Lato-bold',
              color: colors.textcolor,
            }}>
            {this.props.title}
          </Text>
          <Text style={AllStyles.briefText}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}
export default BillBreifItemComponent;
const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},
  smallfont: {fontSize: 10},
  detailtop: {flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-start'},
  breif: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timeline: {
    flexDirection: 'column',
  },
  timelinetop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  rowspace: {flexDirection: 'row', justifyContent: 'space-between'},
});
