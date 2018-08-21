import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Ball } from './Ball';

export class Main extends Component {
  render() {
    return (
      <View>
        <Ball color="red" val={{x: 150, y: 450}}/>
        <Ball color="blue" val={{x: 150, y: 100}}/>
        <Ball color="green" val={{x: 150, y: -150}}/>
        <Ball color="yellow" val={{x: -150, y: 0}}/>
        <Ball color="cyan" val={{x: -150, y: 200}}/>
        <Ball val={{x: -150, y: -350}}/>
      </View>
    )
  }
}

export default Main