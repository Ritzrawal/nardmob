/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem} from 'native-base';
import {Image, Dimensions, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {backgroundLikeSend} from '../../actions/BackgroundAPI';
import {getBillCardComment} from '../../actions/BillsApi';
import colors from '../../utils/colors';
import BottomLayout from './BottomLayout';
import {connect} from 'react-redux';
import {AllStyles} from '../AllStyles';

var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});
class SalientComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  sendLike = (token, billId, type, modalId) => {
    this.props.backgroundLikeSend(token, billId, type, modalId);
    this.props.getBillCardComment(token, billId, type, modalId);
  };

  render() {
    // console.log(
    //   'salient ',
    //   this.props.billDetailsData ? this.props.billDetailsData : 'hey',
    // );
    var cardpush = [];
    console.log('silentcomponent', this.props.detail);
    this.props.detail.map((it, i) => {
      cardpush.push(
        <Card style={styles.cardWidth} key={i}>
          <CardItem>
            <View
              style={{
                justifyContent: 'center',
                marginRight: 5,
                alignItems: 'center',
                width: 24,
                height: 24,
                borderRadius: 24 / 2,
                backgroundColor: colors.primaryBlueColor,
              }}>
              <Text style={{fontSize: 17, color: 'white'}}>{i + 1}</Text>
            </View>
            <Text style={AllStyles.HeaderCardText} numberOfLines={1}>
              {it.title}
            </Text>
          </CardItem>

          <CardItem style={styles.description}>
            <Text numberOfLines={2} style={AllStyles.briefText}>
              {it.description}
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
            onPress={() =>
              this.props.onPress.navigate('commentDetailScreen', {
                commentdata: it,
                title: this.props.title,
                icon: this.props.icon,
              })
            }
            // onPressLong={this.props.onPress}
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
            source={require('../../../assets/bullet/bullet-lg-yellow.png')}
            style={[AllStyles.iconsize]}
          />
          <Text style={AllStyles.HeaderCardText}>Salient Point </Text>
        </View>
        <ScrollView horizontal>{cardpush}</ScrollView>
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
export default connect(mapStateToProps, {
  backgroundLikeSend,
  getBillCardComment,
})(SalientComponent);

// export default SalientComponent;

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
