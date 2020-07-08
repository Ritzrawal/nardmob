import React from 'react';
import {Container, Icon, View, Content, Input} from 'native-base';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../utils/colors';

import {FollowersAllComponent} from '../../components/FollowerViewAllComponent';

class FollowersList extends React.Component {
  render() {
    const {navigation} = this.props;
    var arrayList = navigation.getParam('array', []);
    return (
      <Container>
        <Content>
          <View style={styles.searchView}>
            <Icon
              name="magnifying-glass"
              type="Entypo"
              style={styles.searchIcon}
            />
            <Input style={styles.inputTextField} placeholder="Search" />
          </View>
          <View style={styles.viewBelow}>
            <FollowersAllComponent usersArray={arrayList} />
          </View>
        </Content>
      </Container>
    );
  }
}

var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});

export const styles = EStyleSheet.create({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '40rem',
    padding: '5rem',
    backgroundColor: colors.lightGreySearch,
    margin: '10rem',
    borderRadius: 5,
  },
  searchIcon: {
    fontSize: '20rem',
    color: colors.primaryBlueColor,
  },
  inputTextField: {
    height: '40rem',
  },
  viewBelow: {
    marginBottom: '10rem',
    flex: 1,
  },
});

export default FollowersList;
