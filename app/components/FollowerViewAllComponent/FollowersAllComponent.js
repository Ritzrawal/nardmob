import React from 'react';
import {View, TouchableOpacity, Text, FlatList, Dimensions} from 'react-native';
import RoundedIcon from '../RoundedIcon';
import {
  ProfileStyles,
  ProfileStyleExt,
} from '../../screens/ProfileScreens/ProfileStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../utils/colors';
import {Icon} from 'native-base';

const FollowersAllComponent = props => {
  return (
    <View>
      {
        <FlatList
          data={props.usersArray}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              onPress={() => console.log('hey activity clicked')}>
              <View style={styles.actView}>
                <View style={styles.userFullView}>
                  <View style={styles.actNested}>
                    <RoundedIcon
                      uri={item.profileImage}
                      mainStyle={styles.actRoundedIcon}
                    />
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.actUserName}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={styles.followBtnView}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.followButtonTouchView}>
                      <Icon
                        name="heart"
                        type="FontAwesome"
                        style={styles.followHeartIcon}
                      />
                      <Text style={styles.followWhiteText}> Following </Text>
                    </TouchableOpacity>
                  </View>

                  {/* <View style={styles.actTextCardView}>
                                        <View style={styles.activityCardView1}>

                                        </View>
                                    </View> */}
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      }
    </View>
  );
};

var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});

const styles = EStyleSheet.create({
  superView: {
    padding: 10,
    backgroundColor: 'red',
  },
  actView: {
    backgroundColor: 'white',
    height: '60rem',
    elevation: 3,
    marginBottom: '15rem',
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    padding: '8rem',
    borderRadius: 3,
    marginHorizontal: '10rem',
    marginTop: '5rem',
  },
  actNested: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: '3rem',
  },
  userFullView: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'space-between',
  },

  actRoundedIcon: {
    ...ProfileStyles.actRoundedImage,
    marginRight: '10rem',
  },
  actTextCardView: {
    ...ProfileStyleExt.actTextCardView,
  },
  activityCardView1: {
    ...ProfileStyleExt.notifTextCardView1,
  },
  actUserName: {
    ...ProfileStyleExt.notifBoldText,
    flex: 1,
  },
  actDesc: {
    ...ProfileStyleExt.notifDescription,
  },
  actTime: {
    ...ProfileStyleExt.actTimeText,
  },
  iconSize: {
    ...ProfileStyleExt.iconSize,
  },
  followBtnView: {
    elevation: 2,
    borderBottomWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '140rem',
    backgroundColor: colors.secondaryYellowColor,
    alignSelf: 'center',
    marginRight: '5rem',
    borderRadius: 3,
  },

  followHeartIcon: {
    ...ProfileStyleExt.followHeartIcon,
  },
  followWhiteText: {
    ...ProfileStyleExt.followWhiteText,
  },
  followButtonTouchView: {
    ...ProfileStyleExt.followButtonTouchView,
  },
});

export default FollowersAllComponent;
