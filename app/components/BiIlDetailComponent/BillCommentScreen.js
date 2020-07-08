/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Icon, Card, Content} from 'native-base';
import {Image, TextInput, Dimensions} from 'react-native';
import colors from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getBillCardComment} from '../../actions/BillsApi';
import {connect} from 'react-redux';
import CommentComponent from '../MediaDetailComponent/CommentComponent';
import HeaderComponentwithBack from '../../components/HeaderComponentwithBack';
import {AllStyles} from '../AllStyles';
import {RoundedIcon} from '../../components';

class BillCommentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: this.props.navigation.state.params.detail,
      commentdata: this.props.navigation.state.params.commentdata,
    };
  }
  // componentDidMount() {
  //   this.getbilllcomment();
  // }

  // getbilllcomment() {
  //   this.props.getBillCardComment(
  //     this.props.token,
  //     this.state.id,
  //     this.props.navigation.state.params.commentdata.info_cards_id,
  //   );
  // }
  static navigationOptions = ({navigation}) => {
    // console.log('hello comment', this.state.id);
    return {
      header: (
        <HeaderComponentwithBack
          moveToNotif={navigation}
          title={navigation.state.params.title}
          image={navigation.state.params.icon}
        />
      ),
    };
  };
  render() {
    console.log('hello comm', this.props.navigation.state.params.commentdata);
    var view = [];

    view.push(
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Text style={{marginLeft: 10, flex: 1, fontFamily: 'Lato-bold'}}>
            {this.state.commentdata.title}
          </Text>
        </View>

        <View style={{flexDirection: 'column', paddingHorizontal: 10}}>
          {this.state.commentdata.description == null ? (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                padding: 10,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'column',
                  marginVertical: 0,
                }}>
                {this.state.commentdata.stat_text_2 == null ? (
                  <View>
                    {this.state.commentdata.opinion == null ? (
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 40,
                            color: colors.secondaryYellowColor,
                            fontFamily: 'Lato-black',
                          }}>
                          {formatvalue(this.state.commentdata.stat_number_1)}
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
                          {this.state.commentdata.stat_text_1}
                        </Text>
                      </View>
                    ) : (
                      <View>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            backgroundColor: colors.primaryBlueColor,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: 10,
                            }}>
                            {/* <RoundedIcon
                              source
                              uri={this.state.commentdata.profile_pic}
                              style={{width: 10, height: 10}}
                            /> */}
                            <Text
                              style={{
                                color: 'white',
                                fontSize: 10,
                                marginLeft: 10,
                                fontFamily: 'Lato-bold',
                              }}>
                              {this.state.commentdata.opinion}
                            </Text>
                          </View>
                          <Image
                            source={{
                              uri: this.state.commentdata.media_url,
                            }}
                            style={{width: 350, height: 100}}
                          />
                        </View>
                      </View>
                    )}
                  </View>
                ) : (
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[styles.textbold]}>
                        {this.state.commentdata.stat_number_1}%
                      </Text>
                      <Text style={styles.textbold}> - </Text>
                      <Text
                        style={[
                          styles.textbold,
                          {
                            color: colors.secondaryYellowColor,
                          },
                        ]}>
                        {this.state.commentdata.stat_number_2}%
                      </Text>
                    </View>
                    <View style={{alignSelf: 'center'}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 13, fontFamily: 'Lato-bold'}}>
                          {this.state.commentdata.stat_text_1}
                        </Text>
                        <Text style={{fontSize: 13, fontFamily: 'Lato-bold'}}>
                          &
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            color: colors.secondaryYellowColor,
                          }}>
                          {this.state.commentdata.stat_text_2}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          ) : (
            <View>
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
                {this.state.commentdata.description}
              </Text>
            </View>
          )}
          <View style={{marginVertical: 10}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Text style={styles.smallfont}>
                {/* {formatvalue(
                  this.props.data.bill_info_salient_points_cards &&
                    this.props.data.bill_info_salient_points_cards.likes_count,
                )}
                {''} */}
                Likes
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.smallfont}>2.7k Comments </Text>
                <Text style={styles.smallfont}>10 Shares</Text>
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
                  <Text style={styles.font}>Like</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    name="comment"
                    type="Foundation"
                    style={{color: 'lightgray', fontSize: 20}}
                  />
                  <Text style={styles.font}>Comment</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    name="share"
                    type="FontAwesome"
                    style={{color: 'lightgray', fontSize: 15}}
                  />
                  <Text style={styles.font}>Share</Text>
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
      </View>,
    );

    return (
      <Content>
        <View>{view}</View>
      </Content>
    );
  }
}
const mapStateToProps = state =>
  console.log('initaial state ::', state) || {
    token: state.authReducer.token,
    data: state.BIllsReducer.commentdata,
  };
const formatvalue = n => {
  if (n < 1e3) {
    return n;
  }
  if (n >= 1e3 && n < 1e6) {
    return +(n / 1e3).toFixed(1) + 'K';
  }
  if (n >= 1e6 && n < 1e9) {
    return +(n / 1e6).toFixed(1) + 'M';
  }
  if (n >= 1e9 && n < 1e12) {
    return +(n / 1e9).toFixed(1) + 'B';
  }
  if (n >= 1e12) {
    return +(n / 1e12).toFixed(1) + 'T';
  }
};
export default connect(mapStateToProps, {getBillCardComment})(
  BillCommentScreen,
);

var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},
  smallfont: {fontSize: '9rem', color: 'gray', fontFamily: 'Lato-regular'},
  font: {
    fontSize: '12rem',
    fontFamily: 'Lato-regular',
    color: 'gray',
    margin: '5rem',
  },
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
