/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Left, Body, Right, Button, Icon, Thumbnail} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import {ProfileStyleExt} from '../screens/ProfileScreens/ProfileStyles';

const HeaderComponent = props => (
  <Header
    style={{backgroundColor: '#011844', borderBottomWidth: 0}}
    androidStatusBarColor="#011844"
    iosBarStyle="light-content">
    {console.log('header::::', props)}
    <Left style={{flex: 1}}>
      <Button transparent>
        <Image
          source={require('../../assets/cogbar.png')}
          style={{width: 20, height: 20}}
          onPress={() => props.moveToNotif.navigate('NotificationStack')}
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
    <Right style={{flex: 1}}>
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

const styles = StyleSheet.create({
  headerImgStyle: {
    ...ProfileStyleExt.nmHeaderImage,
  },
});

export default HeaderComponent;
