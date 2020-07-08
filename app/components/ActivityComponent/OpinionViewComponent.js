/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Thumbnail, Body} from 'native-base';
import {StyleSheet, Image, Text} from 'react-native';
import {AllStyles} from '../AllStyles';
import RoundedIcon from '../RoundedIcon';
import BottomLayout from '../BiIlDetailComponent/BottomLayout';

const OpinionViewComponent = props => {
  let commentView;
  if (props.buttonText === '') {
    commentView = null;
  } else {
    commentView = (
      <Text style={{margin: 10, flex: 1}}>
        <Text style={styles.commentText}>{props.comment}</Text>
        <Text onPress={props.seeMoreBtn} style={styles.seeMoreText}>
          {props.buttonText}
        </Text>
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.fbView}>
        <View style={styles.rowFlex}>
          <RoundedIcon uri={props.profileImage} mainStyle={styles.iconRound} />
          <View style={styles.textFollowView}>
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5}}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={{flex: 1}}>
                <Text style={styles.boldText}>{props.userName}</Text>
                <Text style={styles.normalText}> {props.description}</Text>
              </Text>
            </View>
            <Text style={styles.smallText}>{props.time}</Text>
          </View>
        </View>

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
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            {commentView}
          </View>
          <BottomLayout />
        </View>
      </View>
    </View>
  );
};

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
  rowspace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  boldText: {
    ...AllStyles.actBoldText,
  },
  normalText: {
    ...AllStyles.actNormalText,
  },
  smallText: {
    ...AllStyles.actTimeText,
  },
  circleView: {
    ...AllStyles.circleView,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default OpinionViewComponent;
