import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Picker, View, TouchableWithoutFeedback, FlatList} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import Header from './Header';
import DictationPage from './DictationPage';
import GeneralButton from './GeneralButton';

class DictationSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            difficulty: 'easy',
            language: 'spanish',
        }
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <View style={{flex:0.1}}><Header headerText={"  Buscar dictados"}/></View>
                <View style={styles.container}>
                    <Text style={styles.titleStyle}>¿Qué tipo de dictado quieres hacer?</Text>
                        <Text style={styles.labelStyle}>Level:</Text>
                    <Picker
                        selectedValue={this.state.difficulty}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({difficulty: itemValue})}>
                        <Picker.Item label="Easy" value="easy" />
                        <Picker.Item label="Medium" value="medium" />
                        <Picker.Item label="Hard" value="hard" />
                    </Picker>
                        <Text style={styles.labelStyle}>Language:</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Spanish" value="spanish" />
                        <Picker.Item label="English" value="english" />
                        <Picker.Item label="French" value="french" />
                        <Picker.Item label="Italian" value="italian"/>
                    </Picker>
                    <GeneralButton
                        buttonText={"Buscar"}
                        onPressEvent={Actions.dictationPage}
                        style={{width: 200}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#5c6bc0',
    },
    middleContainer: {
        flexDirection: 'row',
    },
    titleStyle: {
        marginTop: 40,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    labelStyle: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    pickerStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 25,
        marginBottom: 25,
    }

});

export default DictationSelector;