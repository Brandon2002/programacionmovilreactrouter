import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, setTask, task} from 'react-native';

export default class App extends Component<Props> {
  
 
  constructor(props){
    super(props);
    this.state = {
      switchValue: false,
      textValue: "",
    };
    
  }
  onPressLearnMore = () =>{
    console.warn('Presionaste el botón')
  }

  onPressText = () =>{
    alert(this.state.textValue)
  }

  onChange = (value) => {
    console.warn(`El switch cambiará a: ${value}`)
    this.setState({switchValue: value});
  }

  onChangeText = (text) => {
    console.warn(`El texto es: ${text}`)
    this.setState({textValue: text});
  }

  render() {
  // const [input, input1] = useState();
    return (
      <View style={styles.container}>
        <Switch
          onValueChange = {() => this.onChange(!this.state.switchValue)}
          value = {this.state.switchValue}
        />
        <TextInput
          style={styles.input}
          placeholder="Introduce un texto"
          // onChangeText={input1}
          // value={input}
          onChangeText={this.onChangeText}
        />
        <Button
          onPress={this.onPressText}
          title="Presiona"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
/>
        <Text>Hello from the other side </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: .5,
    padding: 10,
    width: 200,
  }
});
