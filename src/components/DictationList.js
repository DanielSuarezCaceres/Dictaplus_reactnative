import React, {Component} from 'react';
import {StyleSheet, Text, View, Slider, Image, TouchableWithoutFeedback, ListView, FlatList} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import { ListItem } from "react-native-elements";
import Header from './Header';
import jsonText from '../texts/texts';
import GeneralButton from "./GeneralButton";
import dictados from "../auxiliar/dictados";
import arrowIcon from '../../img/baseline_arrow_forward_black_48dp.png';
import DictationPage from './DictationPage';

let dictTitle, dictContent;

class DictationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: dictados,
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    // style separator for list components
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: '#26418f',
                }}
            />
        );
    };

    sendSelectedDictData () {
        DictationPage.takeDictData()
    }

    render () {
        return (
            <View style={{flex:1}}>
            <FlatList
                data={this.state.data}
                /*renderItem={({ item }) =>
                    <Text>{item.title}</Text>
                }*/
                keyExtractor={item => item.key}
                //keyExtractor={(x, i) => i}
                renderItem={({item}) => (
                    <ListItem
                        rightAvatar={{
                            source: item.rightIcon,
                            onPress: () => {DictationPage.takeDictData(item.title, item.content); Actions.dictationPage()}
                        }}
                        title={item.title}
                        titleStyle={{fontWeight: 'bold'}}
                        subtitle={"Difficulty: " + item.difficulty + "      Language: " + item.language}
                        containerStyle={styles.itemContainer}
                        //onPress={function(){DictationPage.takeDictData(item.title, item.content); Actions.dictationPage()}}
                    />
                )}
                ItemSeparatorComponent={this.renderSeparator}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   itemContainer: {
       backgroundColor: '#8e99f3',
   },
});

export default DictationList;