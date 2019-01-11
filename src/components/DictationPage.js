import React, {Component} from 'react';
import {StyleSheet, Image, Text, TextInput, View, Alert, Slider, TouchableWithoutFeedback} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import Header from './Header';
import jsonText from '../texts/texts';
import GeneralButton from "./GeneralButton";
import Tts from 'react-native-tts';
import pauseButton from '../../img/baseline_pause_circle_outline_white_48dp.png';
import playButton from '../../img/baseline_play_circle_outline_white_48dp.png';

let selectedDictTitle, selectedDictContent;

class DictationPage extends Component {
    render () {
        return (
            <View style={{flex:1}}>

                <View style={{flex:0.1}}>
                    <Header headerText={"  Empezar dictado"}/>
                </View>

                <View style={styles.mainContainer}>
                    <View style={styles.topContainer}>
                        <Text>
                            Velocidad de dictado:
                        </Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0.00}
                            maximumValue={1}
                            step={0.25}
                            thumbTintColor={"white"}
                            minimumTrackTintColor={"black"}
                        />
                        <Text>Tono de voz</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0.5}
                            maximumValue={2}
                            step={0.25}
                            thumbTintColor={"white"}
                            minimumTrackTintColor={"black"}
                        />

                        <View style={styles.middleContainer}>
                            <GeneralButton
                                buttonText={"START"}
                                onPressEvent={readText}
                            />

                            <GeneralButton
                                buttonText={"STOP"}
                                onPressEvent={pauseReading}
                            />

                            <GeneralButton
                                buttonText={"RESUME"}
                                onPressEvent={resumeReading}
                            />
                        </View>

                    </View>

                    <View style={styles.bottomContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Type your text here"}
                            placeholderTextColor={'white'}
                            multiline={true}

                        />
                        <GeneralButton
                            buttonText={"Mostrar datos dictado"}
                            onPressEvent={showDictData}
                        />
                        <GeneralButton
                            buttonText={"Enviar respuesta"}
                        />
                    </View>

                </View>
            </View>
        );
    }

    // Save data that comes from DictationList to read it later
    static takeDictData (title, content) {
        selectedDictTitle = title;
        selectedDictContent = content;
    }
}

function showDictData () {
    Alert.alert(selectedDictTitle, selectedDictContent);
}

function changeVoice () {
    Tts.setDefaultLanguage('es-ES');
}

// Reading texts function. Dots are used for little pause.
let readText;
readText = async () => {
    Tts.stop();
    Tts.speak("Título del dictado. " + selectedDictTitle + ". Comienza el dictado. " + selectedDictContent);
    /*Tts.speak("Dificultad del dictado. " + jsonText.dictations[0].difficulty + ". Título del dictado. " +
        jsonText.dictations[0].title + ". Contenido del dictado. " + jsonText.dictations[0].text);
        */
};

// Cancel reading for Android
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
    mainContainer: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5c6bc0',
    },
    topContainer: {
        flex:0.4,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    middleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 0.5,
    },
    textInput: {
        borderColor: 'white',
        borderRadius: 25,
        width: 300,
        height: 150,
        borderWidth: 1,
        backgroundColor: '#26418f',
    },
    slider: {
        width: 200,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default DictationPage;