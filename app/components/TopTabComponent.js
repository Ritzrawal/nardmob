/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'native-base';

import {ScrollView} from 'react-native-gesture-handler';
import {Text, TouchableOpacity} from 'react-native';

// import { Icon } from "react-native-paper/lib/typescript/src/components/Avatar/Avatar";

import colors from '../utils/colors';

const TopTabComponent = props => {
  return (
    <View style={{height: 50}}>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', flex: 1}}>
          {props.tabs.map(tab => {
            if (props.navigation._childrenNavigation[tab.path].isFocused()) {
              return (
                <TouchableOpacity
                  style={{flex: 1, width: 130, height: 40}}
                  onPress={() =>
                    props.navigation.navigate(tab.path, {itemId: 82})
                  }
                  key={tab.label}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginRight: 2,
                      height: 40,
                      elevation: 18,
                      shadowRadius: 5,
                      paddingHorizontal: 10,

                      shadowOffset: {width: 0, height: 1},
                      shadowColor: '#ccc',
                      shadowOpacity: 1,
                      flexGrow: 1,
                      overflow: 'visible',
                      borderBottomColor: '#EFEFEF',
                      borderBottomWidth: 1,
                      borderRadius: 0,
                      backgroundColor: colors.secondaryYellowColor,
                    }}
                    key={tab.label}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Lato-medium',
                      }}
                      numberOfLines={1}>
                      {tab.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  style={{flex: 1, width: 130, height: 40}}
                  onPress={() =>
                    props.navigation.navigate(tab.path, {itemId: 82})
                  }
                  key={tab.label}>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginRight: 2,
                      shadowRadius: 5,
                      elevation: 24,
                      padding: 5,
                      flexGrow: 1,
                      height: 40,
                      paddingHorizontal: 10,
                      shadowOffset: {width: 0, height: 12},
                      shadowColor: '#ccc',
                      shadowOpacity: 0.6,
                      borderRadius: 0,
                      borderBottomColor: '#EFEFEF',
                      borderBottomWidth: 2,
                      backgroundColor: 'white',
                    }}
                    key={tab.label}
                    active={props.navigation._childrenNavigation[
                      tab.path
                    ].isFocused()}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'gray',
                        textAlign: 'center',
                        fontFamily: 'Lato-medium',
                      }}
                      numberOfLines={1}>
                      {tab.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TopTabComponent;
