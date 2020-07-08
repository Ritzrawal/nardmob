/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CardItem, Text} from 'native-base';
import colors from '../../utils/colors';
import CountDowns from '../../utils/CountDowns';
import moment from 'moment';
const BottomVoteNow = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        elevation: 5,
        borderTopWidth: 0.5,
        shadowColor: 'gray',
        borderColor: 'gray',
        shadowRadius: 10,
        shadowOpacity: 1,
      }}>
      <CardItem style={(styles.mains, props.style)}>
        <View
          style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-start'}}>
          <CountDowns
            until={checkdates(props.detail)}
            size={15}
            digitStyle={{backgroundColor: colors.primaryBlueColor}}
            digitTxtStyle={{color: '#ffffff'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
                flexGrow: 1,
                backgroundColor: colors.secondaryYellowColor,
              }}>
              <Image
                style={{width: 15, height: 15, marginHorizontal: 5}}
                source={require('../../../assets/checkmd.png')}
              />
              <Text style={{color: 'white', fontFamily: 'Lato-bold'}}>
                Vote Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </CardItem>
    </View>
  </TouchableOpacity>
);
function checkdates(finalss) {
  var mo = moment(finalss).diff(moment(), 'seconds');

  return mo;
}
export default BottomVoteNow;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
  },
  textLayout: {
    width: 20,
    height: 20,
  },

  mains: {alignItems: 'center', marginTop: 1, marginBottom: 1},
});
