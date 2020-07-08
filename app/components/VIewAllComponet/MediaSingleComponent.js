/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, Text, Thumbnail} from 'native-base';
import {StyleSheet, Image} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomLayout from '../BiIlDetailComponent/BottomLayout';
import LinearGradient from 'react-native-linear-gradient';

const MediaSingleComponent = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{flexDirection: 'column'}}>
      <Card>
        <View style={{flexDirection: 'column', padding: 0}}>
          <Image
            source={{
              uri:
                'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/08/Pictures/sushma-najma-and-brinda-celebrate-bill-passage_9cc65a30-03a8-11e7-87c7-5947ba54d240.jpg',
            }}
            style={{height: 200, width: '100%'}}
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
              width: '100%',
            }}>
            <Thumbnail
              source={{
                uri:
                  'https://pickaface.net/gallery/avatar/parthisthebest5750125054898.png',
              }}
            />
            <View>
              <Text style={styles.title}>NativeBase</Text>
              <Text style={styles.title} note>
                GeekyAnts GeekyAnsss
              </Text>
            </View>
          </View>
        </View>
        <BottomLayout />
      </Card>
    </View>
  </TouchableOpacity>
);

export default MediaSingleComponent;

const styles = StyleSheet.create({
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
  title: {color: 'white'},
});
