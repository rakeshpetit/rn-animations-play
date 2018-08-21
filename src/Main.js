import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Button} from 'react-native-elements';
import { Ball } from "./Ball";
import { Deck } from "./Deck";
const DATA = [
  { id: 1, text: "Card #1", uri: "https://picsum.photos/200/300/?random" },
  { id: 2, text: "Card #2", uri: "https://picsum.photos/200/300/?random" },
  { id: 3, text: "Card #3", uri: "https://picsum.photos/200/300/?random" },
  { id: 4, text: "Card #4", uri: "https://picsum.photos/200/300/?random" },
  { id: 5, text: "Card #5", uri: "https://picsum.photos/200/300/?random" },
  { id: 6, text: "Card #6", uri: "https://picsum.photos/200/300/?random" },
  { id: 7, text: "Card #7", uri: "https://picsum.photos/200/300/?random" }
];
export class Main extends Component {
  renderCard(item) {
    return (
        <Card key={item.id} title = {item.text} image={{uri: item.uri}}>
        <Text style={{marginBottom: 10 }}>
            Card custom text
        </Text>
        <Button 
        icon={{name: 'code'}} 
        backgroundColor="grey"
        title="Click me" />
        </Card>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Ball color="red" val={{x: 150, y: 450}}/>
        <Ball color="blue" val={{x: 150, y: 100}}/>
        <Ball color="green" val={{x: 150, y: -150}}/>
        <Ball color="yellow" val={{x: -150, y: 0}}/>
        <Ball color="cyan" val={{x: -150, y: 200}}/>
        <Ball val={{x: -150, y: -350}}/> */}
        <Deck data={DATA} renderCard={this.renderCard} />
      </View>
    );
  }
}

const styles = {
    container: {
      width: '100%',
      marginTop: '5%',
      flex: 1
    }
  };

export default Main;
