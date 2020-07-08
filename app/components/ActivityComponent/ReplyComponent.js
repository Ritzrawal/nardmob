/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Icon, CardItem} from 'native-base';
import {StyleSheet, Text} from 'react-native';
import {AllStyles} from '../AllStyles';
import RoundedIcon from '../RoundedIcon';

const ReplyComponent = props => {
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
                <Text style={styles.normalText}> Wrote the reply on</Text>
                <Text style={styles.boldText}> {props.name2} </Text>
                <Text style={styles.normalText}> Opinion</Text>
              </Text>
            </View>
            <Text style={styles.smallText}>{props.time}</Text>
          </View>
        </View>

        <CardItem style={styles.opiniionTextView}>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            {commentView}
          </View>
        </CardItem>
        <CardItem style={{marginBottom: 10}}>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <Text style={styles.commentText}>{props.opinionComment}</Text>
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
        <CardItem>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 0,
              flex: 1,
            }}>
            <View style={styles.row}>
              <Icon
                name="like1"
                type="AntDesign"
                style={{color: 'lightgray', fontSize: 20}}
              />
              <Text style={styles.mediumfont}>Like</Text>
              <View style={styles.row}>
                <Icon
                  name="comment"
                  type="Foundation"
                  style={{color: 'lightgray', fontSize: 20}}
                />
                <Text style={styles.mediumfont}>Reply</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.mediumfont}>100 Like</Text>

              <View style={styles.row}>
                <Text style={styles.mediumfont}>300 Reply</Text>
              </View>
            </View>
          </View>
        </CardItem>
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
  opiniionTextView: {
    ...AllStyles.opiniionTextView,
    marginBottom: 10,
  },
  mediumfont: {
    ...AllStyles.actTimeText,
    fontFamily: 'Lato-bold',
    color: 'gray',
    margin: 5,
  },
});

export default ReplyComponent;
