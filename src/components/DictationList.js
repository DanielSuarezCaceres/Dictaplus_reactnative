import React, {Component} from 'react';
import {StyleSheet, Text, View, Slider, TouchableWithoutFeedback, FlatList} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import { List, ListItem} from "react-native-elements";
import Header from './Header';
import jsonText from '../texts/texts';
import GeneralButton from "./GeneralButton";

class DictationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    render () {
        return (
            <List>

            </List>
        );
    }
}

export default DictationList;