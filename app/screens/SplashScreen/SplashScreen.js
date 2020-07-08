import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.parent}>
        <Image
          source={require('../../../assets/mainlogo.png')}
          style={styles.imageview}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#001142',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageview: {
    width: '90%',
    height: 80,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    resizeMode: 'center',
    alignContent: 'center',
  },
});
export default SplashScreen;
