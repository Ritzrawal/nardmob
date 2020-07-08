/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Icon, Text, View, Content, Input} from 'native-base';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TitleWithImgComponent} from '../../components';
import {ProfileStyles} from './ProfileStyles';
import colors from '../../utils/colors';

class SecurityInfoScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{marginHorizontal: 16, marginBottom: 10}}>
            <TitleWithImgComponent
              source={require('../../../assets/user.png')}
              activityName="Email Address"
            />
            <View style={styles.shadowView}>
              <Input placeholder="remon@cloud.dd" />
              <Icon name="pencil" type="Octicons" style={styles.activityIcon} />
            </View>
            <TitleWithImgComponent
              source={require('../../../assets/user.png')}
              activityName="Password"
            />
            <View style={styles.shadowView}>
              <Input placeholder="*********" secureTextEntry />
              <Icon name="pencil" type="Octicons" style={styles.activityIcon} />
            </View>
            <TitleWithImgComponent
              source={require('../../../assets/user.png')}
              activityName="Retype Password"
            />
            <View style={styles.shadowView}>
              <Input placeholder="*********" secureTextEntry />
              <Icon name="pencil" type="Octicons" style={styles.activityIcon} />
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.buttonBold}>
                <Icon name="check" type="FontAwesome" style={styles.saveIcon} />
                <Text style={styles.saveText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  shadowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...ProfileStyles.shadowViewAnyHeight,
  },
  activityIcon: {
    paddingRight: 10,
    ...ProfileStyles.greySmallIcon,
  },
  saveIcon: {
    fontSize: 20,
    color: 'white',
  },
  saveText: {
    padding: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  buttonBold: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: colors.secondaryYellowColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecurityInfoScreen;
