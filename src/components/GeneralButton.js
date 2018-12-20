import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {heightPercentageToDP, widthPercentageToDP} from "../auxiliar/ScreenDimensions";

const GeneralButton = (props) => {
    return (
        <View>
            <TouchableHighlight style={styles.buttonStyle} onPress={props.onPressEvent}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}> {props.buttonText} </Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
   buttonStyle: {
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 25,
       backgroundColor: '#26418f', //'#8e99f3',
       marginTop: 25,
       paddingBottom: heightPercentageToDP('2%'), //esto cambia el padding dentro del boton
       paddingTop: heightPercentageToDP('2%'),
       paddingLeft: heightPercentageToDP('2%'),
       paddingRight: heightPercentageToDP('2%'),
   }
});

export default GeneralButton;