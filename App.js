import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import axios from 'axios';
//import * as Font from 'expo-font';
import AppNavigator from './app/config/AppNavigator';
import {store, persistor} from './app/config/store';
import {Loading} from './app/components';
import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  // async componentWillMount() {
  //   await Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   });
  // }

  async componentDidMount() {
    // Add a request interceptor
    axios.interceptors.request.use(
      function(config) {
        // Do something before request is sent
        console.log('This is request', config);
        return config;
      },
      function(error) {
        // Do something with request error
        console.log('This is request error', error);
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log('This is response', response);
        return response;
      },
      function(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('This is response error', error);
        return Promise.reject(error);
      },
    );
    // await Font.loadAsync({
    //   Roboto: require('native-base/Fonts/Roboto.ttf'),
    //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    //   Begok: require('./assets/fonts/Begok.ttf'),
    //   Lato: require('./assets/fonts/Lato-Regular.ttf'),
    //   LatoMedium: require('./assets/fonts/lato.medium.ttf'),
    //   LatoBold: require('./assets/fonts/lato.bold.ttf'),
    // });
    // setCustomText({
    //   style: {
    //     fontFamily: 'Lato',
    //   },
    // });
  }
  render() {
    const {loading} = this.state;

    return loading ? (
      <Loading />
    ) : (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

App = codePush(codePushOptions)(App);
export default App;
