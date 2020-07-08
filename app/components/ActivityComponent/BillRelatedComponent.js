/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Thumbnail, Body, CardItem} from 'native-base';
import {StyleSheet, Image, Text} from 'react-native';
import {AllStyles} from '../AllStyles';
//import { LinearGradient } from 'expo-linear-gradient';

const BillRelatedComponent = props => {
  if (props.buttonText === '') {
  } else {
  }

  return (
    <View>
      <View style={styles.fbView}>
        <View>
          <View style={{flexDirection: 'column', padding: 0}}>
            <Image
              source={{
                uri:
                  'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/08/Pictures/sushma-najma-and-brinda-celebrate-bill-passage_9cc65a30-03a8-11e7-87c7-5947ba54d240.jpg',
              }}
              style={styles.headlineImgView}
            />
            <View
              colors={['transparent', '#011844']}
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                }}>
                <Thumbnail
                  style={{margin: 10}}
                  source={{
                    uri:
                      'https://pickaface.net/gallery/avatar/parthisthebest5750125054898.png',
                  }}
                />
                <Body style={{marginVertical: 5}}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.title}>
                    J&K Reorganiszation Bill
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.titleDesc}>
                    The Bill, which will split J&K into two union
                    territories.The Bill, which will split J&K into two union
                    territories.
                  </Text>
                </Body>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 10}}>
            <CardItem>
              <View
                style={{
                  justifyContent: 'space-between',
                  flex: 1,
                  paddingVertical: 10,
                }}>
                <Text style={styles.billTitle}>Amendment</Text>
                <Text style={styles.dateText}>12 Dec 2019</Text>
                <Text style={styles.billDescText}>
                  The Bill, which will split J&K into two union territories,
                  wast passed by upper house…
                </Text>
              </View>
            </CardItem>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fbView: {
    ...AllStyles.activityOpinionCardView,
    justifyContent: 'center',
  },
  rowFlex: {
    ...AllStyles.rowDes,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  iconRound: {
    ...AllStyles.smallRoundedImage,
    marginRight: 5,
  },
  textFollowView: {
    marginRight: 5,
    ...AllStyles.textFollowView,
  },
  headlineImgView: {
    ...AllStyles.headlineImgView,
  },
  title: {
    ...AllStyles.title,
    marginBottom: 5,
  },
  titleDesc: {
    ...AllStyles.titleDesc,
  },
  commentText: {
    ...AllStyles.commentText,
  },
  seeMoreText: {
    ...AllStyles.seeMoreText,
    textDecorationLine: 'underline',
  },
  billTitle: {
    ...AllStyles.billTitle,
  },
  dateText: {
    ...AllStyles.dateText,
  },
  billDescText: {
    ...AllStyles.billDescText,
  },
});

export default BillRelatedComponent;
