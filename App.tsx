import React from 'react';
import {Component} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

interface IGreetingsProps extends React.ClassAttributes<Greetings> {
  greetName: string;
  displayed: boolean;
}

interface IGreetingsState {
}


export class Greetings extends Component<IGreetingsProps, IGreetingsState, {}> {

  constructor(props: IGreetingsProps){
    super(props);
  }

  render() {
    const thisStyle : any = this.props.displayed === true ? styles.showText : styles.hideText;
    return (
      <View style={thisStyle}>
        <Text>Hello {this.props.greetName}.</Text>
      </View>
    );
    
  }
}

interface IAppProps {}

interface IAppState {
  showing: boolean
}

export default class App extends Component<IAppProps, IAppState> {
  
  constructor(props: IAppProps){
    super(props);
    this.toggleText = this.toggleText.bind(this);
    this.state = {
      showing: false
    }
  }

  toggleText(){
    console.log("showing = ", this.state.showing);
    this.setState({showing : !this.state.showing});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Greetings greetName="CS Block Chain" displayed={this.state.showing} />
        <Button title="title" onPress={this.toggleText} />
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hideText: {
    display: 'none',
  },
  showText: {
    display: 'flex',
  }
});