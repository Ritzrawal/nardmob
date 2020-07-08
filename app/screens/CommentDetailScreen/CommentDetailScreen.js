/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Card, CardItem, Icon, Thumbnail} from 'native-base';
import {Dimensions, Image, Text, TextInput} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import CommentComponent from '../../components/MediaDetailComponent/CommentComponent';

class CommentDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <CommentComponent />
        <View style={{flexDirection: 'row'}}>
          <Card style={{flexGrow: 1}}>
            <CardItem>
              <TextInput placeholder="Write your Comment here..." />
            </CardItem>
          </Card>
          <Card style={{width: 100}}>
            <CardItem style={{justifyContent: 'space-around'}}>
              <Image
                source={require('../../../assets/done.png')}
                style={{width: 10, height: 10}}
              />
              <Text>Add</Text>
            </CardItem>
          </Card>
        </View>

        <Card>
          <CardItem style={{justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Thumbnail
                source={{
                  uri:
                    'https://makehimyours.com.au/wp-content/uploads/2016/11/Depositphotos_9830876_l-2015Optimised.jpg',
                }}
                style={{width: 40, height: 40, borderRadius: 20}}
              />
              <Text style={{fontSize: 10}}> Remon Nabil</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../assets/timesm.png')}
                style={{width: 15, height: 15, marginHorizontal: 5}}
              />
              <Text style={{fontSize: 10}}>20 min ago</Text>
            </View>
          </CardItem>
          <CardItem>
            <Text style={styles.smallfont}>
              Special Status will be Withdrawn.JK will have its Own legislature
            </Text>
          </CardItem>
          style=
          {{
            flex: 1,
            flexDirection: 'row',
            height: 1,
            backgroundColor: 'gray',
            marginHorizontal: 10,
          }}
          />
          <CardItem>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                flex: 1,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Icon
                    name="like1"
                    type="AntDesign"
                    style={{color: 'lightgray', fontSize: 20}}
                  />
                  <Text style={styles.mediumfont}>like</Text>
                </View>
              </View>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}
export default CommentDetailScreen;
var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},

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
  smallfont: {fontSize: '9rem', color: 'gray'},
  mediumfont: {
    fontSize: '12rem',
    fontFamily: 'Lato-bold',
    color: 'gray',
    margin: '5rem',
  },
});
