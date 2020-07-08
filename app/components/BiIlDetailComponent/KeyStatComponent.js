/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem} from 'native-base';
import {Image, Dimensions, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {backgroundLikeSend} from '../../actions/BackgroundAPI';
import {connect} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../utils/colors';
import BottomLayout from './BottomLayout';
import {AllStyles} from '../AllStyles';
import CodePush from 'react-native-code-push';

var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});
class KeyStatConponent extends React.Component {
  sendLike = (token, billId, type, modalId) => {
    this.props.backgroundLikeSend(token, billId, type, modalId);
    console.log('modelid', this.props.modalId);
  };
  render() {
    var cardpush = [];
    this.props.detail.map((it, i) => {
      if (i == 0) {
        cardpush.push(
          <Card style={styles.cardWidth}>
            <CardItem>
              <Text style={AllStyles.HeaderCardText} numberOfLines={1}>
                #{it.title}
              </Text>
            </CardItem>

            <CardItem>
              <Text
                style={{
                  fontSize: 40,
                  color: colors.secondaryYellowColor,
                  fontFamily: 'Lato-black',
                }}>
                {formatvalue(it.stat_number_1)}
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  AllStyles.briefText,
                  {
                    alignSelf: 'center',
                    fontFamily: 'Lato-bold',
                    color: colors.textcolor,
                  },
                ]}>
                {it.stat_text_1}
              </Text>
            </CardItem>
            <BottomLayout
              // onPress={index =>
              //   this.sendLike(
              //     this.props.token && this.props.token,
              //     this.props.id.bill_detail.bill_id &&
              //       this.props.id.bill_detail.bill_id,
              //     'bill_info_cards',
              //     it.info_card_id,
              //   )
              // }
              // onPressLong={this.props.onPress}
              onPress={() =>
                this.props.onPress.navigate('commentDetailScreen', {
                  commentdata: it,
                  title: this.props.title,
                  icon: this.props.icon,
                })
              }
              likes_count={this.props.like}
              comments_count={it.comments_count}
              shares_count={it.shares_count}
            />
          </Card>,
        );
      }
      return CodePush;
    });

    return (
      <View>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <Image
              style={AllStyles.iconsize}
              source={require('../../../assets/statistics/statistics.png')}
            />
            <Text style={AllStyles.HeaderCardText}>Key Stats </Text>
          </View>
          <ScrollView horizontal>{cardpush}</ScrollView>
        </View>
      </View>
    );
  }
}

const formatvalue = n => {
  if (n < 1e3) {
    return n;
  }
  if (n >= 1e3 && n < 1e6) {
    return +(n / 1e3).toFixed(0) + 'K';
  }
  if (n >= 1e6 && n < 1e9) {
    return +(n / 1e6).toFixed(0) + 'M';
  }
  if (n >= 1e9 && n < 1e12) {
    return +(n / 1e9).toFixed(0) + 'B';
  }
  if (n >= 1e12) {
    return +(n / 1e12).toFixed(0) + 'T';
  }
};
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    like: state.backgroundReducer.likesCount,
  };
};
export default connect(mapStateToProps, {backgroundLikeSend})(KeyStatConponent);
// export default KeyStatConponent;

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},
  smallfont: {fontSize: 10},
  detailtop: {flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-start'},
  breif: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timeline: {
    flexDirection: 'column',
  },
  timelinetop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  rowspace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardWidth: {
    width: '300rem',
    justifyContent: 'space-between',
    backgroundColor: 'white',

    elevation: 5,
    marginBottom: '15rem',
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 1},
    padding: '5rem',
    borderRadius: 5,
  },
  description: {flexGrow: 1, justifyContent: 'flex-start'},
});
