/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Icon, View, Content} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

import {StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';

import {ProfileStyles, ProfileStyleExt} from './ProfileStyles';
import {connect} from 'react-redux';
import {Logout} from '../../actions/LoginScreenApi';
import RoundedIcon from '../../components/RoundedIcon';
import {
  followersList,
  UserActivities,
  followingList,
} from '../../utils/constants';
import {TitleWithImgComponent, FollowerComponent} from '../../components';
import {
  OpinionViewComponent,
  FollowViewComponent,
  VoteViewComponent,
  BillRelatedComponent,
  ReplyComponent,
} from '../../components/ActivityComponent';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false, //begin with box closed
    };
  }
  gotologin = () => {
    this.props.Logout();
    this.props.navigation.navigate('SignIn');
  };
  signOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.gotologin()},
      ],
      {cancelable: false},
    );
  };
  //function that takes in expanded and makes it the opposite of what it currently is
  showButton = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    const {navigation} = this.props;
    const uri =
      'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg'; //https://facebook.github.io/react-native/docs/assets/favicon.png";
    var nameString = JSON.stringify(navigation.getParam('name', 'Remon Nabil'));
    var imageUrl = JSON.stringify(navigation.getParam('profileImage', uri));
    var isFollowing = JSON.stringify(
      navigation.getParam('following', 'showSettings'),
    );
    var follow = JSON.parse(isFollowing);
    let buttonView;
    if (follow === 'showSettings') {
      buttonView = (
        <View style={styles.settingsBtnView}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.settingTouchView}
            onPress={() => this.props.navigation.navigate('ProfSetting')}>
            <Icon name="settings" type="Octicons" style={styles.settingsIcon} />
            <Text style={styles.profileSettingsText}> Profile Settings </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (follow === true) {
      buttonView = (
        <View style={styles.followBtnView}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.followButtonTouchView}
            onPress={() => this.props.navigation.navigate('')}>
            <Icon
              name="heart"
              type="FontAwesome"
              style={styles.followHeartIcon}
            />
            <Text style={styles.followWhiteText}> Following </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      buttonView = (
        <View style={styles.followBtnView}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.followButtonTouchView}
            onPress={() => this.props.navigation.navigate('')}>
            <Icon
              name="heart"
              type="FontAwesome"
              style={styles.followHeartIcon}
            />
            <Text style={styles.followWhiteText}> Follow </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <Container>
        <Content>
          <View style={styles.profileDetailView}>
            <Grid>
              <Col style={styles.colView}>
                <RoundedIcon
                  uri={JSON.parse(imageUrl)}
                  mainStyle={styles.profileRoundIcon}
                />
              </Col>
              <Col>
                <Row />
                <Row style={styles.rowViewProfileDetail}>
                  <Row style={styles.rowUserName}>
                    <Col>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.usernameBoldText}>
                        {JSON.parse(nameString)}
                      </Text>
                    </Col>
                    <Col>
                      <Icon
                        name="log-out"
                        type="Feather"
                        onPress={() => this.signOut()}
                        style={styles.tinyIcons}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.userBioInfoText}>
                      Hi! I'm Remon Nabil, UX Designer/UI Developer. I like
                      desiging alot. Check out my latest work.
                    </Text>
                  </Row>
                  <Row style={styles.rowUserName}>
                    <Icon
                      name="check-square-o"
                      type="FontAwesome"
                      style={styles.tinyIcons}
                    />
                    <Text style={styles.votesText}> 220 Votes </Text>
                    <Icon
                      name="comment-processing"
                      type="MaterialCommunityIcons"
                      style={styles.tinyIcons}
                    />
                    <Text style={styles.votesText}> 83 Posts</Text>
                  </Row>
                </Row>
                <Row style={styles.rowSettingsView}>{buttonView}</Row>
              </Col>
            </Grid>
          </View>
          <View style={styles.viewBelow}>
            <FollowerComponent
              title="Followers"
              count="200"
              followArray={followersList}
              onPressNavigation={this.props.navigation}
            />
            <FollowerComponent
              title="Following"
              count="100"
              followArray={followingList}
              onPressNavigation={this.props.navigation}
            />
            <TitleWithImgComponent
              source={require('../../../assets/calendar.png')}
              activityName="Remon's Activities"
            />

            <View style={{marginVertical: 10}}>
              {UserActivities.map(activity => {
                let message;
                if (activity.headerNo === 1) {
                  //FOLLOW VIEW with follow action ==== headerNo 1
                  message = (
                    <FollowViewComponent
                      userName={activity.content.name}
                      description={activity.content.act}
                      time={activity.content.time}
                      profileImage={activity.content.profileImage}
                      iconName="heart"
                      iconType="FontAwesome"
                      buttonTitle={activity.content.action}
                    />
                  );
                } else if (activity.headerNo === 2) {
                  //VOTE VIEW ==== headerNo 2
                  message = (
                    <VoteViewComponent
                      question={activity.content.billDetailVote.question}
                      option={activity.content.billDetailVote.optionA}
                      userName={activity.content.name}
                      description={activity.content.act}
                      time={activity.content.time}
                      profileImage={activity.content.profileImage}
                      iconName="heart"
                      iconType="FontAwesome"
                      buttonTitle="Follow"
                    />
                  );
                } else if (activity.headerNo === 3) {
                  //WROTE AN OPINION VIEW === headerNo 3
                  const textLong = activity.content.billDetail.opinion;
                  let textEx = '';
                  let moreLessText = 'See More';

                  if (this.state.expanded === true) {
                    textEx = textLong;
                    moreLessText = 'See Less';
                  } else {
                    textEx =
                      textLong.length < 70
                        ? `${textLong}`
                        : `${textLong.substring(0, 70)}... `;
                    moreLessText = 'See More';
                  }
                  message = (
                    <OpinionViewComponent
                      buttonText={moreLessText}
                      comment={textEx}
                      state={this.state.expanded}
                      seeMoreBtn={this.showButton}
                      userName={activity.content.name}
                      description={activity.content.act}
                      time={activity.content.time}
                      profileImage={activity.content.profileImage}
                    />
                  );
                } else if (activity.headerNo === 4) {
                  //Shared/liked this View ==== headerNo 4
                  message = (
                    <OpinionViewComponent
                      buttonText=""
                      comment=""
                      state={this.state.expanded}
                      seeMoreBtn={this.showButton}
                      userName={activity.content.name}
                      description={activity.content.act}
                      time={activity.content.time}
                      profileImage={activity.content.profileImage}
                    />
                  );
                } else if (activity.headerNo === 5) {
                  //BILL RELATED View ==== headerNo 5
                  message = (
                    <BillRelatedComponent
                      buttonText=""
                      comment=""
                      state={this.state.expanded}
                      seeMoreBtn={this.showButton}
                      userName={activity.content.name}
                      description={activity.content.act}
                      time={activity.content.time}
                      profileImage={activity.content.profileImage}
                    />
                  );
                } else if (activity.headerNo === 6) {
                  //COMMENTED ON A OPINION View ==== headerNo 6
                  const textLong = activity.content.billDetail.opinion;
                  let textEx = '';
                  let moreLessText = 'See More';

                  if (this.state.expanded === true) {
                    textEx = textLong;
                    moreLessText = 'See Less';
                  } else {
                    textEx =
                      textLong.length < 70
                        ? `${textLong}`
                        : `${textLong.substring(0, 70)}... `;
                    moreLessText = 'See More';
                  }

                  message = (
                    <ReplyComponent
                      opinionComment={activity.content.comment}
                      buttonText={moreLessText}
                      comment={textEx}
                      state={this.state.expanded}
                      seeMoreBtn={this.showButton}
                      userName={activity.content.name}
                      description={activity.content.act}
                      time={activity.content.time}
                      profileImage={activity.content.profileImage}
                    />
                  );
                }
                return <View key={activity.id}>{message}</View>;
              })}
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profileDetailView: {
    ...ProfileStyles.shadowView,
  },
  colView: {
    ...ProfileStyles.column,
  },
  rowViewProfileDetail: {
    // ...ProfileStyles.row
    ...ProfileStyleExt.rowView,
  },
  profileRoundIcon: {
    ...ProfileStyles.profileRoundImage,
  },
  rowUserName: {
    ...ProfileStyles.rowNested,
    paddingRight: 10,
  },
  titleText: {
    ...ProfileStyles.boldTitleText,
  },
  usernameBoldText: {
    // ...ProfileStyles.boldNameText
    ...ProfileStyleExt.userNameText,
  },
  profileSettingsText: {
    // ...ProfileStyles.boldNameText
    ...ProfileStyleExt.settingsText,
  },
  userBioInfoText: {
    ...ProfileStyleExt.bioText,
    paddingRight: 10,
  },
  tinyIcons: {
    // ...ProfileStyles.profileSmallIcons
    ...ProfileStyleExt.profileSmallIcons,
  },
  votesText: {
    ...ProfileStyleExt.voteText,
  },
  rowSettingsView: {
    ...ProfileStyles.rowSettings,
  },
  settingsBtnView: {
    // ...ProfileStyles.profileSettingsView
    ...ProfileStyleExt.profileSettingsView,
  },
  settingTouchView: {
    ...ProfileStyles.profileSettingsTouchView,
  },
  settingsIcon: {
    // ...ProfileStyles.settingsMediumIcon
    ...ProfileStyleExt.profileSmallIcons,
  },
  viewBelow: {
    ...ProfileStyles.viewBelowSettingsBtn,
  },

  followHeartIcon: {
    ...ProfileStyleExt.followHeartIcon,
  },
  followWhiteText: {
    ...ProfileStyleExt.followWhiteText,
  },
  followButtonTouchView: {
    ...ProfileStyleExt.followButtonTouchView,
  },
  followBtnView: {
    ...ProfileStyleExt.followBtnView,
  },
});

export default connect(
  null,
  {Logout},
)(Profile);
