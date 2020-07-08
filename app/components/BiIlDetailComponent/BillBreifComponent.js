/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Icon} from 'native-base';
import {Image, Dimensions, Animated, Text} from 'react-native';

import {TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BillBreifItemComponent from './BillBreifItemComponent';

var screenWidth = Dimensions.get('window').width;

import {AllStyles} from '../AllStyles';
EStyleSheet.build({$rem: screenWidth / 350});

class BillBreifComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 150,
      title: 'Read more',
      data: [1, 2, 3],
      margin: -20,
      iconname: 'caretdown',
      animation: new Animated.Value(0),
    };
  }
  handleClick = () => {
    if (this.state.showMore) {
      this.setState({
        showMore: false,
        title: 'Read More',
        height: 150,
        margin: -20,
        iconname: 'caretdown',
      });
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();
    } else {
      this.setState({
        showMore: true,
        title: 'Read Less',
        height: null,
        margin: 0,
        iconname: 'caretup',
      });
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
  };
  _setMaxHeight(event) {
    this.setState({
      height: event.nativeEvent.layout.height,
    });
  }
  render() {
    return (
      <View style={{flexDirection: 'column', marginHorizontal: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.detailtop}>
            <Image
              source={require('../../../assets/parliament.png')}
              style={styles.IconBig}
            />
            <View style={styles.col}>
              <Text style={AllStyles.HeaderCardText}>Ordinary Bill</Text>
              <Text style={[AllStyles.briefText, styles.smallfont]}>
                (need 50% majority in ls and Rs)
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/tags.png')}
              style={styles.IconSmaller}
            />
            <Text
              style={[
                AllStyles.HeaderCardText,
                {
                  fontSize: 13,
                },
              ]}>
              Amendment Bill
            </Text>
          </View>
        </View>
        <View
          style={{
            height: this.state.height,
            overflow: 'hidden',
            marginBottom: this.state.margin,
          }}>
          <BillBreifItemComponent
            title="Summary:"
            description={this.props.detail.summary}
          />
          <BillBreifItemComponent
            title="Background:"
            description={this.props.detail.background}
          />
          <BillBreifItemComponent
            title="Original Bill:"
            description={this.props.detail.original_bill}
          />
        </View>
        <TouchableOpacity onPress={this.handleClick}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              backgroundColor: '#ffffffaa',
            }}>
            <Text style={{color: 'gray'}}>{this.state.title}</Text>
            <Icon
              name={this.state.iconname}
              type="AntDesign"
              style={{fontSize: 15, marginHorizontal: 10, color: 'gray'}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default BillBreifComponent;

const styles = EStyleSheet.create({
  row: {flexDirection: 'row'},
  col: {flexDirection: 'column', margin: '5rem'},
  smallfont: {fontSize: '10rem'},
  detailtop: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  breif: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  IconBig: {
    width: 30,
    height: 30,
    marginHorizontal: '5rem',
    marginBottom: '10rem',
  },
  IconSmall: {width: 20, height: 20, marginHorizontal: 5, marginBottom: 2},
  IconSmaller: {width: 15, height: 15, marginHorizontal: 5, marginBottom: 2},
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
});
