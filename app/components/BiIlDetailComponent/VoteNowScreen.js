/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import React from 'react';
import {View, Card, CardItem, Button, TouchableOpacity} from 'native-base';
import {Image, Text} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import colors from '../../utils/colors';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import BottomLayout from './BottomLayout';
import {AllStyles} from '../AllStyles';

class CitizenPoll extends React.Component {
  render() {
    var radio_props = [
      {label: 'For ..%', value: 0},
      {label: 'Against--%', value: 1},
      ,
    ];
    let view = [];

    view.push(
      <Card style={styles.cardview}>
        <CardItem style={{backgroundColor: '#11111100'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Citizen'S polls(5k-10k Voters)
            </Text>
          </View>
        </CardItem>

        <CardItem style={{backgroundColor: '#11111100'}}>
          <View style={{flexDirection: 'column'}}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={false}
              buttonSize={10}
              buttonColor={'#fff'}
              selectedButtonColor={'#fff'}
              labelColor={'#fff'}
              selectedLabelColor={'#fff'}
              onPress={() => {}}
            />
          </View>
          <View style={styles.imageIcon}>
            <Image
              source={require('../../../assets/lock.png')}
              style={styles.iconSTyles}
            />
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                VOTE TO UNLOCK RESULT
              </Text>
            </View>
          </View>
        </CardItem>
        <View>
          <BottomLayout style={styles.buttomstyling} />
        </View>
      </Card>,
    );

    return (
      <View style={{flexDirection: 'column'}}>
        <ScrollView horizontal>{view}</ScrollView>
      </View>
    );
  }
}
export default CitizenPoll;

const styles = EStyleSheet.create({
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
  rowspace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardview: {
    backgroundColor: colors.primaryBlueColor,
    width: 350,
    // zIndex: 2,
    // height: '100%',
    elevation: 5,
    margin: 2,
    // marginBottom: '15rem',
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    borderRadius: 5,
  },
  buttomstyling: {
    backgroundColor: colors.primaryBlueColor,
    // height: 'auto',
  },
  imageIcon: {
    display: 'flex',
    position: 'absolute',
    right: '5%',
    // display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  iconSTyles: {
    display: 'flex',
    alignSelf: 'center',
  },
});
