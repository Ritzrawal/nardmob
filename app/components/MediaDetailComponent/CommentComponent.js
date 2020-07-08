/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem, Text, Icon, Thumbnail} from 'native-base';
import {Dimensions, Image} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CommentComponent = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Card>
      <CardItem style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Thumbnail
            source={{
              uri:
                'https://makehimyours.com.au/wp-content/uploads/2016/11/Depositphotos_9830876_l-2015Optimised.jpg',
            }}
            style={{width: 35, height: 35, borderRadius: 20}}
          />
          <Text style={{fontSize: 12, fontFamily: 'Lato-bold'}}>
            {' '}
            Remon Nabil
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/timesm.png')}
            style={{width: 15, height: 15, marginHorizontal: 5}}
          />
          <Text style={{fontSize: 10}}>20 min ago</Text>
        </View>
      </CardItem>

      <CardItem>
        <Text style={{fontFamily: 'Lato-regular', fontSize: 13}} note>
          Special Status will be Withdrawn. JK will have its Own legislature
        </Text>
      </CardItem>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 0.5,
          backgroundColor: 'gray',
          marginHorizontal: 10,
        }}
      />
      <CardItem>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 0,
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.row}>
              <Icon
                name="like1"
                type="AntDesign"
                style={{color: 'lightgray', fontSize: 18}}
              />
              <Text style={styles.mediumfont}>Like</Text>
            </View>
            <View style={[styles.row, {marginHorizontal: 10}]}>
              <Icon
                name="comment"
                type="Foundation"
                style={{color: 'lightgray', fontSize: 20}}
              />
              <Text style={styles.mediumfont}>Replay</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.row}>
              <Text style={styles.smallfont}>300 likes</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.smallfont}>200 reply</Text>
            </View>
          </View>
        </View>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

export default CommentComponent;
var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},

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
  smallfont: {
    fontSize: '9rem',
    color: 'gray',
    fontFamily: 'Lato-regular',
    margin: '5rem',
  },
  mediumfont: {
    fontSize: '10rem',
    fontFamily: 'Lato-bold',
    color: 'gray',
    margin: '5rem',
    marginHorizontal: '5rem',
  },
});
