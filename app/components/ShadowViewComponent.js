import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProfileStyles} from '../screens/ProfileScreens/ProfileStyles';

const ShadowViewComponent = props => {
  return <View style={{...styles.actView, ...props.styleView}} />;
};
const styles = StyleSheet.create({
  titleText: {
    ...ProfileStyles.boldTitleText,
  },
  actView: {
    ...ProfileStyles.activityCardView,
  },
  activityIcon: {
    ...ProfileStyles.settingsMediumIcon,
  },
});
export default ShadowViewComponent;
