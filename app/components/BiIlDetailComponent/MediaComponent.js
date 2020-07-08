/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, Icon, Thumbnail} from 'native-base';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

import BottomLayout from './BottomLayout';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AllStyles} from '../AllStyles';

import {useNavigation} from '@react-navigation/native';
const MediaComponent = props => {
  var media = [];
  props.detail.map(it => {
    media.push(
      <Card style={styles.cardView}>
        <TouchableOpacity
          onPress={() =>
            props.onPress.navigate('mediaDetail', {
              mediadata: it,
              title: props.title,
            })
          }>
          <View style={{flexDirection: 'column', padding: 0}}>
            <Image
              source={{
                uri: it.image,
              }}
              style={{
                height: 150,
                width: '100%',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              }}
            />

            <LinearGradient
              colors={['transparent', '#011844']}
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '100%',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                padding: 5,
                flex: 1,
              }}>
              <Thumbnail
                source={{
                  uri: it.logo,
                }}
                style={{
                  marginHorizontal: 10,
                  marginVertical: 5,
                  width: 50,
                  height: 50,
                }}
              />

              <Text style={styles.title} numberOfLines={2}>
                {it.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <BottomLayout
          onPress={() =>
            props.onPress.navigate('mediaDetail', {
              mediadata: it,
              title: props.title,
            })
          }
          likes_count={it.likes_count}
          comments_count={it.comments_count}
          shares_count={it.shares_count}
        />
      </Card>,
    );
  });
  return (
    <TouchableOpacity>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <Image
              style={AllStyles.iconsize}
              source={require('../../../assets/News/news-lg-yellow.png')}
            />
            <Text style={AllStyles.HeaderCardText}>
              What is media Saying ?{' '}
            </Text>
          </View>

          <TouchableHighlight
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}
            onPress={props.viewAll}>
            <View
              style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginHorizontal: 5,
                  fontSize: 12,
                }}>
                View All
              </Text>
              <Icon
                style={{colors: 'gray', fontSize: 14, marginHorizontal: 3}}
                name="ios-arrow-forward"
                type="Ionicons"
              />
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView horizontal>{media}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default MediaComponent;

const styles = EStyleSheet.create({
  row: {flexDirection: 'row'},
  col: {flexDirection: 'column'},
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
  title: {
    color: 'white',
    flex: 1,
    marginTop: '5rem',

    fontFamily: 'Lato-bold',
  },
  cardView: {
    width: '300rem',
    elevation: 5,
    margin: 2,
    marginBottom: '15rem',
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    borderRadius: 5,
  },
});
