/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Left, Body, Right, Button, Icon, Thumbnail} from 'native-base';
import {Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../utils/colors';

const HeaderWithBackBtn = props => (
  <Header
    style={{backgroundColor: colors.primaryBlueColor, borderBottomWidth: 0}}
    androidStatusBarColor="#011844"
    iosBarStyle="light-content">
    <Left style={{width: 40}}>
      <Button
        transparent
        onPress={() => {
          alert('call');
          props.moveToNotif.goBack();
        }}>
        <Image
          source={require('../../assets/backBtn/back-bar-white.png')}
          style={styles.backIconStyle}
        />
      </Button>
    </Left>
    <Body style={{flex: 1}}>
      <Thumbnail
        square
        source={require('../../assets/mainlogo.png')}
        style={styles.headerImgStyle}
      />
    </Body>
    <Right>
      <Button transparent>
        <Icon
          name="bell"
          type="MaterialCommunityIcons"
          style={{fontSize: 22, color: 'white'}}
          onPress={() => props.moveToNotif.navigate('NotificationStack')}
        />
      </Button>
    </Right>
  </Header>
);

const styles = EStyleSheet.create({
  headerImgStyle: {
    width: '200rem',
    height: '30rem',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backIconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default HeaderWithBackBtn;
