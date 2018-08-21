import React, { Component } from "react";
import { Animated, View, PanResponder, Dimensions } from "react-native";
const width = Dimensions.get('window').width;

export class Deck extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {
        this.resetPosition();
      }
    });
    this.state = { panResponder, position };
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-width*1.5, 0, width*1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });
    return {
      ...this.state.position.getLayout(),
      transform: [{rotate }]
    };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={index}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
