import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {screenHeight, screenWidth} from "../auxiliar/ScreenDimensions";
import splashImage from '../../img/splashimage.jpg';

class Splash extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: screenWidth, height: screenHeight}}
                    source={splashImage}
                />
            </View>
        );
    }

    componentDidMount(): void {
        startApp();
    }
}

function startApp () {
    //console.log("iniciando aplicación");
    setTimeout(Actions.login, 1000);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5c6bc0'//'#87FFC3'
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', //'#0BFFB7',
        fontSize: 25,
    }
});

export default Splash;