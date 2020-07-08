/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem} from 'native-base';
import {ScrollView, Image, Text} from 'react-native';
import colors from '../../utils/colors';
import BottomLayout from './BottomLayout';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AllStyles} from '../AllStyles';
import {backgroundLikeSend} from '../../actions/BackgroundAPI';
import {connect} from 'react-redux';
class BeforeAndAfterComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  sendLike = (token, billId, type, modalId) => {
    this.props.backgroundLikeSend(token, billId, type, modalId);
  };
  render() {
    var view = [];

    this.props.detail.map(it => {
      view.push(
        <Card style={styles.cardView}>
          <CardItem>
            <Text
              style={[AllStyles.HeaderCardText, {alignSelf: 'flex-start'}]}
              numberOfLines={1}>
              Rural Toilet Access
            </Text>
          </CardItem>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'column',
              marginVertical: 0,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.textbold]}>{it.stat_number_1}%</Text>
              <Text style={styles.textbold}> - </Text>
              <Text
                style={[
                  styles.textbold,
                  {
                    color: colors.secondaryYellowColor,
                  },
                ]}>
                {it.stat_number_2}%
              </Text>
            </View>
          </View>

          <View style={{alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, fontFamily: 'Lato-bold'}}>
                {it.stat_text_1}
              </Text>
              <Text style={{fontSize: 13, fontFamily: 'Lato-bold'}}> & </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: colors.secondaryYellowColor,
                }}>
                {it.stat_text_2}
              </Text>
            </View>
          </View>
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
    });
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
          <Image
            style={[AllStyles.iconrounded]}
            source={require('../../../assets/chart/chart-lg-yellow.png')}
          />
          <Text style={AllStyles.HeaderCardText}>
            Before and After Analysis{' '}
          </Text>
        </View>
        <ScrollView horizontal>{view}</ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    like: state.backgroundReducer.likesCount,
  };
};
export default connect(mapStateToProps, {backgroundLikeSend})(
  BeforeAndAfterComponent,
);
// export default BeforeAndAfterComponent;

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
  cardView: {
    width: '300rem',

    elevation: 5,
    margin: 2,

    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    borderRadius: 5,
  },

  textbold: {fontSize: '40rem', fontFamily: 'Lato-black'},
});
