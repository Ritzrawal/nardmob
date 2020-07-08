import {Dimensions} from 'react-native';
import colors from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});

export const ActivityStyles = EStyleSheet.create({
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
    fontWeight: '500',
  },
  actBoldText: {
    color: colors.primaryBlueColor,
    fontSize: '13rem',
    fontWeight: '500',
  },
  actNormalText: {
    color: colors.primaryBlueColor,
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
});
