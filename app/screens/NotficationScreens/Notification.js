/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Content, View} from 'native-base';
import {remonActivites, olderActivites} from '../../utils/constants';
import {NotificationComponent, HeaderComponent} from '../../components';

class Notification extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {header: <HeaderComponent moveToNotif={navigation} />};
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={{marginHorizontal: 16}}>
            <NotificationComponent
              activityName="Today's Notifications"
              activityArray={remonActivites}
              mainIcon="calendar-alt"
              mainIconType="FontAwesome5"
            />
            <NotificationComponent
              activityName="Older Notifications"
              activityArray={olderActivites}
              mainIcon="calendar-alt"
              mainIconType="FontAwesome5"
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Notification;
