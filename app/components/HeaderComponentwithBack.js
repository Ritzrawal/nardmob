/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Thumbnail,
  View,
} from 'native-base';
import {Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../utils/colors';

const HeaderComponentwithBack = props => (
  <Header
    style={{backgroundColor: colors.primaryBlueColor, borderBottomWidth: 0}}
    androidStatusBarColor="#011844"
    iosBarStyle="light-content">
    <Left style={{width: 40, flex: 0.1}}>
      <Button transparent onPress={() => props.moveToNotif.goBack()}>
        <Icon
          name="ios-arrow-back"
          type="Ionicons"
          style={{fontSize: 22, color: 'white'}}
        />
      </Button>
    </Left>
    <Body
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginRight: 5,
          alignItems: 'center',
        }}>
        <Thumbnail
          source={{
            uri: props.image,
          }}
          style={styles.headerImgStyle}
        />
        <Text
          numberOfLines={1}
          style={{color: 'white', fontFamily: 'Lato-bold', marginLeft: 5}}>
          {props.title}
        </Text>
      </View>
    </Body>
    <Right style={{width: 40, flex: 0.2}}>
      <Button transparent>
        <Icon
          name="heart"
          type="AntDesign"
          style={{fontSize: 22, color: 'white'}}
          onPress={() => props.moveToNotif.navigate('NotificationStack')}
        />
      </Button>
    </Right>
  </Header>
);

const styles = EStyleSheet.create({
  headerImgStyle: {
    width: 30,
    height: 30,
    borderRadius: 12,
  },
});

export default HeaderComponentwithBack;
