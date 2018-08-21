import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Deck extends Component {
    renderCards() {
        return this.props.data.map((item) => {
            return this.props.renderCard(item);
        });
    }
  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

export default Deck