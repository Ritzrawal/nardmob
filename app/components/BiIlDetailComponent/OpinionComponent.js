/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Card, CardItem} from 'native-base';
import {Text, TouchableOpacity, View} from 'react-native';
import {backgroundLikeSend} from '../../actions/BackgroundAPI';
import {connect} from 'react-redux';
import BottomLayout from './BottomLayout';
import {AllStyles} from '../AllStyles';
class OpinionComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  sendLike = (token, billId, type, modalId) => {
    this.props.backgroundLikeSend(token, billId, type, modalId);
    console.log('modelid', this.props.modalId);
  };
  render() {
    let view = [];
    this.props.detail.map(it => {
      view.push(
        <Card
          style={[
            this.props.style,
            {
              elevation: 7,
              shadowOffset: {width: 0, height: 5},
              borderRadius: 5,
            },
          ]}>
          <CardItem
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text style={[AllStyles.HeaderCardText, {marginBottom: 10}]}>
              {it.title}:
            </Text>

            <Text style={AllStyles.briefText} numberOfLines={3}>
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
            likes_count={it.likes_count}
            // onPressLong={this.props.onPress}
            comments_count={it.comments_count}
            shares_count={it.shares_count}
            style={{
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
          />
        </Card>,
      );
    });
    return <View>{view}</View>;
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
  };
};
export default connect(mapStateToProps, {backgroundLikeSend})(OpinionComponent);
// export default OpinionComponent;
