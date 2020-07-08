import {Dimensions, Platform} from 'react-native';
import colors from '../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});

export const AllStyles = EStyleSheet.create({
  // Activity View >> Follow Component Styles
  activityFBCardView: {
    backgroundColor: 'white',
    height: '100rem',
    elevation: 3,
    marginBottom: '15rem',
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    padding: '5rem',
    borderRadius: 3,
  },
  activityNestedView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  actRoundedImage: {
    height: screenWidth * 0.2,
    width: screenWidth * 0.2,
    borderRadius: (screenWidth * 0.2) / 2,
  },
  userNameText: {
    color: colors.primaryBlueColor,
    fontSize: '14rem',
    fontFamily: 'Lato-bold',
  },
  actBoldText: {
    color: colors.fontBlueColor,
    fontSize: '13rem',
    fontFamily: 'Lato-bold',
  },
  actNormalText: {
    color: colors.fontBlueColor,
    fontSize: '13rem',
  },
  textFollowView: {
    flex: 1,
  },
  actTimeText: {
    color: 'grey',
    fontSize: '11rem',
  },
  circleView: {
    padding: 10,
    height: '100%',
    aspectRatio: 1,
  },
  buttonFollowBold: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: colors.secondaryYellowColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30rem',
  },
  saveIcon: {
    fontSize: '15rem',
    color: 'white',
  },
  saveText: {
    padding: 5,
    fontSize: '15rem',
    color: 'white',
    fontFamily: 'Lato-bold',
  },
  questionText: {
    padding: 10,
    fontSize: '15rem',
    color: 'white',
    fontFamily: 'Lato-bold',
  },
  //bill bold text
  textbold: {
    ...Platform.select({
      ios: {
        fontFamily: 'Lato-bold',
      },
      android: {
        fontFamily: 'Lato-bold',
      },
    }),
  },

  HeaderCardText: {
    fontFamily: 'Lato-bold',
    color: colors.textcolor,
    fontSize: '13rem',
  },

  briefText: {color: '#8F8F8F', fontFamily: 'Lato-medium', fontSize: '11rem'},

  iconsize: {width: '25rem', height: '20rem', marginRight: 10},
  iconrounded: {width: '25rem', height: '25rem', marginRight: 10},
  //Activity Opinion View Component
  smallRoundedImage: {
    height: screenWidth * 0.15,
    width: screenWidth * 0.15,
    borderRadius: (screenWidth * 0.15) / 2,
  },
  activityOpinionCardView: {
    backgroundColor: 'white',
    // height: "350rem",
    marginBottom: '15rem',
    elevation: 3,
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    borderRadius: 3,
  },
  rowDes: {
    height: '65rem',
    padding: '10rem',
  },
  headlineImgView: {
    height: '180rem',
    width: '100%',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    alignSelf: 'flex-start',
    fontSize: '14rem',
    fontFamily: 'Lato-bold',
    justifyContent: 'center',
  },
  titleDesc: {
    color: 'white',
    fontSize: '12rem',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'lato-medium',
    opacity: 0.8,
  },
  commentText: {
    color: 'grey',
    fontSize: '13rem',
    fontFamily: 'lato-medium',
  },
  seeMoreText: {
    color: colors.primaryBlueColor,
    fontSize: '13rem',
    fontFamily: 'lato-medium',
  },
  fontSmallGray: {
    fontSize: '11rem',
    color: 'gray',
  },
  fontMedGray: {
    fontSize: '12rem',
    color: 'gray',
    fontFamily: 'Lato-bold',
  },
  billTitle: {
    color: colors.fontBlueColor,
    fontSize: '14rem',
    fontFamily: 'Lato-bold',
  },
  dateText: {
    color: 'gray',
    fontSize: '13rem',
    marginVertical: '5rem',
  },
  billDescText: {
    color: colors.fontBlueColor,
    fontSize: '13rem',
  },
  opiniionTextView: {
    backgroundColor: 'white',
    elevation: 3,
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    borderRadius: 3,
  },
  mediumFont: {
    fontSize: '12rem',
    fontFamily: 'Lato-bold',
    color: 'gray',
    margin: '5rem',
  },
});
