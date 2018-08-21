import React, { Component } from "react";
import { Animated, View } from "react-native";

export class Ball extends Component {
  componentWillMount() {
    console.log(this.props);
    const {x, y} = this.props.val;
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x, y }
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={[styles.ball, {borderColor: this.props.color}]} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black"
  }
};
export default Ball;
