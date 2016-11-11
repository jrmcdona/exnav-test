
/**
 * @providesModule NotificationsScreen
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class NotificationsScreen extends React.Component{
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Notifications',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>NotificationScreen!</Text>
      </View>
    )
  }

  _goBackHome = () => {
   this.props.navigator.pop();  
  }
}