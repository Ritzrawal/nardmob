/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Content, Spinner} from 'native-base';

const Loading = () => (
  <Container style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Content>
      <Spinner />
    </Content>
  </Container>
);

export default Loading;
