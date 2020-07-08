/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';
import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import {
  TextInputIcon,
  ButtonIcon,
  ButtonSocial,
  PasswordInputText,
} from '../../components';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {NativeModules} from 'react-native';
import {
  postSignin,
  postFacebookSignin,
  postGoogleLogin,
  postTwitterSignin,
  loadingClear,
} from '../../actions/LoginScreenApi';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import colors from '../../utils/colors';
//const {RNTwitterSignIn} = NativeModules;

//import {firebaseConfig} from '../../config/firebaseConfig';

const Constants = {
  TWITTER_COMSUMER_KEY: '6CD7uIAP8uZC9oaLSEKea2Cdp',
  TWITTER_CONSUMER_SECRET: 'mv4hwc9geQwez2rPkNnEWAiZtm7xaBQ44TFKwN74bRnY0C2DmG',
};
//firebase.initializeApp(firebaseConfig);
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showpassword: true,
    };
    this.props.loadingClear();
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
        alert('cancel');
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
    console.log('google' + userInfo.user.id);
    this.props.postGoogleLogin(
      'google',
      userInfo.user.id,
      userInfo.user.name,
      userInfo.user.photo,
      userInfo.user.email,
    );
  };
  login() {
    this.props.postSignin(this.state.email, this.state.password);
  }

  show() {
    this.setState({showpassword: !this.state.showpassword});
  }

  render() {
    console.log('loading ::', this.props.authLoading);
    this.props.logined && this.props.navigation.navigate('Home');
    return (
      <View style={styles.parent}>
        <Spinner
          visible={this.props.authLoading}
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
            style={{marginTop: 20}}
            placeholderText="Your email"
            secureTextEntry={false}
            onChangeText={value => this.setState({email: value.trim()})}
            lpic={require('../../../assets/email.png')}
            rpic={require('../../../assets/editxs.png')}
          />
          <PasswordInputText
            onChangeText={value => this.setState({password: value.trim()})}
            style={{marginTop: 10, marginBottom: 30}}
            placeholderText="Your password"
            secureTextEntry={this.state.showpassword}
            lpic={require('../../../assets/passwordgray.png')}
            rpic={require('../../../assets/eye.png')}
            onimgclick={() => this.show()}
          />

          <ButtonIcon
            text="Login"
            color={'#fff'}
            source={require('../../../assets/loginmd.png')}
            style={{width: '100%', height: 50, backgroundColor: 'orange'}}
            onPress={() => this.login()}
            // onPress={() => this.props.navigation.navigate('Home')}
          />

          <View style={styles.remmeberlayout}>
            <Button transparent>
              <Image
                source={require('../../../assets/uncheck/uncheck.png')}
                style={{width: 15, height: 15, marginRight: 10}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Lato-regular',
                  opacity: 0.8,
                }}>
                Remember Me
              </Text>
            </Button>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Lato-regular',
                  opacity: 0.8,
                }}>
                Forgot Password?
              </Text>
            </Button>
            {/* <Button onPress={() => this.props.navigation.navigate("ForgotPassword")} color='white' title="Forgot Password?" /> */}
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              alignSelf: 'center',
              fontFamily: 'Lato-regular',
              opacity: 0.5,
              textTransform: 'uppercase',
            }}>
            Don’t have an account?
          </Text>
          <ButtonIcon
            text="Signup"
            color={colors.primaryBlueColor}
            source={require('../../../assets/login.png')}
            style={{width: '100%', height: 50, marginTop: 10}}
            onPress={() => this.props.navigation.navigate('CreateAccount')}
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
                marginBottom: 20,
                fontFamily: 'Lato-regular',
                opacity: 0.5,
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

            {/* <LoginButton
              publishPermissions={['public_profile email']}
              onLoginFinished={(error, result) => {
                if (error) {
                  alert('Login failed with error: ' + error.message);
                } else if (result.isCancelled) {
                  alert('Login was cancelled');
                } else {
                  alert(
                    'Login was successful with permissions: ' +
                      result.grantedPermissions,
                  );
                }
              }}
              onLogoutFinished={() => alert('User logged out')}
            /> */}
          </View>
        </View>
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
  login: {
    justifyContent: 'center',
  },
  remmeberlayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    marginBottom: 50,
  },

  sociallayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const mapStateToProps = state =>
  console.log('initaial state ::', state) || {
    authLoading: state.authReducer.loading,
    logined: state.authReducer.loggedIn,
  };
export default connect(
  mapStateToProps,
  {
    postSignin,
    postFacebookSignin,
    loadingClear,
    postTwitterSignin,
    postGoogleLogin,
  },
)(LoginScreen);
