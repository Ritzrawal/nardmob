/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Footer, FooterTab, View} from 'native-base';
import {Text, Platform, Image, TouchableOpacity} from 'react-native';
import {mainTabs} from '../utils/constants';
// import { Icon } from "react-native-paper/lib/typescript/src/components/Avatar/Avatar";

const BottomTabComponent = props => {
  return (
    <Footer
      style={{
        backgroundColor: Platform.OS === 'ios' ? 'white' : '#FDFDFD',
        height: 50,
      }}>
      <FooterTab
        style={{
          backgroundColor: Platform.OS === 'ios' ? 'white' : '#FDFDFD',
          height: 50,
        }}>
        {mainTabs.map(tab => {
          if (props.navigation._childrenNavigation[tab.path].isFocused()) {
            return (
              <TouchableOpacity
                style={{
                  height: 50,
                  flex: 1,
                }}
                onPress={() => props.navigation.navigate(tab.path)}
                key={tab.label}>
                <View
                  style={{
                    elevation: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: Platform.OS === 'ios' ? 0 : 1,
                    shadowRadius: 5,
                    height: 50,
                    shadowOffset: {width: 0, height: 1},
                    shadowColor: '#ccc',
                    shadowOpacity: 0.6,
                    borderRadius: 0,
                    backgroundColor: '#001142',
                    padding: 1,
                    margin: 1,
                  }}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={tab.active}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: '#FFF',
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
                style={{
                  height: 50,
                  flex: 1,
                }}
                onPress={() => props.navigation.navigate(tab.path)}
                key={tab.label}>
                <View
                  style={{
                    height: 50,
                    elevation: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: Platform.OS === 'ios' ? 0 : 1,
                    shadowRadius: 5,
                    shadowOffset: {width: 0, height: 1},
                    shadowColor: '#ccc',
                    shadowOpacity: 0.6,
                    borderRadius: 0,
                    backgroundColor: 'white',
                  }}
                  key={tab.label}
                  active={props.navigation._childrenNavigation[
                    tab.path
                  ].isFocused()}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={tab.inactive}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: 'gray',
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
      </FooterTab>
    </Footer>
  );
};

export default BottomTabComponent;
