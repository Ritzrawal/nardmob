/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  Icon,
  Text,
  View,
  Content,
  Input,
  Textarea,
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import RoundedIcon from '../../components/RoundedIcon';

import {StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {TitleWithImgComponent} from '../../components';
import {ProfileStyles} from './ProfileStyles';
import colors from '../../utils/colors';

class MainInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
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
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

  render() {
    const {navigation} = this.props;
    const uri =
      'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg';
    var imageUrl = JSON.stringify(navigation.getParam('profileImage', uri));
    return (
      <Container>
        <Content>
          <View style={{marginHorizontal: 16, marginBottom: 10}}>
            <TitleWithImgComponent
              source={require('../../../assets/user.png')}
              activityName="Full Name"
            />
            <View style={styles.shadowView}>
              <Input placeholder="Remon Nabil" />
              <Icon name="pencil" type="Octicons" style={styles.activityIcon} />
            </View>
            <TitleWithImgComponent
              source={require('../../../assets/camera.png')}
              activityName="Profile Photo"
            />
            <View style={styles.shadowViewPhoto}>
              <TouchableOpacity onPress={() => this.chooseFile()}>
                <RoundedIcon
                  uri={JSON.parse(imageUrl)}
                  style={styles.profileRoundIcon}
                />
              </TouchableOpacity>
              <Text style={styles.activityIcon}>Upload your profile photo</Text>
            </View>
            <TitleWithImgComponent
              source={require('../../../assets/feed.png')}
              activityName="Profile Tagline"
            />
            <View style={styles.shadowViewTextArea}>
              <Textarea
                style={styles.styleTextarea}
                rowSpan={5}
                placeholder="Write you Tagline"
              />
              <Icon
                name="pencil"
                type="Octicons"
                style={styles.activityIconTextArea}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.buttonBold}>
                <Icon name="check" type="FontAwesome" style={styles.saveIcon} />
                <Text style={styles.saveText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    ...ProfileStyles.boldTitleText,
  },
  shadowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...ProfileStyles.shadowViewAnyHeight,
  },
  shadowViewPhoto: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...ProfileStyles.shadowViewAnyHeight,
  },
  shadowViewTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...ProfileStyles.shadowViewAnyHeight,
  },
  activityIcon: {
    paddingRight: 10,
    ...ProfileStyles.greySmallIcon,
  },
  profileRoundIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...ProfileStyles.followerIcon,
  },
  activityIconTextArea: {
    paddingTop: 5,
    paddingRight: 10,
    ...ProfileStyles.greySmallIcon,
  },
  saveIcon: {
    fontSize: 20,
    color: 'white',
  },
  saveText: {
    padding: 5,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  buttonBold: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: colors.secondaryYellowColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleTextarea: {
    width: '95%',
  },
});

export default MainInfoScreen;
