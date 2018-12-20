import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';

class Home extends Component {
    render () {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={Actions.login}><View><Text>Login</Text></View></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Actions.register}><View><Text>Register</Text></View></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Actions.help}><View><Text>Help</Text></View></TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#5c6bc0'//'#87FFC3'
   },
});

export default Home;