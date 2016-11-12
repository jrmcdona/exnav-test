
/**
 * @providesModule ProfileScreen
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Profile',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>ProfileScreen!</Text>
      </View>
    )
  }

  _goBackHome = () => {
   this.props.navigator.pop();  
  }
}
