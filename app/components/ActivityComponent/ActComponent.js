import React from 'react';
import {View} from 'react-native';
import {
  BillRelatedComponent,
  FollowViewComponent,
  VoteViewComponent,
  OpinionViewComponent,
  ReplyComponent,
} from '../ActivityComponent';

const ActComponent = props => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginVertical: 10}}>
      {props.activity.map(activity => {
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
  );
};

export default ActComponent;
