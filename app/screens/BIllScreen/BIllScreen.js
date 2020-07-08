import React from 'react';
import {
  View,
  FlatList,
  List,
  RefreshControl,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import BillItemCardVIew from '../../components/BillItemCardVIew/BillItemCardVIew';
import {getBillList} from '../../actions/BillsApi';
import {connect} from 'react-redux';
class BillScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      users: [],
      isLoading: false,
      isRefreshing: false,
      id: this.props.navigation.state.params,
    };

    console.log('billscreeen data', this.props.screenProps.title);
  }

  componentDidMount() {
    this.getlistofdata();
  }

  getlistofdata = () => {
    var billtyple = 0;
    switch (this.props.screenProps.title) {
      case 'allbills':
        billtyple = 1;
        break;
      case 'cashbill':
        billtyple = 2;
        break;
      case 'opinionbill':
        billtyple = 3;
        break;
      case 'amendment':
        billtyple = 4;
        break;
    }

    this.props.getBillList(
      this.props.token,
      this.state.page + '',
      '' + billtyple,
    );
  };
  handleRefresh = () => {
    console.log('refresing inside');
    this.setState(
      {
        page: 1,
        isRefreshing: true,
      },
      () => {
        this.getlistofdata();
      },
    );
  };
  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.getlistofdata();
      },
    );
  };

  render() {
    console.log('bilscreendata', this.props.loading);
    var listdata = this.getlistdata();
    return (
      <View style={layoutStyle.main}>
        <FlatList
          data={listdata}
          renderItem={({item}) => (
            <BillItemCardVIew
              onPress={() =>
                this.props.navigation.navigate('detail', {
                  billid: item.id,
                  title: item.title,
                  icon: item.mp_pic,
                })
              }
              key={item.id}
              data={item}
            />
          )}
          // onEndReached={this.handleLoadMore}
          refreshing={this.props.loading}
          onRefresh={this.handleRefresh}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  getlistdata = () => {
    switch (this.props.screenProps.title) {
      case 'allbills':
        return this.props.billlist;

      case 'cashbill':
        return this.props.cashbill;

      case 'opinionbill':
        return this.props.opinionbill;

      case 'amendment':
        return this.props.amendment;
    }
  };
}

const mapStateToProps = state =>
  console.log('initaial state ::', state) || {
    token: state.authReducer.token,
    data: state.BIllsReducer.data,
    page: state.BIllsReducer.page,
    cashbill: state.BIllsReducer.cashbill,
    billlist: state.BIllsReducer.billlist,
    amendment: state.BIllsReducer.amendment,
    opinionbill: state.BIllsReducer.opinionbill,
    loading: state.BIllsReducer.loading,
  };

export default connect(
  mapStateToProps,
  {getBillList},
)(BillScreen);

const layoutStyle = EStyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: '5rem',
  },
});
