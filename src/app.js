/**
 * @providesModule App
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';

//import { Ionicons } from '@exponent/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

//import { Font } from 'exponent';

import Colors from 'Colors';
import Router from 'Router';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: Colors.navigationBarTintColor,
    backgroundColor: Colors.navigationBarBackgroundColor,
    titleStyle: 'Arial',
  },
};


type TabRenderFunction = (isSelected: bool) => ReactElement<any>;

export default class App extends React.Component {

  render() {
    return (
      <TabNavigation
        tabBarColor={Colors.tabBar}
        tabBarHeight={56}
        initialTab="profile">

        <TabNavigationItem
          id="profile"
          renderIcon={isSelected => this._renderIcon('Profile', 'ios-compass-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('profile')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="leaderboard"
          renderIcon={isSelected => this._renderIcon('Leaderboard', 'ios-person-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('leaderboard')}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="notifications"
          renderIcon={isSelected => this._renderIcon('Notifications', 'ios-clock-outline', isSelected)}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('notifications')}
          />
        </TabNavigationItem>

      
      </TabNavigation>
    );
  }

  _renderIcon(title: string, iconName: string, isSelected: bool): ReactElement<any> {
    let color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;

    return (
      <View style={styles.tabItemContainer}>
        <Ionicons name={iconName} size={32} color={color} />

        <Text style={[styles.tabTitleText, {color}]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitleText: {
    fontSize: 11,
  },
});