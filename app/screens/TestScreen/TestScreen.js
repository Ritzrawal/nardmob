/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Text,
  Thumbnail,
  Content,
  Card,
  CardItem,
} from 'native-base';
class TestScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header
          style={{backgroundColor: '#011844'}}
          androidStatusBarColor="#011844"
          iosBarStyle="light-content"
        />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: 'https://cdn.auth0.com/blog/react-js/react.png',
                    cache: 'force-cache',
                  }}
                />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://miro.medium.com/max/888/1*4ZoawGypeCluNqiC5Z_rhA.png',
                  cache: 'force-cache',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent title="12 Likes">
                  <Icon name="thumbs-up" />
                </Button>
              </Left>
              <Body>
                <Button transparent title="4 Comments">
                  <Icon name="chatbubbles" />
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default TestScreen;
