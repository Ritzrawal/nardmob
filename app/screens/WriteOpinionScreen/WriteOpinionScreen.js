/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ImagePicker from 'react-native-image-picker';
import {Text, View, Card, Textarea, CardItem} from 'native-base';
import {opinionSend} from '../../actions/OpinionPost';
import {connect} from 'react-redux';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from '../../components/BottonIcon/buttonIconStyle';

class WriteOpinionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: null,
      opinion: '',
      mediaUrl: '',
    };
  }

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // const source = {uri: response.uri};
        this.setState({
          filePath: source,
        });

        // let source = response;
        // You can also display the image using data:
        // let source = {uri: 'data:image/jpeg;base64,' + response.data};
        // this.setState({
        //   filePath: source,
        // });
      }
    });
  };

  onHandelCHange = text => {
    this.setState({
      opinion: text,
    });
  };
  OnSubmit = () => {
    this.props.opinionSend(
      this.props.token,
      this.props.billId,
      this.state.opinion,
      this.state.filePath,
    );
    // alert('hello');
    // console.log('data getting', this.state.opinion);
  };

  render() {
    return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'height' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
          enabled>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                <Image
                  source={require('../../../assets/opinionsmd.png')}
                  style={{width: 25, height: 20, marginHorizontal: 10}}
                  resizeMode="contain"
                />
                <Text>Write your Opinions</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 0.7,
                  marginHorizontal: 10,
                }}>
                <Card
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <TouchableOpacity onPress={() => this.OnSubmit()}>
                    <CardItem
                      style={{flexDirection: 'row', justifyContent: 'center'}}>
                      <Image
                        source={require('../../../assets/done.png')}
                        style={{width: 13, height: 13, marginRight: 7}}
                      />
                      <Text style={{fontSize: 13}}>Add</Text>
                    </CardItem>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              backgroundColor: 'green',
              flex: 4,
            }}>
            <Textarea
              multiline
              underlineColorAndroid="transparent"
              // value={this.state.opinion}
              onChangeText={text => this.onHandelCHange(text)}
              // value={value}
              id="opinion"
              placeholder="What's on Your mind?"
              style={{
                paddingRight: 10,
                backgroundColor: 'white',
                flex: 4,
                textAlignVertical: 'top',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '20%',
              width: '100%',
              flexDirection: 'column',
            }}>
            <Image
              source={this.state.filePath}
              style={{width: 200, height: 150, marginRight: 7}}
            />
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Card
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity onPress={() => this.chooseFile()}>
                <CardItem>
                  <Image
                    source={require('../../../assets/camera.png')}
                    value={this.state.mediaUrl}
                    style={{width: 15, height: 15, marginHorizontal: 10}}
                  />
                  <Text style={{fontSize: 15, fontFamily: 'Lato-bold'}}>
                    Upload photo/Video
                  </Text>
                </CardItem>
              </TouchableOpacity>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    billId: state.BIllsReducer.billdetail.data.id,
  };
};
export default connect(mapStateToProps, {opinionSend})(WriteOpinionScreen);
