/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {Card, CardItem, Text} from 'native-base';

import moment from 'moment';
import HeaderComponentwithBack from '../../components/HeaderComponentwithBack';
import {ScrollView} from 'react-native-gesture-handler';
class BillTimelineScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: this.props.navigation.state.params.timeline,
    };
  }
  static navigationOptions = ({navigation}) => {
    const appToolbarTitle =
      navigation.state.params && navigation.state.params.title
        ? navigation.state.params.title
        : '';
    const icontitle =
      navigation.state.params && navigation.state.params.icon
        ? navigation.state.params.icon
        : '';

    console.log('sailesh: ', this.state);
    return {
      header: (
        <HeaderComponentwithBack
          moveToNotif={navigation}
          title={appToolbarTitle.title}
          image={icontitle}
        />
      ),
    };
  };

  render() {
    return (
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../assets/timeline.png')}
            style={{width: 30, height: 30}}
          />
          <Text>Bill Timeline </Text>
        </View>
        <ScrollView>
          <View>
            {this.state.timeline.map((it, i) => {
              var image = '../../../assets/done.png';
              if (it.pass_fail === 'pass') {
                image = '../../../assets/eye.png';
              }
              return (
                <View style={{marginTop: 10}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: 0.5,
                          flexGrow: 1,
                          backgroundColor: 'black',
                        }}
                      />
                      <Image source={require('../../../assets/done.png')} />
                      <View
                        style={{
                          width: 0.5,
                          flexGrow: 1,
                          backgroundColor: 'black',
                        }}
                      />
                    </View>

                    <Card>
                      <CardItem style={{justifyContent: 'space-between'}}>
                        <Text>{it.title}</Text>
                        <Text note>
                          {moment(it.createdAt).format('DD MMM YYYY')}
                        </Text>
                      </CardItem>
                      <CardItem>
                        <Text note>{it.summary}</Text>
                      </CardItem>
                    </Card>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BillTimelineScreen;
