/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem} from 'native-base';
import {ScrollView, Dimensions, Image, Text} from 'react-native';
import colors from '../../utils/colors';
import BottomLayout from './BottomLayout';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AllStyles} from '../AllStyles';
import {backgroundLikeSend} from '../../actions/BackgroundAPI';
import {connect} from 'react-redux';
var screenWidth = Dimensions.get('window').width;

EStyleSheet.build({$rem: screenWidth / 350});
class BackgroundComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  sendLike = (token, billId, type, modalId) => {
    this.props.backgroundLikeSend(token, billId, type, modalId);
    console.log('modelid', this.props.type);
  };
  render() {
    let view = [];
    console.log('background', this.props.detail);
    this.props.detail.map((it, i) => {
      view.push(
        <Card style={styles.cardView}>
          <CardItem>
            <View
              numberOfLines={2}
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
            style={[AllStyles.iconrounded]}
            source={require('../../../assets/Info/info.png')}
          />
          <Text style={AllStyles.HeaderCardText}>Background & basics </Text>
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
  BackgroundComponent,
);

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
    justifyContent: 'space-between',
    elevation: 5,
    marginBottom: '15rem',
    borderBottomWidth: 0,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: 'gray',
    shadowOffset: {height: 0, width: 0},
    padding: '5rem',
    borderRadius: 5,
  },
  description: {
    flexGrow: 1,
    alignItems: 'flex-start',
  },
});
