/**
 * @providesModule Router
 * @flow
 */

import {
  createRouter,
} from '@exponent/ex-navigation';

import LeaderboardScreen from 'LeaderboardScreen';
import ProfileScreen from 'ProfileScreen';
import NotificationScreen from 'NotificationsScreen';
//import AboutScreen from 'AboutScreen';
//import DrawerNavigationLayout from 'DrawerNavigationLayout';
//import TabNavigationLayout from 'TabNavigationLayout';
//import AuthenticationScreen from 'AuthenticationScreen';

export default createRouter(() => ({
  notifications: () => NotificationsScreen,
  profile: () => ProfileScreen,
  leaderboard: () => LeaderboardScreen,
  //about: () => AboutScreen
  //drawerNavigationLayout: () => DrawerNavigationLayout,
  //tabNavigationLayout: () => TabNavigationLayout,
  //authentication: () => AuthenticationScreen,
}));