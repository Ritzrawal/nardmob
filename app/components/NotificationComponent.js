import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Icon} from 'native-base';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import RoundedIcon from './RoundedIcon';
import {
  ProfileStyles,
  ProfileStyleExt,
} from '../screens/ProfileScreens/ProfileStyles';
import TitleWithImgComponent from './TitleWithImgComponent';

const NotificationComponent = props => {
  return (
    <View>
      <TitleWithImgComponent
        source={require('../../assets/calendar.png')}
        activityName={props.activityName}
        styleView={props.styleView}
      />
      <View>
        {props.activityArray.map(activity => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={activity.id}
              onPress={() => console.log('hey activity clicked')}>
              <View style={styles.actView}>
                <View style={styles.actNested}>
                  <RoundedIcon
                    uri={activity.profileImage}
                    mainStyle={styles.actRoundedIcon}
                  />

                  <View style={styles.actTextCardView}>
                    <View style={styles.activityCardView1}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.actUserName}>
                        {activity.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.actDesc}>
                        {' '}
                        {activity.act}{' '}
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.actTime}>
                      {activity.time}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actView: {
    ...ProfileStyleExt.notifCardView,
  },
  actNested: {
    ...ProfileStyles.activityNestedView,
  },
  actRoundedIcon: {
    ...ProfileStyles.actRoundedImage,
  },
  actTextCardView: {
    ...ProfileStyleExt.actTextCardView,
  },
  activityCardView1: {
    ...ProfileStyleExt.notifTextCardView1,
  },
  actUserName: {
    ...ProfileStyleExt.notifBoldText,
  },
  actDesc: {
    ...ProfileStyleExt.notifDescription,
  },
  actTime: {
    ...ProfileStyleExt.actTimeText,
  },
  iconSize: {
    ...ProfileStyleExt.iconSize,
  },
});

export default NotificationComponent;
