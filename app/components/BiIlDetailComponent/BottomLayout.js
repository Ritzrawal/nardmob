/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, CardItem} from 'native-base';
import {Dimensions, TouchableOpacity, Image, Text} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
// import {TouchableOpacity} from 'react-native-gesture-handler';
export default class BottomLayout extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   it: this.props.navigation.state.params.it,
    // };
  }
  // componentDidMount() {
  //   this.getbilllist();
  // }
  render() {
    // console.log('data value', this.props.navigation.state.params.it);

    return (
      <View>
        <CardItem style={[this.props.style, {justifyContent: 'space-between'}]}>
          <Text style={styles.smallfont}>
            {formatvalue(this.props.likes_count)} Likes
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.smallfont}>
              {formatvalue(this.props.comments_count)} Comments{' '}
            </Text>
            <Text style={styles.smallfont}>
              {formatvalue(this.props.shares_count)} Shares
            </Text>
          </View>
        </CardItem>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 1,
            opacity: 0.4,
            backgroundColor: 'lightgray',
            marginHorizontal: 10,
          }}
        />
        <CardItem style={this.props.style}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 0,
              flex: 1,
            }}>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image
                  source={require('../../../assets/like.png')}
                  style={{color: 'lightgray', width: 17, height: 17}}
                />
                <Text style={styles.mediumfont}>Like</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.props.onPress}
              onPressIn={this.props.onPressLong}>
              <View style={styles.row}>
                <Image
                  source={require('../../../assets/comment.png')}
                  style={{color: 'lightgray', width: 17, height: 17}}
                />
                <Text style={styles.mediumfont}>Comment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.row}>
                <Image
                  source={require('../../../assets/share.png')}
                  style={{color: 'lightgray', width: 17, height: 17}}
                />
                <Text style={styles.mediumfont}>Share</Text>
              </View>
            </TouchableOpacity>
          </View>
        </CardItem>
      </View>
    );
  }
}

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

var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});

const styles = EStyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  col: {flexDirection: 'column', alignItems: 'center'},
  smallfont: {fontSize: '9rem', color: 'gray'},
  mediumfont: {
    fontSize: '10rem',
    fontFamily: 'Lato-bold',
    color: 'gray',
    margin: '5rem',
  },
});
