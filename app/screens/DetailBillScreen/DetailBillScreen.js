/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TimeCardView} from '../../components/DetailScreenComponent';
import {
  BillBreifComponent,
  BillTimelineComponent,
  OpinionComponent,
  KeyStatConponent,
  SalientComponent,
  BackgroundComponent,
  BeforeAndAfterComponent,
  MediaComponent,
  CitizenPoll,
  BillOpinion,
  VoteNowScreen,
} from '../../components/BiIlDetailComponent';
import {getBilldetail} from '../../actions/BillsApi';
import {connect} from 'react-redux';
import BottomVoteNow from '../../components/BiIlDetailComponent/BottomVoteNow';
import HeaderComponentwithBack from '../../components/HeaderComponentwithBack';

class DetailBillScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.navigation.state.params.billid,
      data: this.props.data,
      success: this.props.success,
      ordered: [],
      title: this.props.navigation.state.params.title,
      icon: this.props.navigation.state.params.icon,
    };
  }

  static navigationOptions = ({navigation}) => {
    const appToolbarTitle =
      navigation.state.params && navigation.state.params.title
        ? navigation.state.params.title
        : '';
    const icontitle =
      navigation.state.params && navigation.state.params.icon
        ? navigation.state.params.icon
        : '';

    console.log('hello data', appToolbarTitle);
    return {
      header: (
        <HeaderComponentwithBack
          moveToNotif={navigation}
          title={appToolbarTitle}
          image={icontitle}
        />
      ),
    };
  };

  componentDidMount() {
    this.getbilllist();
  }

  getbilllist() {
    this.props.getBilldetail(this.props.token, this.state.id);
  }
  getview(name) {
    if (name === 'bill_detail') {
      return <BillBreifComponent detail={this.props.data.data.bill_detail} />;
    } else if (name === 'bill_opinions') {
      return (
        <BillOpinion
          onPressIn={this.props.navigation}
          title={this.state.title}
          icon={this.state.icon}
          onPress={() => this.props.navigation.navigate('Write')}
          detail={this.props.data.data.bill_opinions}
        />
      );
    } else if (name === 'bill_timelines') {
      return (
        <BillTimelineComponent
          onPress={() =>
            this.props.navigation.navigate('timeline', {
              timeline: this.props.data.data.bill_timelines,
              title: this.state.title,

              icon: this.state.icon,
            })
          }
          detail={this.props.data.data.bill_timelines}
          data={this.appToolbarTitle}
        />
      );
    } else if (name === 'bill_info_text_cards') {
      return (
        <OpinionComponent
          onPress={this.props.navigation}
          title={this.state.title}
          icon={this.state.icon}
          detail={this.props.data.data.bill_info_cards.bill_info_text_cards}
          id={this.props.data.data}
        />
      );
    } else if (name === 'bill_info_stat_cards') {
      return (
        <KeyStatConponent
          onPress={this.props.navigation}
          title={this.state.title}
          icon={this.state.icon}
          style={{marginTop: 20}}
          detail={this.props.data.data.bill_info_cards.bill_info_stat_cards}
          id={this.props.data.data}
        />
      );
    } else if (name === 'bill_info_salient_cards') {
      return (
        <SalientComponent
          onPress={this.props.navigation}
          title={this.state.title}
          icon={this.state.icon}
          style={{marginTop: 20}}
          detail={
            this.props.data.data.bill_info_cards.bill_info_salient_points_cards
          }
          id={this.props.data.data}
        />
      );
    } else if (name === 'bill_info_background_basics_cards') {
      return (
        <BackgroundComponent
          onPress={this.props.navigation}
          title={this.state.title}
          icon={this.state.icon}
          style={{marginTop: 20}}
          detail={
            this.props.data.data.bill_info_cards
              .bill_info_background_basics_cards
          }
          id={this.props.data.data}
        />
      );
    } else if (name === 'bill_info_news_cards') {
      return (
        <MediaComponent
          onPress={this.props.navigation}
          icon={this.state.icon}
          title={this.state.title}
          viewAll={() => this.props.navigation.navigate('ViewAll')}
          detail={this.props.data.data.bill_info_cards.bill_info_news_cards}
        />
      );
    } else if (name === 'bill_info_before_after_analysis_cards') {
      return (
        <BeforeAndAfterComponent
          style={{marginTop: 20}}
          onPress={this.props.navigation}
          icon={this.state.icon}
          title={this.state.title}
          detail={
            this.props.data.data.bill_info_cards
              .bill_info_before_after_analysis_cards
          }
          id={this.props.data.data}
        />
      );
    } else if (name === 'bill_citizen_polls') {
      return (
        <CitizenPoll
          onPress={() => this.props.navigation.navigate('Votenow')}
        />
      );
    }
    return <Text>{name}</Text>;
  }

  render() {
    let orderlist = [];
    let bottomview = <BottomVoteNow />;
    if (this.props.success) {
      if (this.props.data != null) {
        console.log('data', this.props.data);
        this.props.data.data.order.map(or => {
          orderlist = [...orderlist, this.getview(or.name)];
        });
        bottomview = (
          <BottomVoteNow detail={this.props.data.data.citizen_poll_deadline} />
        );
      }
    }
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <ScrollView>
            <View style={{flex: 1}}>
              <TimeCardView
                data={this.props.data}
                onPress={() => this.props.navigation.navigate('Write')}
              />
              <View style={{flexDirection: 'column', margin: 10}}>
                {orderlist}

                <View />
              </View>
            </View>
          </ScrollView>
          {bottomview}
        </View>
      </View>
    );
  }
}
const mapStateToProps = state =>
  console.log('initaial state ::', state) || {
    token: state.authReducer.token,
    data: state.BIllsReducer.billdetail,
    success: state.BIllsReducer.success,
    newState: state.BIllsReducer.billdetail,
  };

export default connect(mapStateToProps, {getBilldetail})(DetailBillScreen);
