import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  ProfileStyles,
  ProfileStyleExt,
} from '../screens/ProfileScreens/ProfileStyles';

const TitleWithImgComponent = props => {
  return (
    <View style={{...styles.activityTitleView, ...props.styleView}}>
      <Image
        source={props.source}
        name={props.icon}
        type={props.iconType}
        resizeMode="contain"
        style={{...styles.activityIcon, ...props.iconStyle}}
      />
      <Text style={styles.titleText}> {props.activityName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    marginLeft: 5,
    ...ProfileStyleExt.boldTitleText,
  },
  activityTitleView: {
    ...ProfileStyles.actTitleView,
  },
  activityIcon: {
    ...ProfileStyleExt.settingsMediumIcon,
  },
});
export default TitleWithImgComponent;
