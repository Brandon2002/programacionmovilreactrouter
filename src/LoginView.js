import React, {Component} from 'react';
import { StyleSheet, Button, View } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
    constructor(props){
        super(props)
        this.state = {
            text1: "Ramses"
        }
    }

    getLoging = () =>{
        console.warn("HOLA ROUTER")
    }

    render() {
        return(
            <View style={StyleSheet.container}>
                <Button
                    onPress={this.getLoging}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});