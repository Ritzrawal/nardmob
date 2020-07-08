/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Card, CardItem, Left, Right} from 'native-base';

import {AllStyles} from '../AllStyles';

const TimeCardView = props => (
  <Card>
    {console.log('timecard', props.data.data)}
    <CardItem style={{alignItems: 'center', marginTop: -10, marginBottom: 1}}>
      <Left>
        <View style={{flexDirection: 'row'}}>
          <Text style={AllStyles.HeaderCardText}>Votes: </Text>
          <Text style={{fontSize: 15, fontFamily: 'Lato-bold'}}>
            {props.data.data &&
              props.data.data.citizen_polls.citizen_poll_count}
          </Text>
        </View>

        <Text style={{fontSize: 12, fontFamily: 'Lato-regular'}}> | </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={AllStyles.HeaderCardText}>Opinions: </Text>
          <Text style={{fontSize: 15, fontFamily: 'Lato-bold'}}>
            {props.data.data && props.data.data.opinion_count}
          </Text>
        </View>
      </Left>
      <Right style={{flexDirection: 'row'}}>
        <Card>
          <TouchableOpacity onPress={props.onPress}>
            {console.log('onpress console', props.onPress)}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Image
                style={{width: 15, height: 15, margin: 10}}
                resizeMode="stretch"
                source={require('../../../assets/opinion/opinions-md-yellow.png')}
              />
              <Text style={AllStyles.HeaderCardText}>Bill Opinions</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </Right>
    </CardItem>
  </Card>
);

export default TimeCardView;
