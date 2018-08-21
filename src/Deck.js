import React, { Component } from "react";
import { Animated, View, PanResponder, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const threshold = width * 0.25;
const duration = 250;

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
      onPanResponderRelease: (event, gesture) => {
        if(gesture.dx > threshold){
          console.log('Swipe right');
          this.forceSwipe('right');
        }
        else if(gesture.dx < -threshold){
          console.log('Swipe left');
          this.forceSwipe('left');
        }
        else {
          this.resetPosition();
        }
        
      }
    });
    this.state = { panResponder, position };
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? width : -width;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight } = this.props;
    console.log('this.props', this.props);
    
    // direction === 'right' ? onSwipeRight() : onSwipeLeft();
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
