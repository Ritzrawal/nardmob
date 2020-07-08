/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Content, View} from 'native-base';
import {ActivitiesContent, OlderActivitesContent} from '../../utils/constants';
import {TitleWithImgComponent} from '../../components';

import {
  OpinionViewComponent,
  FollowViewComponent,
  VoteViewComponent,
  BillRelatedComponent,
  ReplyComponent,
} from '../../components/ActivityComponent';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false, //begin with box closed
    };
  }

  //function that takes in expanded and makes it the opposite of what it currently is
  showButton = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={{marginHorizontal: 16}}>
            <View>
              <TitleWithImgComponent
                source={require('../../../assets/calendar.png')}
                activityName="Today Activities"
              />
              <View style={{marginVertical: 10}}>
                {ActivitiesContent.map(activity => {
                  let message;
                  if (activity.headerNo === 1) {
                    // FOLLOW VIEW with follow action ==== headerNo 1
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
            <View>
              <TitleWithImgComponent
                source={require('../../../assets/calendar.png')}
                activityName="Older Activities"
              />

              <View style={{marginVertical: 10}}>
                {OlderActivitesContent.map(activity => {
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
                        name2={activity.content.name2}
                        time={activity.content.time}
                        profileImage={activity.content.profileImage}
                      />
                    );
                  }
                  return <View key={activity.id}>{message}</View>;
                })}
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Activity;
