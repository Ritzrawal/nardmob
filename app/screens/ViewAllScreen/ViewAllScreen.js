/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Icon, Text, View} from 'native-base';
import MediaSingleComponent from '../../components/VIewAllComponet/MediaSingleComponent';
import colors from '../../utils/colors';

class ViewAllScreen extends React.Component {
  render() {
    return (
      <Container>
        <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
          <Icon
            name="bar-graph"
            type="Entypo"
            style={{color: colors.secondaryYellowColor}}
          />
          <Text style={{fontWeight: 'bold'}}> Bills News </Text>
        </View>
        <MediaSingleComponent
          onPress={() => this.props.navigation.navigate('mediaDetail')}
        />
      </Container>
    );
  }
}

export default ViewAllScreen;
