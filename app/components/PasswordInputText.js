import React from 'react';
import {
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

var screenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: screenWidth / 350});
const PasswordInputText = props => {
  return (
    <View {...props} style={{...styles.main, ...props.style}}>
      <Image
        source={props.lpic}
        resizeMode="stretch"
        style={styles.textLayout}
      />
      <TextInput
        style={styles.text}
        placeholder={props.placeholderText}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
      <TouchableOpacity
        onPressIn={props.onimgclick}
        onPressOut={props.onimgclick}>
        <Image
          source={props.rpic}
          style={styles.textLayout}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  main: {
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 5,
    padding: '2rem',
    paddingHorizontal: '10rem',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textLayout: {
    width: '12rem',
    height: '15rem',
  },

  text: {
    width: '80%',
    height: '100%',
    fontSize: '10rem',
    marginHorizontal: '4rem',
    fontFamily: 'Lato-medium',
  },
});
export default PasswordInputText;
