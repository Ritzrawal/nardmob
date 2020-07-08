import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {TestScreen} from '../screens';
import {
  BottomTabComponent,
  TopTabComponent,
  HeaderComponent,
  TopTabProfileSettings,
  HeaderWithBackBtn,
} from '../components';
import {BillScreen} from '../screens/BIllScreen';

import {
  ForgotScreen,
  LoginScreen,
  ResendPassword,
  SignUpScreen,
} from '../screens/AuthScreens';
import {SplashScreen} from '../screens/SplashScreen';

import {
  Profile,
  MainInfoScreen,
  SecurityInfoScreen,
  FollowersList,
} from '../screens/ProfileScreens';
import {Activity} from '../screens/ActivityScreens';
import {Notification} from '../screens/NotficationScreens';
import VoteNowScreen from '../components/BiIlDetailComponent/VoteNowScreen';
import BillCommentScreen from '../components/BiIlDetailComponent/BillCommentScreen';
import {CitizenScore} from '../screens/CitizenScore';
import {DetailBillScreen} from '../screens/DetailBillScreen';
import {Toptabs, ProfSettingsTabs} from '../utils/constants';
import {BillTimelineScreen} from '../screens/BillTimelineScreen';
import MediaDetailView from '../screens/MediaDetailView/MediaDetailView';

import HeaderComponentwithBack from '../components/HeaderComponentwithBack';
import ViewAllScreen from '../screens/ViewAllScreen/ViewAllScreen';
import {WriteOpinionScreen} from '../screens/WriteOpinionScreen';

//Landing page when page got start
const splashStack = createStackNavigator({
  Landing: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
});

//Required screen while authentication with default sighin page
const AuthStack = createSwitchNavigator(
  {
    SignIn: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    CreateAccount: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotScreen,
      navigationOptions: {
        header: null,
      },
    },
    ResetPassword: {
      screen: ResendPassword,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRoute: 'SignIn',
  },
);

//Required Screeen when user clicked Activity Feed
const ActivityStack = createStackNavigator(
  {
    ActivityT: {
      screen: Activity,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponent moveToNotif={navigation} />};
      },
    },
  },
  {
    headerMode: 'float',
  },
);

//Required Sreen when user clicked Citizen click citizen Score
const CitizenScoreStack = createStackNavigator(
  {
    CitizenScore: {
      screen: CitizenScore,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponent moveToNotif={navigation} />};
      },
    },
  },
  {
    headerMode: 'float',
  },
);

//Sreen stack for notification which is at the top of the topbar notification
const NotificationStack = createStackNavigator(
  {
    screen: Notification,
    navigationOptions: ({navigation}) => {
      return {header: <HeaderComponentwithBack moveToNotif={navigation} />};
    },
  },
  {
    headerMode: 'float',
  },
);

// for Profile Settings Tab
const ProfileSettingTabs = createMaterialTopTabNavigator(
  {
    main: {
      screen: MainInfoScreen,
    },
    security: {
      screen: SecurityInfoScreen,
    },
  },
  {
    initialRouteName: 'main',
    // eslint-disable-next-line no-undef
    transitionConfig: () => fadeout(),
    swipeEnabled: false,
    tabBarComponent: props => {
      return <TopTabProfileSettings {...props} tabs={ProfSettingsTabs} />;
    },
  },
);

//under implementation
const FollowersActivityStack = createStackNavigator(
  {
    ProfileScreen: {
      screen: Profile,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponent moveToNotif={navigation} />};
      },
    },
    ProfSetting: {
      screen: ProfileSettingTabs,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderWithBackBtn moveToNotif={navigation} />};
      },
    },
    FollowerScreen: {
      screen: FollowersList,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderWithBackBtn moveToNotif={navigation} />};
      },
    },
  },
  {
    initialRouteName: 'ProfileScreen',
    headerMode: 'float',
  },
);

//for bill top bar navigation
const TopTabs = createMaterialTopTabNavigator(
  {
    allbills: {
      screen: props => (
        <BillScreen {...props} screenProps={{title: 'allbills'}} />
      ),
    },
    cashbill: {
      screen: props => (
        <BillScreen {...props} screenProps={{title: 'cashbill'}} />
      ),
    },
    opinionbill: {
      screen: props => (
        <BillScreen {...props} screenProps={{title: 'opinionbill'}} />
      ),
    },

    amendment: {
      screen: props => (
        <BillScreen {...props} screenProps={{title: 'amendment'}} />
      ),
    },
  },
  {
    initialRouteName: 'allbills',
    swipeEnabled: false,
    tabBarComponent: props => {
      return <TopTabComponent {...props} tabs={Toptabs} />;
    },
  },
);
//nagivation for bill screen
const BillNavigation = createStackNavigator(
  {
    topbar: {
      screen: TopTabs,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponent moveToNotif={navigation} />};
      },
    },
    detail: {
      screen: DetailBillScreen,
    },
    timeline: {
      screen: BillTimelineScreen,
    },
    commentDetailScreen: {
      screen: BillCommentScreen,
    },
    mediaDetail: {
      screen: MediaDetailView,
    },

    ViewAll: {
      screen: ViewAllScreen,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponentwithBack moveToNotif={navigation} />};
      },
    },

    Write: {
      screen: WriteOpinionScreen,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponentwithBack moveToNotif={navigation} />};
      },
    },
    Votenow: {
      screen: VoteNowScreen,
      navigationOptions: ({navigation}) => {
        return {header: <HeaderComponentwithBack moveToNotif={navigation} />};
      },
    },
  },
  {
    initialRouteName: 'topbar',
    headerMode: 'screen',
  },
);

//for main bottom bar nagivation
const MainTabs = createBottomTabNavigator(
  {
    BillFeed: {
      screen: BillNavigation,
      navigationOptions: {
        title: 'Bill',
        tabBarIcon: () => (
          <FontAwesome name="bullhorn" size={22} color="white" />
        ),
      },
    },
    Activity: {
      screen: ActivityStack,
      navigationOptions: {
        title: 'Activity',
        tabBarIcon: () => (
          <FontAwesome name="line-chart" size={22} color="white" />
        ),
      },
    },
    CitizenScore: {
      screen: CitizenScoreStack,
      navigationOptions: {
        title: 'Citizen Score',
        tabBarIcon: () => <FontAwesome name="star-o" size={22} color="white" />,
      },
    },

    FollowersActivity: {
      screen: FollowersActivityStack,
      navigationOptions: {
        title: 'Followers',
        tabBarIcon: props => {
          return <FontAwesome name="users" size={22} color="white" />;
        },
      },
    },

    NotificationStack: {
      screen: NotificationStack,
    },
  },
  {
    navigationOptions: ({navigation}) => {
      return {
        header: null,
      };
    },
    headerMode: 'screen',
    initialRouteName: 'BillFeed',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveBackgroundColor: 'red',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'white',
      },
    },
    tabBarComponent: props => {
      return <BottomTabComponent {...props} />;
    },
  },
);

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: TestScreen,
    navigationOptions: {
      headerTitle: 'Settings List',
    },
  },
  Profile: {
    screen: TestScreen,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

//Required Sreeen when user clicked post of bill feed
const MainDrawer = createStackNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack,
});

//Single stack for maindrawer for switching
const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion1: {
      screen: TestScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

// for start navigation
const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: AppModalStack,
    },
    Auth: {
      screen: AuthStack,
    },
    Landing: {
      screen: splashStack,
    },
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none',
    // headerTitle:"naradmuni"
  },
);

export default createAppContainer(AppNavigator);
