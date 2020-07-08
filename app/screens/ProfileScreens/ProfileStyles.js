import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../utils/colors';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});

export const ProfileStyles = StyleSheet.create({
  shadowView: {
    backgroundColor: 'white',
    width: '100%',
    aspectRatio: 2.5,
    elevation: 5,
    marginBottom: 5,
    borderBottomWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
  },
  column: {
    width: screenWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileRoundImage: {
    height: screenWidth * 0.33,
    width: screenWidth * 0.33,
    borderRadius: (screenWidth * 0.33) / 2,
  },
  row: {
    height: screenHeight * 0.18,
    flexDirection: 'column',
  },
  rowNested: {
    alignItems: 'center',
  },
  boldTitleText: {
    color: colors.fontBlueColor,
    fontSize: 18,
    fontFamily: 'Lato-bold',
  },
  boldNameText: {
    color: colors.fontBlueColor,
    fontSize: 15,
    fontFamily: 'Lato-bold',
  },
  bioInfoText: {
    color: 'grey',
    fontSize: 13,
  },
  votesPostsText: {
    color: colors.fontBlueColor,
    fontSize: 13,
    fontFamily: 'lato-medium',
  },
  profileSmallIcons: {
    fontSize: 15,
    color: 'orange',
  },
  rowSettings: {
    alignSelf: 'flex-end',
  },
  profileSettingsView: {
    elevation: 2,
    marginBottom: -35 / 2,
    borderBottomWidth: 0,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 3,
  },
  profileSettingsTouchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsMediumIcon: {
    fontSize: 20,
    color: 'orange',
  },
  viewBelowSettingsBtn: {
    marginHorizontal: 16,
  },
  viewFollowersFollowing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  flexRow: {
    flexDirection: 'row',
  },
  greySmallIcon: {
    fontSize: 15,
    color: '#D3D3D3',
  },
  followersArrayView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  singleFollowerView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.2,
  },
  followerIcon: {
    height: screenWidth * 0.2,
    width: screenWidth * 0.2,
    borderRadius: (screenWidth * 0.2) / 2,
  },
  followerText: {
    marginTop: 5,
    fontSize: 13,
    fontFamily: 'Lato-bold',
  },
  actTitleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  activityCardView: {
    backgroundColor: 'white',
    height: 60,
    elevation: 3,
    marginBottom: 15,
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    padding: 10,
    borderRadius: 3,
  },
  activityNestedView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  actRoundedImage: {
    height: screenWidth * 0.15,
    width: screenWidth * 0.15,
    borderRadius: (screenWidth * 0.15) / 2,
  },
  shadowViewAnyHeight: {
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: 5,
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
  },
});

export const ProfileStyleExt = EStyleSheet.create({
  userNameText: {
    color: colors.textcolor,
    fontSize: '14rem',
    fontFamily: 'Lato-bold',
  },
  notifBoldText: {
    color: colors.textcolor,
    fontSize: '12rem',
    fontFamily: 'Lato-bold',
  },
  notifDescription: {
    color: colors.textcolor,
    fontSize: '12rem',
    flex: 1,
  },
  settingsText: {
    color: colors.textcolor,
    fontSize: '12rem',
    fontFamily: 'Lato-bold',
  },
  bioText: {
    color: 'grey',
    fontSize: '12rem',
  },
  voteText: {
    color: colors.textcolor,
    fontSize: '12rem',
    fontFamily: 'lato-medium',
  },
  rowView: {
    height: '90rem',
    flexDirection: 'column',
  },
  profileSettingsView: {
    elevation: 2,
    marginBottom: -35 / 2,
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
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 3,
  },
  profileSmallIcons: {
    fontSize: '15rem',
    color: 'orange',
  },
  settingsMediumIcon: {
    width: '20rem',
    height: '20rem',
    color: 'orange',
  },
  boldTitleText: {
    color: colors.fontBlueColor,
    fontSize: '15rem',
    fontFamily: 'Lato-bold',
  },
  greySmallIcon: {
    fontSize: '13rem',
    color: 'grey',
  },
  followerText: {
    flex: 1,
    marginTop: 5,
    fontSize: '12rem',
    fontFamily: 'lato-medium',
    alignSelf: 'center',
    color: colors.fontBlueColor,
  },

  // NARADMUNI HEADER STYLE
  nmHeaderImage: {
    width: '200rem',
    height: '30rem',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  notifCardView: {
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
  },

  actTextCardView: {
    flexDirection: 'column',
    marginLeft: 5,
    flex: 1,
    marginVertical: 2,
    paddingVertical: '3rem',
  },

  actTimeText: {
    color: 'grey',
    fontSize: '11rem',
  },

  // Notification View Styles
  notifTextCardView1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },

  followHeartIcon: {
    fontSize: '15rem',
    color: 'white',
  },
  followWhiteText: {
    padding: 5,
    fontSize: '15rem',
    color: 'white',
    fontFamily: 'Lato-bold',
  },
  followButtonTouchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followBtnView: {
    elevation: 2,
    marginBottom: -35 / 2,
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
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 3,
  },
});
