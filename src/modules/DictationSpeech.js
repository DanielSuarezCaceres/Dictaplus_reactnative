import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Picker, View, TouchableWithoutFeedback, FlatList} from 'react-native';
import GeneralButton from '../components/GeneralButton';
import Tts from 'react-native-tts';

class DictationSpeech extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        voices: [],
        ttsStatus: "initialiazing",
        selectedVoice: null,
        speechRate: 0.5,
        speechPitch: 1,
        text: "This is an example text. Just testing how is this library xd"
    };



}

export default DictationSpeech;