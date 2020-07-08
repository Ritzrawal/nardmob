/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Icon, CardItem} from 'native-base';
import {StyleSheet, Text} from 'react-native';
import {AllStyles} from '../AllStyles';
import RoundedIcon from '../RoundedIcon';
import colors from '../../utils/colors';

const VoteViewComponent = props => {
  return (
    <View>
      <View style={styles.fbView}>
        <View style={styles.rowFlex}>
          <RoundedIcon uri={props.profileImage} mainStyle={styles.iconRound} />
          <View style={styles.textFollowView}>
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5}}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={{flex: 1}}>
                <Text style={styles.normalText}> Your Friend </Text>
                <Text style={styles.boldText}>{props.userName}</Text>
                <Text style={styles.normalText}> {props.description}</Text>
              </Text>
            </View>
            <Text style={styles.smallText}>{props.time}</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'column',
              padding: 0,
              backgroundColor: colors.primaryBlueColor,
              borderRadius: 3,
            }}>
            <Text style={styles.questionText}>{props.question}</Text>
            <View style={styles.buttonBold}>
              <Text style={styles.saveText}>{props.option}</Text>
            </View>
            <View>
              <CardItem
                style={{
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent',
                }}>
                <Text style={styles.smallfont}>200k Likes</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.smallfont}>2.7k Comments </Text>
                  <Text style={styles.smallfont}>10 Shares</Text>
                </View>
              </CardItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  height: 1,
                  backgroundColor: 'lightgray',
                  marginHorizontal: 10,
                }}
              />
              <CardItem style={{backgroundColor: 'transparent'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                    flex: 1,
                  }}>
                  <View style={styles.row}>
                    <Icon
                      name="like1"
                      type="AntDesign"
                      style={{color: 'lightgray', fontSize: 20}}
                    />
                    <Text style={styles.mediumfont}>Like</Text>
                  </View>
                  <View style={styles.row}>
                    <Icon
                      name="comment"
                      type="Foundation"
                      style={{color: 'lightgray', fontSize: 20}}
                    />
                    <Text style={styles.mediumfont}>Comment</Text>
                  </View>
                  <View style={styles.row}>
                    <Icon
                      name="share"
                      type="FontAwesome"
                      style={{color: 'lightgray', fontSize: 15}}
                    />
                    <Text style={styles.mediumfont}>Share</Text>
                  </View>
                </View>
              </CardItem>
            </View>
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
  buttonBold: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    margin: 10,
    backgroundColor: colors.secondaryYellowColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},
  smallfont: {...AllStyles.fontSmallGray},
  mediumfont: {...AllStyles.fontMedGray, margin: 5},
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
  saveText: {
    ...AllStyles.saveText,
  },
  questionText: {
    ...AllStyles.questionText,
  },
});

export default VoteViewComponent;
