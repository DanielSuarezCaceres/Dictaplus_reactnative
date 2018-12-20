import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";
import RegisterForm from './RegisterForm';
import Header from './Header';

class Register extends Component {
    render () {
        return (
            <View style={{flex:1}}>
                <LinearGradient colors={['#8e99f3','#5c6bc0','#26418f']} style={{flex:1}}>
                <View style={{flex:0.1}}><Header headerText={"  Regístrate"}/></View>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>Introduzca los datos</Text>
                    <RegisterForm/>
                </View>
                </LinearGradient>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#5c6bc0',
    },
    textStyle: {
        fontSize: 15,
        color: '#ffffff',
        marginBottom: 15,
    }
});

export default Register;