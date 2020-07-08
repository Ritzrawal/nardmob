/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem, Icon} from 'native-base';
import {Image, Dimensions, Text, TouchableOpacity} from 'react-native';

import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AllStyles} from '../AllStyles';

var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});

const BillTimelineComponent = props => (
  <View style={styles.timeline}>
    <View style={styles.timelinetop}>
      <View style={{flexDirection: 'row', alignSelf: 'baseline'}}>
        <Image
          source={require('../../../assets/timeline.png')}
          style={styles.IconBig}
        />

        <Text style={AllStyles.HeaderCardText}>Bill Timeline</Text>
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.row}>
          <Text
            style={{alignSelf: 'center', marginHorizontal: 5, fontSize: 12}}>
            View All
          </Text>
          <Icon
            style={{colors: 'gray', fontSize: 14, marginHorizontal: 3}}
            name="ios-arrow-forward"
            type="Ionicons"
          />
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.rowspace}>
      {props.detail.map((it, i) => {
        console.log('first timeline', props.detail);
        return (
          <View style={styles.col} key={i}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{height: 0.5, flexGrow: 1, backgroundColor: 'black'}}
              />

              <Icon
                name="circle-thin"
                type="FontAwesome"
                style={styles.iconsmall}
              />
              <View
                style={{height: 0.5, flexGrow: 1, backgroundColor: 'black'}}
              />
            </View>

            <Card style={styles.card}>
              <CardItem style={styles.carditem}>
                <Text
                  style={[styles.smallfont, {fontFamily: 'Lato-bold'}]}
                  numberOfLines={1}>
                  {it.title}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[AllStyles.briefText, styles.smallfont]}>
                  {moment(it.createdAt).format('DD MMM YYYY')}
                </Text>
              </CardItem>
            </Card>
          </View>
        );
      })}
    </View>
  </View>
);

export default BillTimelineComponent;

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  smallfont: {fontSize: 10},
  detailtop: {flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-start'},
  breif: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  carditem: {flexDirection: 'column', paddingTop: 2, paddingBottom: 2},
  card: {paddingHorizontal: '10rem', paddingTop: '0rem'},
  timeline: {
    flexDirection: 'column',
    margin: 5,
    borderTopColor: 'black',
  },
  timelinetop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  iconsmall: {fontSize: 20},
  IconBig: {width: 20, height: 25, marginHorizontal: '5rem'},
  rowspace: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
  },
});
