import React, {Component} from 'react';
import {StyleSheet, Text, View, Slider, TouchableWithoutFeedback} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import Header from './Header';
import jsonText from '../texts/texts';
import GeneralButton from "./GeneralButton";
import Tts from 'react-native-tts';

class DictationPage extends Component {
    render () {
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.1}}><Header headerText={"  Empezar dictado"}/></View>
                <View style={styles.container}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                    <Text>
                        Velocidad de dictado:
                    </Text>
                    <Slider
                        style={{width: 200}}
                        minimumValue={0.00}
                        maximumValue={1}
                        step={0.25}
                        thumbTintColor={"white"}
                        minimumTrackTintColor={"black"}
                    />
                    <Text>Tono de voz</Text>
                    <Slider
                        style={{width:200}}
                        minimumValue={0.5}
                        maximumValue={2}
                        step={0.25}
                        thumbTintColor={"white"}
                        minimumTrackTintColor={"black"}
                    />
                    <GeneralButton
                        buttonText={"Empezar con el dictado"}
                        onPressEvent={readText}
                    />
                    <GeneralButton
                        buttonText={"Parar"}
                        onPressEvent={pauseReading}
                    />
                    <GeneralButton
                        buttonText={"Continuar"}
                        onPressEvent={resumeReading}
                    />
                    </View>
                </View>
            </View>
        );
    }
}

function changeVoice () {
    Tts.setDefaultLanguage('es-ES');
}
// Reading texts function. Dots are used for little pause.
let readText;
readText = async () => {
    //changeVoice();
    Tts.stop();
    Tts.speak("Dificultad del dictado. " + jsonText.dictations[0].difficulty + ". Título del dictado. " +
        jsonText.dictations[0].title + ". Contenido del dictado. " + jsonText.dictations[0].text);
};

// Cancel speech for Android
let cancelReading;
cancelReading = async () => {
    Tts.stop();
};

// Only available for iOS
let pauseReading;
pauseReading = async () => {
    Tts.pause();
};

// Only available for iOS
let resumeReading;
resumeReading = async () => {
    Tts.resume();
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5c6bc0',
    },
});

export default DictationPage;