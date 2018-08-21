import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Ball } from './Ball';

export class Main extends Component {
  render() {
    return (
      <View>
        <Ball />
      </View>
    )
  }
}

export default Main