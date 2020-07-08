/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {
  TextInputIcon,
  ButtonIcon,
  ButtonSocial,
  PasswordInputText,
} from '../../components';

import {postSign, clearSignUp} from '../../actions/LoginScreenApi';
import {NativeModules} from 'react-native';
import {
  postFacebookSignin,
  postGoogleLogin,
  postTwitterSignin,
  loadingClear,
} from '../../actions/LoginScreenApi';

import {GoogleSignin, statusCodes} from 'react-native-google-signin';

import {LoginManager, AccessToken} from 'react-native-fbsdk';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../utils/colors';

//const {RNTwitterSignIn} = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: '6CD7uIAP8uZC9oaLSEKea2Cdp',
  TWITTER_CONSUMER_SECRET: 'mv4hwc9geQwez2rPkNnEWAiZtm7xaBQ44TFKwN74bRnY0C2DmG',
};
class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repassword: '',
      showpassword: true,
      reshowpassword: true,
    };
  }

  handleLogout = () => {
    console.log('logout');
    // RNTwitterSignIn.logOut();
  };

  _twitterSignIn = () => {
    // RNTwitterSignIn.init(
    //   Constants.TWITTER_COMSUMER_KEY,
    //   Constants.TWITTER_CONSUMER_SECRET,
    // );
    // RNTwitterSignIn.logIn()
    //   .then(loginData => {
    //     console.log(loginData);
    //     const {authToken, authTokenSecret} = loginData;
    //     if (authToken && authTokenSecret) {
    //       console.log('twitter', authToken);
    //       console.log('twitter', authTokenSecret);
    //       this.logintwitter(authToken, authTokenSecret);
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '576192159637-v35ep4jubg9ltib4pp0b7u045hvj52bi.apps.googleusercontent.com',
      offlineAccess: true,
      forceConsentPrompt: true,
    });

    this.props.logined && this.props.navigation.navigate('Home');
  }

  async _signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const isSignedIn = await GoogleSignin.getTokens();
      console.log('tokens', JSON.stringify(isSignedIn));

      this.logingoogle(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  async signOut() {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  handleFacebookLogin() {
    LoginManager.logInWithPermissions(['public_profile']).then(result => {
      if (result.isCancelled) {
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          console.log('response :', data);
          this.loginfacebook(data.accessToken);
        });
      }
    });
  }

  loginfacebook = accestoken => {
    this.props.postFacebookSignin(accestoken);
  };
  logintwitter = (accestoken, saccesstoken) => {
    this.props.postTwitterSignin(accestoken, saccesstoken);
  };
  logingoogle = userInfo => {
    this.props.postGoogleLogin(
      'google',
      userInfo.id,
      userInfo.user.name,
      userInfo.user.photo,
      userInfo.user.email,
    );
  };
  login() {
    if (this.validate(this.state.email)) {
      this.props.postSignin(this.state.email, this.state.password);
    }
  }

  show() {
    this.setState({showpassword: !this.state.showpassword});
  }
  resshow() {
    this.setState({reshowpassword: !this.state.reshowpassword});
  }

  check() {
    console.log('check' + this.props.signUp);
    this.props.loadingClear();
    if (this.props.signUp) {
      this.props.clearSignUp();
      this.props.navigation.navigate('Home');
    } else if (this.props.logined) {
      this.props.clearSignUp();
      this.props.navigation.navigate('Home');
    }
  }
  render() {
    this.check();
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'height' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
        enabled>
        <View style={styles.parent}>
          <Spinner
            visible={this.props.loading}
            textContent={'Loading...'}
            textStyle={{color: '#FFF'}}
          />
          <View>
            <Image
              source={require('../../../assets/mainlogo.png')}
              style={styles.imageview}
            />
          </View>

          <View style={styles.login}>
            <TextInputIcon
              onChangeText={value => this.setState({name: value.trim()})}
              style={{marginTop: 20}}
              secureTextEntry={false}
              placeholderText="Your full name"
              lpic={require('../../../assets/usergray.png')}
              rpic={require('../../../assets/editxs.png')}
            />
            <TextInputIcon
              onChangeText={value => this.setState({email: value.trim()})}
              style={{marginTop: 10}}
              placeholderText="Your email"
              lpic={require('../../../assets/email.png')}
              rpic={require('../../../assets/editxs.png')}
            />
            <PasswordInputText
              onChangeText={value => this.setState({password: value.trim()})}
              style={{marginTop: 10}}
              secureTextEntry={this.state.showpassword}
              placeholderText="Your password"
              lpic={require('../../../assets/passwordgray.png')}
              rpic={require('../../../assets/eye.png')}
              onimgclick={() => this.show()}
            />

            <PasswordInputText
              onChangeText={value => this.setState({repassword: value.trim()})}
              style={{marginTop: 10}}
              secureTextEntry={this.state.reshowpassword}
              placeholderText="Re-type password"
              lpic={require('../../../assets/passwordgray.png')}
              rpic={require('../../../assets/eye.png')}
              onimgclick={() => this.resshow()}
            />

            <ButtonIcon
              text="SignUp"
              color={'white'}
              source={require('../../../assets/loginmd.png')}
              style={{
                marginTop: 20,
                width: '100%',
                height: 50,
                backgroundColor: 'orange',
              }}
              onPress={() => this.signUp()}
            />

            <Text
              style={{
                color: 'white',
                fontFamily: 'Lato-medium',
                alignSelf: 'center',
                fontSize: 11,
                opacity: 0.5,
                marginTop: 30,
                marginBottom: 10,
                textTransform: 'uppercase',
              }}>
              DO HAVE AN ACCOUNT?
            </Text>

            <ButtonIcon
              text="Login"
              source={require('../../../assets/login.png')}
              style={{width: '100%', height: 50}}
              onPress={() => this.props.navigation.navigate('SignIn')}
            />

            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'Lato-bold',
                }}>
                OR LOGIN WITH SOCIAL MEDIA
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 11,
                  marginBottom: 30,
                  fontFamily: 'Lato-medium',
                  opacity: 0.7,
                }}>
                WE DON'T HAVE ANY ACCESS TO YOUR ACCOUNTS
              </Text>
            </View>
            <View style={styles.sociallayout}>
              <ButtonSocial
                onPress={() => this.handleFacebookLogin()}
                text="Signup"
                color={colors.primaryBlueColor}
                source={require('../../../assets/fb.png')}
                style={{marginHorizontal: 10, height: 40}}
              />
              <ButtonSocial
                onPress={() => this._twitterSignIn()}
                text="Signup"
                source={require('../../../assets/twitter.png')}
                style={{marginHorizontal: 10, height: 40}}
              />
              <ButtonSocial
                text="Signup"
                onPress={() => this._signIn()}
                source={require('../../../assets/google.png')}
                style={{marginHorizontal: 10, height: 40}}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      alert('Email is Not Correct');
      this.setState({email: text});
      return false;
    } else {
      return true;
    }
  };
  signUp = () => {
    if (this.validate(this.state.email)) {
      if (this.state.password === this.state.repassword) {
        this.props.postSign(
          this.state.name,
          this.state.email,
          this.state.password,
        );
      } else {
        alert('Password are not same');
      }
    }
  };
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#001142',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    justifyContent: 'center',
  },
  remmeberlayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    height: 20,
  },

  sociallayout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
});

const mapStateToProps = state =>
  console.log('signupLog:::', state) || {
    signUp: state.authReducer.signUp,
    data: state.authReducer.data,
    logined: state.authReducer.loggedIn,
    loading: state.authReducer.loading,
  };
export default connect(
  mapStateToProps,
  {
    postSign,
    postGoogleLogin,
    postFacebookSignin,
    postTwitterSignin,
    clearSignUp,
    loadingClear,
  },
)(SignUpScreen);
