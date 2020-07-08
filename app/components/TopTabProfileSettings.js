/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, Icon, View} from 'native-base';
import {Dimensions} from 'react-native';

import colors from '../utils/colors';

var screenWidth = Dimensions.get('window').width;

const TopTabProfileSettings = props => {
  return (
    <View style={{height: 50}}>
      <View style={{flexDirection: 'row'}}>
        {props.tabs.map(tab => {
          if (props.navigation._childrenNavigation[tab.path].isFocused()) {
            return (
              <Button
                activeOpacity={0.8}
                style={{
                  width: screenWidth / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 0,
                  backgroundColor: colors.selectedBlue,
                }}
                key={tab.label}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={tab.icon}
                    type={tab.iconType}
                    style={{
                      color: colors.secondaryYellowColor,
                      fontSize: 18,
                      marginRight: 5,
                    }}
                  />
                  <Text style={{fontSize: 13, color: '#FFF'}} numberOfLines={1}>
                    {tab.label}
                  </Text>
                </View>
              </Button>
            );
          } else {
            return (
              <Button
                activeOpacity={0.8}
                style={{
                  width: screenWidth / 2,
                  shadowRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOffset: {width: 0, height: 1},
                  shadowColor: '#ccc',
                  shadowOpacity: 0.6,
                  borderRadius: 0,
                  backgroundColor: 'white',
                }}
                key={tab.label}
                active={props.navigation._childrenNavigation[
                  tab.path
                ].isFocused()}
                onPress={() =>
                  props.navigation.navigate(tab.path, {itemId: 1})
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={tab.icon}
                    type={tab.iconType}
                    style={{
                      color: colors.secondaryYellowColor,
                      fontSize: 18,
                      marginRight: 5,
                    }}
                  />
                  <Text
                    style={{fontSize: 13, color: colors.selectedBlue}}
                    numberOfLines={1}>
                    {tab.label}
                  </Text>
                </View>
              </Button>
            );
          }
        })}
      </View>
    </View>
  );
};

export default TopTabProfileSettings;
