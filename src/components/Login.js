import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import LinearGradient from "react-native-linear-gradient";
import {heightPercentageToDP, widthPercentageToDP} from "../auxiliar/ScreenDimensions";
import GeneralButton from '../components/GeneralButton';

class Login extends Component {
    render () {
        return (
            <LinearGradient colors={['#8e99f3','#5c6bc0','#26418f']} style={{flex:1}}>
            <View style={styles.container}>
                <View style={{flex:0.8}}>
                    <Text style={styles.textStyle}>Bienvenido a diktaplus.</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Usuario"
                        placeholderTextColor="#ffffff"
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Contraseña"
                        placeholderTextColor="#ffffff"
                    />
                    <Text style={styles.textStyle}>¿No tienes cuenta?  Regístrate
                        <Text style={styles.textStyle} onPress={Actions.register}> aquí</Text>
                    </Text>
                    <GeneralButton
                        buttonText={'Entrar'}
                        onPressEvent={Actions.profile}
                    />
                </View>
            </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#5c6bc0' //'#87FFC3'
    },
    titleStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      paddingTop: heightPercentageToDP('2%'),
      paddingBottom: heightPercentageToDP('10%')
    },
    labelStyle: {
        //flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        paddingBottom: heightPercentageToDP('2%'),
        paddingTop: heightPercentageToDP('2%')
    },
    inputStyle: {
        //flex: 0.2,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        //color: '#ffffff',
        fontSize: 15,
        backgroundColor: '#8e99f3',
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: heightPercentageToDP('2%'),
        paddingTop: heightPercentageToDP('2%')
    },
    textStyle: {
        fontSize: 15,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Login;