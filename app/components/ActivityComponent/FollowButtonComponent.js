import React from 'react';
import {Text, Icon} from 'native-base';
import {View, StyleSheet} from 'react-native';
import {AllStyles} from '../AllStyles';
import {TouchableHighlight} from 'react-native-gesture-handler';

const FollowButtonComponent = props => {
  return (
    <View>
      <TouchableHighlight activeOpacity={0.8}>
        <View style={styles.buttonBold}>
          <Icon
            name={props.iconName}
            type={props.iconType}
            style={styles.saveIcon}
          />
          <Text style={styles.saveText}>{props.buttonTitle}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBold: {
    marginTop: 5,
    ...AllStyles.buttonFollowBold,
  },
  saveIcon: {
    ...AllStyles.saveIcon,
  },
  saveText: {
    ...AllStyles.saveText,
  },
});

export default FollowButtonComponent;
