/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem, Icon, Thumbnail} from 'native-base';

import {Image, TouchableHighlight, Text} from 'react-native';

import colors from '../../utils/colors';
import BottomLayout from './BottomLayout';
import {AllStyles} from '../AllStyles';

const BillOpinion = props => {
  var view = [];
  props.detail.map(it => {
    view.push(
      <Card>
        <CardItem
          style={{
            justifyContent: 'space-between',
            backgroundColor: colors.primaryBlueColor,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Thumbnail
              source={{
                uri: it.profile_pic,
              }}
              style={{width: 40, height: 40}}
            />
            <Text
              style={{color: 'white', fontSize: 10, fontFamily: 'Lato-bold'}}>
              {' '}
              {it.user_name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="arrow" style={{fontSize: 15}} />
            <Text style={{color: 'white', fontSize: 10}}>{it.title}</Text>
          </View>
        </CardItem>

        <CardItem>
          <Text note>{it.opinion}</Text>
        </CardItem>
        <Image
          source={{
            uri: it.media_url,
          }}
          style={{width: '100%', height: 100}}
        />

        <BottomLayout
          onPress={() =>
            props.onPressIn.navigate('commentDetailScreen', {
              commentdata: it,
              title: props.title,
              icon: props.icon,
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
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
          <Image
            style={AllStyles.iconsize}
            resizeMode="cover"
            source={require('../../../assets/opinion/opinions-md-yellow.png')}
          />
          <Text style={AllStyles.HeaderCardText}>Bill Opinions </Text>
        </View>

        <Card>
          <TouchableHighlight onPress={props.onPress}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Image
                style={{width: 15, height: 15, margin: 10}}
                source={require('../../../assets/edit.png')}
              />
              <Text style={AllStyles.HeaderCardText}>Write Opinion</Text>
            </View>
          </TouchableHighlight>
        </Card>
      </View>
      {view}
    </View>
  );
};

export default BillOpinion;
