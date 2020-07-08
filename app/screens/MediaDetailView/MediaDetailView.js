/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Icon, Card, Content} from 'native-base';
import {Image, TextInput, Dimensions} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {getBillCardComment} from '../../actions/BillsApi';
import {connect} from 'react-redux';
import {CommentComponent} from '../../components/MediaDetailComponent';
import {RoundedIcon} from '../../components';

import HeaderComponentwithBack from '../../components/HeaderComponentwithBack';
class MediaDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mediadata: this.props.navigation.state.params.mediadata,
    };
    console.log('hssello data', this.props.navigation.state.params.title);
  }
  componentDidMount() {
    this.getbilllcomment();
  }

  getbilllcomment() {
    // this.props.getBillCardComment(
    //   this.props.token,
    //   this.state.id,
    //   this.state.info_card_id,
    // );
  }

  static navigationOptions = ({navigation}) => {
    console.log('hello data12', navigation.state.params.mediadata);
    return {
      header: (
        <HeaderComponentwithBack
          moveToNotif={navigation}
          title={navigation.state.params.title}
          image={navigation.state.params.mediadata.logo}
        />
      ),
    };
  };
  render() {
    return (
      <Content>
        <View>
          <View>
            <Image
              source={{
                uri: this.state.mediadata.image,
              }}
              style={{height: 200, width: '100%'}}
            />
            <View
              style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
              <RoundedIcon
                //uri={it.logo}
                uri={this.state.mediadata.logo}
                mainStyle={{width: 50, height: 50}}
              />

              <Text style={{marginLeft: 10, flex: 1, fontFamily: 'Lato-bold'}}>
                {this.state.mediadata.title}
              </Text>
            </View>
            <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../../assets/timegray.png')}
                  style={{width: 15, height: 15}}
                />

                <Text
                  note
                  style={{
                    fontSize: 12,
                    marginLeft: 5,
                    fontFamily: 'Lato-regular',
                  }}>
                  29 oct 2019 08:00 pm
                </Text>
              </View>
              <Text note style={{marginTop: 10, fontFamily: 'Lato-regular'}}>
                {this.state.mediadata.description}
              </Text>

              <View style={{marginVertical: 10}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginVertical: 10,
                  }}>
                  <Text style={styles.smallfont}>
                    {this.state.mediadata.likes_count} Likes
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={styles.smallfont}>
                      {this.state.mediadata.comments_count} Comments{' '}
                    </Text>
                    <Text style={styles.smallfont}>
                      {this.state.mediadata.shares_count} Shares
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 1,
                    backgroundColor: 'lightgray',
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                      flex: 1,
                    }}>
                    <View style={styles.row}>
                      <Icon
                        name="like1"
                        type="AntDesign"
                        style={{color: 'lightgray', fontSize: 20}}
                      />
                      <Text style={styles.mediumfont}>Like</Text>
                    </View>
                    <View style={styles.row}>
                      <Icon
                        name="comment"
                        type="Foundation"
                        style={{color: 'lightgray', fontSize: 20}}
                      />
                      <Text style={styles.mediumfont}>Comment</Text>
                    </View>
                    <View style={styles.row}>
                      <Icon
                        name="share"
                        type="FontAwesome"
                        style={{color: 'lightgray', fontSize: 15}}
                      />
                      <Text style={styles.mediumfont}>Share</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Card style={{flex: 1, height: 40}}>
                <TextInput
                  placeholder="Write your Comment here..."
                  multiline={true}
                  style={{
                    textAlignVertical: 'center',
                    marginTop: 5,
                    marginLeft: 5,
                    flex: 1,
                  }}
                />
              </Card>
              <Card style={{width: 80, height: 40}}>
                <View
                  style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    padding: 10,
                  }}>
                  <Image
                    source={require('../../../assets/done.png')}
                    style={{width: 10, height: 10, alignSelf: 'center'}}
                  />
                  <Text>Add</Text>
                </View>
              </Card>
            </View>
            <CommentComponent
            // onPress={() =>
            //   this.props.navigation.navigate('CommentDetailScreen')
            // }
            />
          </View>
        </View>
      </Content>
    );
  }
}
const mapStateToProps = state =>
  console.log('initaial state ::', state) || {
    token: state.authReducer.token,
    data: state.BIllsReducer.comment,
  };
export default connect(
  mapStateToProps,
  {getBillCardComment},
)(MediaDetailView);

var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},
  smallfont: {fontSize: '9rem', color: 'gray', fontFamily: 'Lato-regular'},
  mediumfont: {
    fontSize: '12rem',
    fontFamily: 'Lato-regular',
    color: 'gray',
    margin: '5rem',
  },
});
