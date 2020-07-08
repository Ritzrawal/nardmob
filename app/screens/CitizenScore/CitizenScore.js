/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import {Card, CardItem} from 'native-base';

import PieCharts from '../../components/PieChart/PieChart';

class CitizenScore extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Card>
            <CardItem style={{justifyContent: 'center'}}>
              <PieCharts
                style={{width: 300}}
                iconWidth={60}
                source={require('../../../assets/ScoreTab/score-tab.png')}
                title="Your Citizen Score"
                text2="111/22"
                sliceColor={['#FF9800', '#F2F2F2']}
                text1Style={{fontSize: 20, marginTop: 10}}
                text2style={{fontSize: 20, fontWeight: 'bold'}}
              />
            </CardItem>
          </Card>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <PieCharts
              style={{width: 120}}
              iconWidth={20}
              source={require('../../../assets/VoteGreen/vote-xl-green.png')}
              title="Votes"
              text2="111/22"
              sliceColor={['#07a107', '#f9f9f9']}
              text1Style={{fontSize: 13, marginTop: 10}}
              text2style={{fontSize: 15, fontWeight: 'bold'}}
            />
            <PieCharts
              style={{width: 120}}
              iconWidth={20}
              source={require('../../../assets/ChatBlue/chat-xl-blue.png')}
              title="Posts"
              text2="111/22"
              sliceColor={['#1e90ff', '#f9f9f9']}
              text1Style={{fontSize: 13, marginTop: 10}}
              text2style={{fontSize: 15, fontWeight: 'bold'}}
            />
            <PieCharts
              style={{width: 120}}
              iconWidth={20}
              source={require('../../../assets/Read/book-xl-red.png')}
              title="Read"
              text2="111/22"
              sliceColor={['#ff0000', '#f9f9f9']}
              text1Style={{fontSize: 13, marginTop: 10}}
              text2style={{fontSize: 15, fontWeight: 'bold'}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CitizenScore;
