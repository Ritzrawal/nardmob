/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AllStyles} from '../AllStyles';
import FollowButtonComponent from './FollowButtonComponent';
import RoundedIcon from '../RoundedIcon';

const FollowViewComponent = props => {
  return (
    <View>
      <View style={styles.fbView}>
        <View style={styles.rowFlex}>
          <RoundedIcon uri={props.profileImage} mainStyle={styles.iconRound} />
          <View style={styles.textFollowView}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={{flex: 1}}>
                <Text style={styles.boldText}>{props.userName}</Text>
                <Text style={styles.normalText}> {props.description}</Text>
              </Text>
            </View>
            <Text style={styles.smallText}>{props.time}</Text>
            <View>
              <FollowButtonComponent
                iconName={props.iconName}
                iconType={props.iconType}
                buttonTitle={props.buttonTitle}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fbView: {
    ...AllStyles.activityFBCardView,
    justifyContent: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  iconRound: {
    ...AllStyles.actRoundedImage,
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
});

export default FollowViewComponent;
