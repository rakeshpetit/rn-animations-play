import React, { Component } from "react";
import { Animated, View } from "react-native";

const duration = 1000;

export class Ball extends Component {
  componentWillMount() {
    console.log(this.props);
    const {x, y} = this.props.val;
    this.position = new Animated.ValueXY(0, 0);
    Animated.timing(this.position, {
      toValue: { x, y },
      duration
    }).start(() => {

      Animated.timing(this.position, {
        toValue: { x: 0, y: 0 },
        duration
      }).start();

    });

    
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
