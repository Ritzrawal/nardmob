/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {CardItem, Thumbnail, Left, Body, Right} from 'native-base';

import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import moment from 'moment';
import {AllStyles} from '../AllStyles';
import CountDowns from '../../utils/CountDowns';

const BillItemCardVIew = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      elevation={5}
      style={{
        marginBottom: 10,
        elevation: 5,
        // eslint-disable-next-line no-undef
        marginRight: Platform.OS === 'ios' ? 0 : 1,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#ccc',
        shadowOpacity: 0.6,
        borderRadius: 4,
      }}>
      <CardItem
        cardBody
        bordered
        style={{borderTopLeftRadius: 4, borderTopRightRadius: 4}}>
        <Image
          source={{
            uri: props.data.image,
          }}
          style={[
            styles.mainImage,
            {borderTopLeftRadius: 4, borderTopRightRadius: 4},
          ]}
        />

        <LinearGradient
          colors={['#011f4202', '#011f4290', '#011844']}
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        />

        <Left
          style={{
            flexDirection: 'row',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            padding: 5,
            paddingBottom: 10,
          }}>
          <Thumbnail
            source={{
              uri: props.data.mp_pic,
            }}
            style={{width: 40, height: 45, borderRadius: 40 / 2}}
          />
          <Body>
            <Text
              style={[AllStyles.HeaderCardText, styles.title]}
              numberOfLines={1}>
              {props.data.title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {props.data.title}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem
        style={{
          marginTop: 1,
          marginBottom: 1,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}>
        <Left style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity style={{marginLeft: 5, marginRight: 5}}>
            <Text style={styles.textstyle}>
              Votes:{props.data.citizen_poll_count}
            </Text>
          </TouchableOpacity>
          <Text style={styles.textstyle}> | </Text>
          <TouchableOpacity style={{marginLeft: 5, marginRight: 5}}>
            <Text style={styles.textstyle}>
              Opinions:{props.data.opinion_count}
            </Text>
          </TouchableOpacity>
        </Left>
        <Right style={{flexDirection: 'row'}}>
          <CountDowns
            until={checkdates(props.data.citizen_poll_deadline)}
            size={15}
            digitStyle={{backgroundColor: colors.primaryBlueColor}}
            digitTxtStyle={{color: '#ffffff'}}
          />
        </Right>
      </CardItem>
    </View>
  </TouchableOpacity>
);

export default BillItemCardVIew;
function checkdates(finalss) {
  var mo = moment(finalss).diff(moment(), 'seconds');

  return mo;
}
const styles = EStyleSheet.create({
  title: {
    color: colors.white,
  },
  textLayout: {
    width: '20rem',
    height: '20rem',
  },
  textstyle: {
    fontSize: '12rem',
    color: colors.textcolor,
    fontFamily: 'Lato-bold',
  },
  subTitle: {
    fontSize: '10rem',
    color: colors.white,
    fontFamily: 'Lato-regular',
  },
  mainImage: {height: '160rem', width: null, flex: 1},
});
