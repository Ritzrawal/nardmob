import React from 'react';
import {Icon, View} from 'native-base';
import RoundedIcon from './RoundedIcon';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  ProfileStyles,
  ProfileStyleExt,
} from '../screens/ProfileScreens/ProfileStyles';

const FollowerComponent = props => {
  return (
    <View>
      <View style={styles.viewFollow}>
        <View style={styles.viewDirectionRow}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.titleText}>({props.count})</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            props.onPressNavigation.push('FollowerScreen', {
              itemId: 1,
              otherParam: 'anything you want here',
              array: props.followArray,
            })
          }>
          <View style={styles.settingTouchView}>
            <Text style={styles.viewAll}>View all</Text>
            <Icon name="right" type="AntDesign" style={styles.viewArrow} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.followersViewRow}>
        {props.followArray.slice(0, 4).map(profile => {
          return (
            <TouchableOpacity
              key={profile.id}
              activeOpacity={0.8}
              onPress={() =>
                props.onPressNavigation.push('ProfileScreen', {
                  itemId: 1,
                  otherParam: 'anything you want here',
                  name: profile.name,
                  profileImage: profile.profileImage,
                  following: profile.following,
                })
              }>
              <View style={styles.singleFollower}>
                <RoundedIcon
                  uri={profile.profileImage}
                  mainStyle={styles.followerRoundIcon}
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.followersText}>
                  {profile.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    // ...ProfileStyles.boldTitleText
    ...ProfileStyleExt.boldTitleText,
  },
  viewFollow: {
    ...ProfileStyles.viewFollowersFollowing,
  },
  viewDirectionRow: {
    ...ProfileStyles.flexRow,
  },
  viewAll: {
    // ...ProfileStyles.bioInfoText
    ...ProfileStyleExt.bioText,
  },
  viewArrow: {
    // ...ProfileStyles.greySmallIcon
    ...ProfileStyleExt.greySmallIcon,
  },
  followersViewRow: {
    ...ProfileStyles.followersArrayView,
  },
  singleFollower: {
    ...ProfileStyles.singleFollowerView,
  },
  followerRoundIcon: {
    ...ProfileStyles.followerIcon,
  },
  followersText: {
    // ...ProfileStyles.followerText
    ...ProfileStyleExt.followerText,
  },
  settingTouchView: {
    ...ProfileStyles.profileSettingsTouchView,
  },
});

export default FollowerComponent;
